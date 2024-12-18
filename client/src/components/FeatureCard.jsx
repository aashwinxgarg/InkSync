import React from "react";

const FeatureCard = ({image, name, tag, desc}) => {
    return (
        <div className="flex flex-col max-w-96 border-black bg-white p-10 rounded-2xl hover:rounded-3xl hover:scale-105 hover:shadow-lg transform transition-transform duration-300 ease-in-out cursor-pointer max-h-400px">
            <div className="">
                <img
                    src={image}
                    alt="feature"
                />
            </div>
            <div className="mt-8">
                <p className="text-3xl font-semibold ">{name}</p>
                <div className=" flex text-xs gap-2 mt-1">
                    <div className="border-2 border-black p-0.5 rounded-lg"><p>{tag}</p></div>
                </div>
            </div>
            <div className="mt-6 font-light w-64">
                <p>{desc}</p>
            </div>
            <div className="mt-16">
                <p>Learn more &rarr;</p>
            </div>
        </div>
    );
};

export default FeatureCard;
