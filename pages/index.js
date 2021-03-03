import React from "react";

import Theme from "../components/Theme";
import Navbar from "../components/Home/Navbar/Navbar";
import Banner from "../components/Home/Banner/Banner";
import Slider from "../components/Home/Slider/Slider";
import SmallSlider from "../components/Home/SmallSlider/SmallSlider";
import Categories from "../components/Home/Categories/Categories";
import Footer from "../components/Home/Footer/Footer";

const Home = () => {
    return (
        <div>
            <Theme />

            <div className="main-wrapper">
                <Navbar />
                <Banner />
                <Slider title="Specials & Latest Movies" />
                <Slider title="Recommended movies" />
                <SmallSlider />
                <Categories />
                <Footer />
            </div>
        </div>
    );
};

export default Home;
