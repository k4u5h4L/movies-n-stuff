import React from "react";
import { useRouter } from "next/router";

import Theme from "../../components/Theme";
import Navbar from "../../components/Home/Navbar/Navbar";
import Banner from "../../components/Video/Banner/Banner";
import Cast from "../../components/Video/Cast/Cast";
import Slider from "../../components/Home/Slider/Slider";
import Footer from "../../components/Home/Footer/Footer";

import prisma from "../../prisma/client";

export const getServerSideProps = async (context) => {
    const movieId = parseInt(context.params.id);
    if (!movieId) {
        return {
            props: {
                movie: {
                    id: 9,
                    name: "Error",
                    desc: "Bell",
                },
                status: false,
            },
        };
    }
    const movie = await prisma.movie.findFirst({ where: { id: movieId } });
    return {
        props: {
            movie: movie,
            status: true,
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
};

const Video = ({ movie, status }) => {
    if (typeof window !== "undefined") {
        const router = useRouter();

        if (status == false) {
            router.push("/");
        }
    }

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
                <Banner movie={movie} />
                <Cast />
                <Slider title="Specials & Latest Movies" movies={fallback} />
                <Footer />
            </div>
        </div>
    );
};

export default Video;
