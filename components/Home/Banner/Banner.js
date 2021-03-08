import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

const OwlCarousel = dynamic(
    () => {
        return import("react-owl-carousel");
    },
    { ssr: false }
);

const Banner = () => {
    const movies = [
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
    ];
    return (
        <div className="banner-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <OwlCarousel
                            className="banner-slider owl-carousel owl-theme"
                            items={1}
                            margin={15}
                            loop
                            autoPlay
                            dots
                        >
                            {movies.map((movie, index) => (
                                <div className="owl-items" key={index}>
                                    <div className="banner-wrap justify-content-between align-items-center">
                                        <div className="left-wrap">
                                            <span className="rnd">
                                                IMDb 6.7
                                            </span>
                                            <h2>{movie.name}</h2>
                                            <span className="tag">
                                                <b>Part 1</b>
                                            </span>
                                            <span className="tag">2020</span>
                                            <span className="tag">
                                                <b>HD</b>
                                            </span>
                                            <span className="tag">
                                                <b>16+</b>
                                            </span>
                                            <span className="tag">
                                                2 h 20 min
                                            </span>
                                            <p>
                                                I was going to type some
                                                elaborate description, but I
                                                guess gibberish works as well.
                                                So here you have it.
                                            </p>
                                            <a
                                                href="#"
                                                className="btn btn-lg btn-video"
                                            >
                                                <img
                                                    src="/images/play.png"
                                                    alt="icn"
                                                />
                                                Watch now
                                            </a>
                                        </div>
                                        <div
                                            className="right-wrap"
                                            style={{
                                                backgroundImage: `url(/images/banner-${
                                                    Math.ceil(
                                                        Math.random() * 4
                                                    ) + 1
                                                }.jpg)`,
                                            }}
                                        ></div>
                                    </div>
                                </div>
                            ))}

                            {/* <div className="owl-items">
                                <div className="banner-wrap justify-content-between align-items-center">
                                    <div className="left-wrap">
                                        <span className="rnd">IMDb 6.7</span>
                                        <h2>
                                            Made <br /> in heaven
                                        </h2>
                                        <span className="tag">
                                            <b>SEASON 1</b>
                                        </span>
                                        <span className="tag">2020</span>
                                        <span className="tag">
                                            <b>HD</b>
                                        </span>
                                        <span className="tag">
                                            <b>16+</b>
                                        </span>
                                        <span className="tag">2 h 20 min</span>
                                        <p>
                                            Radhe is a singing prodigy
                                            determined to follow in the
                                            classNameical footsteps of his
                                            grandfather. Tamanna is a YouTube
                                            pop sensation desperate to become .
                                        </p>
                                        <a
                                            href="#"
                                            className="btn btn-lg btn-video"
                                        >
                                            <img
                                                src="/images/play.png"
                                                alt="icn"
                                            />
                                            Watch now
                                        </a>
                                    </div>
                                    <div
                                        className="right-wrap"
                                        style={{
                                            backgroundImage: `url(/images/banner-3.jpg)`,
                                        }}
                                    ></div>
                                </div>
                            </div>

                            <div className="owl-items">
                                <div className="banner-wrap justify-content-between align-items-center">
                                    <div className="left-wrap">
                                        <span className="rnd">IMDb 6.7</span>
                                        <h2>
                                            Zero
                                            <br /> dark night
                                        </h2>
                                        <span className="tag">
                                            <b>SEASON 1</b>
                                        </span>
                                        <span className="tag">2020</span>
                                        <span className="tag">
                                            <b>HD</b>
                                        </span>
                                        <span className="tag">
                                            <b>16+</b>
                                        </span>
                                        <span className="tag">2 h 20 min</span>
                                        <p>
                                            Radhe is a singing prodigy
                                            determined to follow in the
                                            classNameical footsteps of his
                                            grandfather. Tamanna is a YouTube
                                            pop sensation desperate to become .
                                        </p>
                                        <a
                                            href="#"
                                            className="btn btn-lg btn-video"
                                        >
                                            <img
                                                src="/images/play.png"
                                                alt="icn"
                                            />
                                            Watch now
                                        </a>
                                    </div>
                                    <div
                                        className="right-wrap"
                                        style={{
                                            backgroundImage: `url(/images/banner-2.jpg)`,
                                        }}
                                    ></div>
                                </div>
                            </div>
                            <div className="owl-items">
                                <div className="banner-wrap justify-content-between align-items-center">
                                    <div className="left-wrap">
                                        <span className="rnd">IMDb 6.7</span>
                                        <h2>
                                            The <br /> night ever
                                        </h2>
                                        <span className="tag">
                                            <b>SEASON 1</b>
                                        </span>
                                        <span className="tag">2020</span>
                                        <span className="tag">
                                            <b>HD</b>
                                        </span>
                                        <span className="tag">
                                            <b>16+</b>
                                        </span>
                                        <span className="tag">2 h 20 min</span>
                                        <p>
                                            Radhe is a singing prodigy
                                            determined to follow in the
                                            classNameical footsteps of his
                                            grandfather. Tamanna is a YouTube
                                            pop sensation desperate to become .
                                        </p>
                                        <a
                                            href="#"
                                            className="btn btn-lg btn-video"
                                        >
                                            <img
                                                src="/images/play.png"
                                                alt="icn"
                                            />
                                            Watch now
                                        </a>
                                    </div>
                                    <div className="right-wrap">
                                        <video autoPlay muted loop id="myVideo">
                                            <source
                                                src="/images/video3.mp4"
                                                type="video/mp4"
                                            />
                                        </video>
                                    </div>
                                </div>
                            </div> */}
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
