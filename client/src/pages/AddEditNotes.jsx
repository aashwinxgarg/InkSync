import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import TagInput from "./Notes/components/Input/TagInput";
import { MdClose } from "react-icons/md";
import { doc, setDoc, updateDoc } from "firebase/firestore";
import { auth, db } from "../config/firebase";

function AddEditNotes({ noteData, type, getAllNotes, onClose, showToastMessage }) {
  const [title, setTitle] = useState(noteData?.title || "");
  const [content, setContent] = useState(noteData?.content || "");
  const [tags, setTags] = useState(noteData?.tags || []);
  const [error, setError] = useState(null);
  const [successMessage, setSuccess] = useState("");

  const toolbarOptions = [
    ["bold", "italic", "underline", "strike"],
    ["blockquote", "code-block"],
    [{ header: 1 }, { header: 2 }],
    [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
    [{ script: "sub" }, { script: "super" }],
    [{ indent: "-1" }, { indent: "+1" }],
    [{ direction: "rtl" }],
    [{ size: ["small", false, "large", "huge"] }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ color: [] }, { background: [] }],
    [{ font: [] }],
    [{ align: [] }],
    ["clean"],
  ];

  const modules = {
    toolbar: toolbarOptions,
  };

  const handleAddNote = async () => {
    if (!title) {
      setError("Please enter the title");
      return;
    }
  
    if (!content) {
      setError("Please enter the content");
      return;
    }
  
    setError("");
  
    try {
      if (type === "edit") {
        // Use noteData's unique ID for Firestore
        const noteRef = doc(db, "notes", noteData.id);
        await updateDoc(noteRef, {
          title: title,
          content: content,
          tags: tags,
          updatedAt: new Date().toISOString(),
        });
        showToastMessage("Note Updated Successfully");
      } else {
        // Generate a unique ID for new notes
        const noteId = crypto.randomUUID();
        const noteRef = doc(db, "notes", noteId);
        await setDoc(noteRef, {
          title: title,
          content: content,
          tags: tags,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          userId: auth.currentUser.uid,  // Save the user ID with the note
        });
        showToastMessage("Note Added Successfully");
      }
      getAllNotes();
      onClose();
    } catch (error) {
      console.error("Error saving note: ", error);
      setError("Failed to save the note. Please try again.");
    }
  };
  





  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="w-[50vw] relative bg-white rounded-lg flex flex-col items-center p-10">
        <div className="absolute top-0 right-0 w-10 h-10 flex items-center justify-center">
          <button
            className="rounded-full flex items-center justify-center hover:bg-slate-50"
            onClick={onClose}
          >
            <MdClose className="text-xl text-slate-400" />
          </button>
        </div>

        <div className="flex flex-col gap-2 w-full">
          <label className="input-label text-sm text-slate-700">TITLE</label>
          <input
            type="text"
            className="text-2xl text-slate-950 outline-none w-full"
            placeholder="Enter Title ..."
            value={title}
            onChange={({ target }) => setTitle(target.value)}
          />
        </div>

        <div className="flex flex-col gap-2 mt-4 w-full">
          <label className="input-label text-sm text-slate-700">CONTENT</label>
          <ReactQuill
            modules={modules}
            theme="snow"
            placeholder="Write your content here..."
            value={content}
            onChange={setContent}
          />
        </div>

        <div className="mt-3 mb-3 w-full">
          <label className="text-xs text-slate-400">TAGS</label>
          <TagInput tags={tags} setTags={setTags} />
        </div>

        {error && <p className="text-red-500 text-xs pt-4">{error}</p>}
        {successMessage && <p className="text-green-500 text-xs pt-4">{successMessage}</p>}

        <button
          className="bg-black text-white w-[100%] rounded-lg font-medium mt-5 p-3"
          onClick={handleAddNote}
        >
          {type === "edit" ? "UPDATE" : "ADD"}
        </button>
      </div>
    </div>
  );
}

export default AddEditNotes;
