import React from "react";

import Preloader from "../components/Preloader/Preloader";
import Theme from "../components/Theme";
import Navbar from "../components/Home/Navbar/Navbar";
import Banner from "../components/Home/Banner/Banner";
import Slider from "../components/Home/Slider/Slider";
import SmallSlider from "../components/Home/SmallSlider/SmallSlider";

const Home = () => {
    return (
        <div>
            <Preloader />
            <Theme />

            <div className="main-wrapper">
                <Navbar />
                <Banner />
                <Slider title="Specials & Latest Movies" />
                <Slider title="Recommended movies" />
                <SmallSlider />
            </div>
        </div>
    );
};

export default Home;
