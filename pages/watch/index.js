import React from "react";

import Theme from "../../components/Theme";
import Navbar from "../../components/Home/Navbar/Navbar";
import Banner from "../../components/Video/Banner/Banner";
import Cast from "../../components/Video/Cast/Cast";
import Slider from "../../components/Home/Slider/Slider";
import Footer from "../../components/Home/Footer/Footer";

import Player from "../../components/Watch/Player/Player";

const Watch = () => {
    return (
        <div>
            <Theme />

            <div className="main-wrapper">
                <Navbar />
                <Player />
                <Cast />
                <Slider title="Specials & Latest Movies" />
                <Footer />
            </div>
        </div>
    );
};

export default Watch;
