import React from "react";

import Theme from "../../components/Theme";
import Navbar from "../../components/Home/Navbar/Navbar";
import Banner from "../../components/Video/Banner/Banner";
import Cast from "../../components/Video/Cast/Cast";
import Slider from "../../components/Home/Slider/Slider";
import Footer from "../../components/Home/Footer/Footer";

import { PrismaClient } from "@prisma/client";
import { useRouter } from "next/router";

const prisma = new PrismaClient();

const Video = ({ movie, status }) => {
    if (typeof window !== "undefined") {
        const router = useRouter();

        if (status == false) {
            router.push("/");
        }
    }

    return (
        <div>
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

export default Video;
