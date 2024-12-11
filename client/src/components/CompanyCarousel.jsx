import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css";

import React from "react";

const CompanyCarousel = () => {
    return (
        <div className="pt-20 bg-gray-100 size-auto">
            <Marquee fade={true} pauseOnHover={true} numberOfCopies={4}>
                <div className="p-5"><img src="https://cdn.prod.website-files.com/649fb1e58cd0c1375ad3909b/6679800e2efdf373581d13c8_linkedin.svg" alt="google" /></div>
                <div className="p-5"><img src="https://cdn.prod.website-files.com/649fb1e58cd0c1375ad3909b/665ecfe1dd87825e576be850_productboard.svg" alt="microsoft" /></div>
                <div className="p-5"><img src="https://cdn.prod.website-files.com/649fb1e58cd0c1375ad3909b/667981520bfc75ec20044b65_front.svg" alt="apple" /></div>
                <div className="p-5"><img src="https://cdn.prod.website-files.com/649fb1e58cd0c1375ad3909b/661e2e1ba78911d63f49f9cb_chegg.svg" alt="oracle" /></div>
                <div className="p-5"><img src="https://cdn.prod.website-files.com/649fb1e58cd0c1375ad3909b/65e8c99c97e1bfd2fe178f02_substack-wordmark.svg" alt="react" /></div>
            </Marquee>
        </div>
    );
};

export default CompanyCarousel;
