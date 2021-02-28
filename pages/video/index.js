import React from "react";

import Preloader from "../../components/Preloader/Preloader";
import Theme from "../../components/Theme";
import Navbar from "../../components/Home/Navbar/Navbar";
import Banner from "../../components/Video/Banner/Banner";
import Cast from "../../components/Video/Cast/Cast";
import Slider from "../../components/Home/Slider/Slider";
import Footer from "../../components/Home/Footer/Footer";

const Video = () => {
    return (
        <div>
            {/* <Preloader /> */}
            <Theme />

            <div className="main-wrapper">
                <Navbar />
                <Banner />
                <Cast />
                <Slider title="Specials & Latest Movies" />
                <Footer />
            </div>
        </div>
    );
};

export default Video;
