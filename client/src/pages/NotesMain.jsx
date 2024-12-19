import React, { useContext, useState, useEffect } from "react";
import Navbar from "../../src/components/Navbar";
import SearchBar from "./Notes/components/SearchBar/SearchBar";
import SingleNoteCard from "./Notes/components/NoteCard/SingleNoteCard";
import AddEditNotes from "./AddEditNotes";
import Modal from "react-modal";
import Toast from "./Notes/components/ToastMessage/Toast";
import { useNavigate } from "react-router-dom";
import EmptyCard from "./Notes/components/EmptyCard/EmptyCard";
import { auth, db } from "../config/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { AppContext } from "../context/AppContext";
import { collection, deleteDoc, doc, getDocs, updateDoc, query, where } from "firebase/firestore";

function NotesMain() {
  const navigate = useNavigate();
  const { loadUserData2 } = useContext(AppContext);
  
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          navigate("/note-app");
          loadUserData2(user.uid);
        } catch (error) {
          console.error("Error saving user UID to backend:", error);
        }
      } else {
        navigate("/login");
      }
    });
  }, []);
  
  const [allNotes, setAllNotes] = useState([]);
  const [showToastMsg, setShowToastMsg] = useState({
    isShown: false,
    message: "",
    type: "add",
  });
  const [openAddEditModal, setOpenAddEditModel] = useState({
    isShown: false,
    type: "add",
    data: null,
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearch, setIsSearch] = useState(false);

  const handleEdit = (noteDetails) => {
    setOpenAddEditModel({ isShown: true, data: noteDetails, type: "edit" });
  };

  const showToastMessage = (message, type) => {
    setShowToastMsg({ isShown: true, message, type });
  };

  const handleCloseToast = () => {
    setShowToastMsg({ isShown: false, message: "" });
  };

  // Get All Notes
  const getAllNotes = async () => {
    try {
      const notesCollection = collection(db, "notes");
      const q = query(notesCollection, where("userId", "==", auth.currentUser.uid));
      const notesSnapshot = await getDocs(q);
      const notes = notesSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setAllNotes(notes);
    } catch (error) {
      console.error("An unexpected error occurred...Try Again!!", error);
    }
  };
  

useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      // Fetch notes when user logs in
      getAllNotes();
    } else {
      // Clear notes when logged out
      setAllNotes([]);
    }
  });

  return () => unsubscribe(); // Cleanup the listener on unmount
}, []);

  

  // Delete Note
  const deleteNote = async (data) => {
    const noteId = data.id;
    try {
      const noteRef = doc(db, "notes", noteId);
      await deleteDoc(noteRef);
      showToastMessage("Note Deleted Successfully", "delete");
      getAllNotes();
    } catch (error) {
      console.error("Error deleting note: ", error);
    }
  };

  // Pin Note
  const updateIsPinned = async (noteData) => {
    const noteId = noteData.id;
    try {
      const noteRef = doc(db, "notes", noteId);
      await updateDoc(noteRef, { isPinned: !noteData.isPinned });
      showToastMessage("Note Updated Successfully");
      getAllNotes();
    } catch (error) {
      console.error("Error updating note: ", error);
    }
  };

  // Handle Search
  const handleSearch = () => {
    if (searchQuery === "") {
      setIsSearch(false);
      getAllNotes(); // Fetch all notes when search is cleared
    } else {
      onSearchNote(searchQuery); // Fetch search results based on query
    }
  };

  const onClearSearch = () => {
    setSearchQuery("");
    setIsSearch(false);
    getAllNotes();
  };

  // Fetch Notes from Firestore
  const onSearchNote = async (searchQuery) => {
    try {
      // Create a query for searching notes where title starts with the searchQuery and userId matches the current user's UID
      const notesQuery = query(
        collection(db, "notes"),
        where("userId", "==", auth.currentUser.uid),
where("title", ">=", searchQuery),
where("title", "<=", searchQuery + "\uf8ff")
  // Range query for prefix matching
      );
  
      // Fetch the notes using getDocs
      const notesSnapshot = await getDocs(notesQuery);
  
      if (!notesSnapshot.empty) {
        const notesData = notesSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setIsSearch(true);
        setAllNotes(notesData);
      } else {
        setAllNotes([]);
        setIsSearch(false);
      }
    } catch (error) {
      console.error("Error searching notes:", error);
    }
  };
  
  

  // Run search on searchQuery change
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setIsSearch(false);
      getAllNotes(); // Fetch all notes when search is cleared
    } else {
      onSearchNote(searchQuery); // Fetch search results
    }
  }, [searchQuery]);

  useEffect(() => {
    getAllNotes(); // Fetch notes when component mounts
    return () => {};
  }, []);

  return (
    <>
      <Navbar />
      <div className="mt-24 mb-8 flex items-center justify-center">
        <div className="h-20 flex items-center justify-center">
          <SearchBar
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            handleSearch={handleSearch}
            onClearSearch={onClearSearch}
          />
        </div>
      </div>

      <div>
        {allNotes.length > 0 ? (
          <div className="container w-[80%] mx-auto columns-2 lg:columns-4 md:columns-3 sm:columns-2 gap-x-3 lg:gap-x-6 md:gap-x-5 sm:gap-x-4">
            {allNotes.map((item) => (
              <SingleNoteCard
                key={item.id}
                title={item.title}
                date={item.createdOn}
                content={item.content}
                tags={item.tags}
                isPinned={item.isPinned}
                onEdit={() => handleEdit(item)}
                onDelete={() => deleteNote(item)}
                onPinNote={() => updateIsPinned(item)}
              />
            ))}
          </div>
        ) : (
          <div className="h-full">
            <EmptyCard />
          </div>
        )}
      </div>

      <div className="plusIcon bg-black w-16 h-16 rounded-xl fixed right-8 bottom-8 sm:right-16 sm:bottom-16 flex justify-center items-center text-5xl shadow-2xl shadow-slate-500 z-50">
        <button
          className="text-white"
          onClick={() => {
            setOpenAddEditModel({ isShown: true, type: "add", data: null });
          }}
        >
          +
        </button>
      </div>

      <Modal
        isOpen={openAddEditModal.isShown}
        onRequestClose={() => {}}
        style={{
          overlay: {
            backgroundColor: "rgba(0,0,0,0.2)",
          },
        }}
        contentLabel=""
        className="rounded-md mx-auto mt-14 p-5 overflow-scroll"
      >
        <AddEditNotes
          type={openAddEditModal.type}
          noteData={openAddEditModal.data}
          onClose={() => {
            setOpenAddEditModel({ isShown: false, type: "add", data: null });
          }}
          getAllNotes={getAllNotes}
          showToastMessage={showToastMessage}
        />
      </Modal>

      <Toast
        isShown={showToastMsg.isShown}
        message={showToastMsg.message}
        type={showToastMsg.type}
        onClose={handleCloseToast}
      />
    </>
  );
}

export default NotesMain;
