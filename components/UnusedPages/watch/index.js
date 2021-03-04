import React from "react";

import Theme from "../../Theme";
import Navbar from "../../Home/Navbar/Navbar";
import Banner from "../../Video/Banner/Banner";
import Cast from "../../Video/Cast/Cast";
import Slider from "../../Home/Slider/Slider";
import Footer from "../../Home/Footer/Footer";

import Player from "../../Watch/Player/Player";

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
