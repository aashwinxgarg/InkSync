import React from "react";
import FeatureCard from "./FeatureCard";
import {
    desc1,
    desc2,
    desc3,
    desc4,
    desc5,
    img1,
    img2,
    img3,
    img4,
    img5,
} from "../assets/assets";

const Features = () => {
    return (
        <div className="bg-gray-100 pt-20">
            <div className=" flex items-center flex-row justify-center gap-10">
                <FeatureCard
                    image={img1}
                    name="Notes"
                    tag="Ready to use"
                    desc={desc1}
                />
                <FeatureCard
                    image={img2}
                    name="Meet"
                    tag="Under Development"
                    desc={desc2}
                />
                <FeatureCard
                    image={img3}
                    name="Canvas"
                    tag="Under Development"
                    desc={desc3}
                />
            </div>
            <div className="mt-8 flex items-center lg:flex-row md:justify-center gap-10">
                <FeatureCard
                    image={img4}
                    name="Chat"
                    tag="Ready to Use"
                    desc={desc4}
                />
                <FeatureCard
                    image={img5}
                    name="Docs"
                    tag="Under Development"
                    desc={desc5}
                />
            </div>
        </div>
    );
};

export default Features;
