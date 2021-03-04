import React from "react";

import Theme from "../components/Theme";
import Navbar from "../components/Home/Navbar/Navbar";
import Banner from "../components/Home/Banner/Banner";
import Slider from "../components/Home/Slider/Slider";
import SmallSlider from "../components/Home/SmallSlider/SmallSlider";
import Categories from "../components/Home/Categories/Categories";
import Footer from "../components/Home/Footer/Footer";

import prisma from "../prisma/client";

export async function getStaticProps(context) {
    const movies = await prisma.movie.findMany();
    console.log(movies);
    return {
        props: {
            movies: movies,
        },
    };
}

const Home = ({ movies }) => {
    const fallback = [
        { id: 1, name: "Tenet", desc: "", vidSource: "media/video-1.mp4" },
        { id: 2, name: "Endgame", desc: "", vidSource: "media/video-2.mp4" },
        { id: 3, name: "Ragnarok", desc: "", vidSource: "media/video-3.mp4" },
        {
            id: 4,
            name: "captain marvel",
            desc: "",
            vidSource: "media/video-4.mp4",
        },
    ];
    return (
        <div>
            <Theme />

            <div className="main-wrapper">
                <Navbar />
                <Banner />
                <Slider title="Specials & Latest Movies" movies={movies} />
                <Slider title="Recommended movies" movies={fallback} />
                <SmallSlider />
                <Categories />
                <Footer />
            </div>
        </div>
    );
};

export default Home;
