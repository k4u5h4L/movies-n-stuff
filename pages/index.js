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
    // console.log(movies);
    return {
        props: {
            movies: movies,
        },
        revalidate: 1,
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
        {
            id: 5,
            name: "GotG",
            desc: "star lord",
            vidSource: "media/video-5.mp4",
        },
        {
            id: 6,
            name: "Spiderman",
            desc: "Homegoing",
            vidSource: "media/video-6.mp4",
        },
        {
            id: 7,
            name: "doctor strange",
            desc: "magic",
            vidSource: "media/video-7.mp4",
        },
        {
            id: 8,
            name: "captain america",
            desc: "murica",
            vidSource: "media/video-8.mp4",
        },
        {
            id: 9,
            name: "venom",
            desc: "black goo",
            vidSource: "media/video-9.mp4",
        },
        {
            id: 10,
            name: "black widow",
            desc: "hero",
            vidSource: "media/video-10.mp4",
        },
        {
            id: 11,
            name: "deadpool",
            desc: "chihuahua",
            vidSource: "media/video-11.mp4",
        },
        {
            id: 12,
            name: "logan",
            desc: "claws",
            vidSource: "media/video-12.mp4",
        },
        {
            id: 13,
            name: "black panther",
            desc: "wakanda",
            vidSource: "media/video-13.mp4",
        },
        {
            id: 14,
            name: "antman",
            desc: "smol",
            vidSource: "media/video-14.mp4",
        },
        {
            id: 15,
            name: "wanda",
            desc: "magic but red",
            vidSource: "media/video-15.mp4",
        },
        {
            id: 16,
            name: "stark",
            desc: "iron",
            vidSource: "media/video-16.mp4",
        },
        {
            id: 17,
            name: "thanos",
            desc: "purple giant",
            vidSource: "media/video-17.mp4",
        },
        {
            id: 18,
            name: "hulk",
            desc: "big green",
            vidSource: "media/video-18.mp4",
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
