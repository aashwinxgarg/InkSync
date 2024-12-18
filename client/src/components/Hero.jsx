import HeroImg2 from "../assets/HeroImg2.png";
import "./Hero.css";

export default function Hero() {
    return (
        <div className="relative min-h-screen overflow-hidden bg-gray-100">
            <div className="relative mx-16 top-32">
                <div className="text-9xl text-black font-bold">
                    <h1 className="py-4">Take Control Of Your</h1>
                    <div className="ani flex flex-row py-4">
                        <h1 className="h-36 relative overflow-hidden border-black border-2">
                            <div className="">Tasks</div>
                            <span className="ml-96 text-gray-400">Discuss</span>
                            <span className="ml-96 text-gray-400">Track</span>
                            <span className="ml-96 text-gray-400">Organize</span>
                            <span className="ml-96 text-gray-400">Manage</span>
                        </h1>
                    </div>
                </div>
                <div className="heroImg border-4 border-black mt-16 rounded-2xl">
                    <img
                        src={HeroImg2}
                        alt=""
                        className="rounded-2xl opacity-90"
                    />
                </div>
            </div>
        </div>
    );
}
