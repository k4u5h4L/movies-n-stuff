import React from "react";

import Preloader from "../../components/Preloader/Preloader";
import Theme from "../../components/Theme";
import Navbar from "../../components/Home/Navbar/Navbar";
import Banner from "../../components/Video/Banner/Banner";
import Cast from "../../components/Video/Cast/Cast";
import Slider from "../../components/Home/Slider/Slider";
import Footer from "../../components/Home/Footer/Footer";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const Video = ({ movie }) => {
    return (
        <div>
            {/* <Preloader /> */}
            <Theme />

            <div className="main-wrapper">
                <Navbar />
                <Banner movie={movie} />
                <Cast />
                <Slider title="Specials & Latest Movies" />
                <Footer />
            </div>
        </div>
    );
};

export async function getServerSideProps(context) {
    const movieId = parseInt(context.params.id);
    const movie = await prisma.movie.findFirst({ where: { id: movieId } });
    return {
        props: {
            movie: movie,
        },
    };

    // return {
    //     props: {
    //         movie: {
    //             id: 2,
    //             name: "Endgame",
    //             desc: "avengers",
    //         },
    //     },
    // };
}

export default Video;
