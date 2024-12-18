import HeroImg2 from "../assets/HeroImg2.png";
import "./Hero.css";
import homegif from '../assets/homepagegif.gif'

export default function Hero() {
    return (
        <div className="relative min-h-screen bg-gray-100">
            <div className="relative mx-16 top-32">
                <div className="text-8xl text-black font-bold">
                    <h1 className="py-4">Take Control Of Your</h1>
                    <div className="ani flex flex-row py-4">
                        <div className="mr-12">Tasks</div>
                        <h1 className="h-32 relative overflow-hidden">
                            <span className="text-gray-400 pb-3">Discuss</span>
                            <span className="text-gray-400 pb-3">Track</span>
                            <span className="text-gray-400 pb-3">Organize</span>
                            <span className="text-gray-400 pb-3">Manage</span>
                        </h1>
                    </div>
                </div>
                <div className=" items-center flex justify-center pt-24 pd-96">
                    <img
                        src={homegif}
                        alt=""
                        className="scale-125"
                    />
                </div>
            </div>
        </div>
    );
}


