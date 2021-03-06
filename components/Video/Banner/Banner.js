import React, { useState } from "react";
import {
    Player as VideoPlayer,
    ControlBar,
    ReplayControl,
    ForwardControl,
    CurrentTimeDisplay,
    TimeDivider,
    PlaybackRateMenuButton,
    VolumeMenuButton,
} from "video-react";
import dynamic from "next/dynamic";

const OwlCarousel = dynamic(
    () => {
        return import("react-owl-carousel");
    },
    { ssr: false }
);

const Banner = ({ movie }) => {
    const [startVideo, setStartVideo] = useState(false);

    return (
        <div className="banner-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        {!startVideo ? (
                            <div className="banner-wrap justify-content-between align-items-center">
                                <div className="left-wrap">
                                    <span className="rnd">IMDb 6.7</span>
                                    <h2>{movie.name}</h2>
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
                                    <p>{movie.desc}</p>
                                    <p>
                                        This movie is really great, and
                                        amazingly moderate as there is nothing
                                        much to it. Huh, that makes it average I
                                        guess.
                                    </p>
                                    <button
                                        className="btn btn-lg"
                                        onClick={() => setStartVideo(true)}
                                    >
                                        <img src="/images/play.png" alt="icn" />
                                        Watch now
                                    </button>
                                    <a href="#" className="icon-bttn">
                                        <i className="ti-plus text-white"></i>
                                    </a>
                                    <div className="icon-bttn">
                                        <i className="ti-sharethis text-white mr-4"></i>
                                        <div className="share-icons">
                                            <a href="#">
                                                <i className="ti-facebook"></i>
                                            </a>
                                            <a href="#">
                                                <i className="ti-twitter-alt"></i>
                                            </a>
                                            <a href="#">
                                                <i className="mr-0 ti-pinterest"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="right-wrap">
                                    <video autoPlay muted loop id="myVideo">
                                        <source
                                            src={`/api/video/${movie.id}`}
                                            type="video/mp4"
                                        />
                                    </video>
                                </div>
                            </div>
                        ) : (
                            <VideoPlayer
                                // poster="/images/banner-2.jpg"
                                // fluid={false}
                                // width={1500}
                                // style={{ marginLeft: "100px" }}
                                className="banner-wrap"
                                autoPlay
                                loop
                            >
                                <source
                                    src={`/api/video/${movie.id}`}
                                    type="video/mp4"
                                    // title="1080p"
                                />
                                <ControlBar>
                                    <ReplayControl seconds={10} order={1.1} />
                                    <ForwardControl seconds={30} order={1.2} />
                                    <CurrentTimeDisplay order={4.1} />
                                    <TimeDivider order={4.2} />
                                    <PlaybackRateMenuButton
                                        rates={[5, 2, 1, 0.5, 0.1]}
                                        order={7.1}
                                    />
                                    <VolumeMenuButton />
                                </ControlBar>
                            </VideoPlayer>
                        )}
                    </div>
                    {/* {!startVideo ? (
                        <div className="col-sm-12">
                            <div className="slide-wrapper">
                                <OwlCarousel
                                    className="slide-slider owl-carousel owl-theme"
                                    loop
                                    margin={15}
                                    nav
                                    items={4}
                                    navText={[
                                        '<img src="/images/left.png" alt="icon" />',
                                        '<img src="/images/right.png" alt="icon" />',
                                    ]}
                                    responsive={{
                                        0: {
                                            items: 2,
                                        },
                                        600: {
                                            items: 3,
                                        },
                                        1200: {
                                            items: 4,
                                        },
                                    }}
                                >
                                    <div className="owl-items">
                                        <a
                                            className="slide-one slide-two slide-three"
                                            href="#"
                                        >
                                            <div
                                                className="slide-image"
                                                style={{
                                                    backgroundImage: `url(/images/s4.jpg)`,
                                                }}
                                            ></div>
                                            <div className="slide-content">
                                                <h2>
                                                    Season 1
                                                    <img
                                                        src="/images/plus.png"
                                                        alt="icon"
                                                    />
                                                </h2>
                                                <span className="tag">
                                                    2 h 20 min
                                                </span>
                                                <span className="tag">
                                                    2020
                                                </span>
                                                <span className="tag">
                                                    <b>HD</b>
                                                </span>
                                                <span className="tag">
                                                    <b>16+</b>
                                                </span>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="owl-items">
                                        <a
                                            className="slide-one slide-two slide-three"
                                            href="#"
                                        >
                                            <div
                                                className="slide-image"
                                                style={{
                                                    backgroundImage: `url(/images/s3.jpg)`,
                                                }}
                                            ></div>
                                            <div className="slide-content">
                                                <h2>
                                                    Season 2
                                                    <img
                                                        src="/images/plus.png"
                                                        alt="icon"
                                                    />
                                                </h2>
                                                <span className="tag">
                                                    2 h 20 min
                                                </span>
                                                <span className="tag">
                                                    2020
                                                </span>
                                                <span className="tag">
                                                    <b>HD</b>
                                                </span>
                                                <span className="tag">
                                                    <b>16+</b>
                                                </span>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="owl-items">
                                        <a
                                            className="slide-one slide-two slide-three"
                                            href="#"
                                        >
                                            <div
                                                className="slide-image"
                                                style={{
                                                    backgroundImage: `url(/images/s2.jpg)`,
                                                }}
                                            ></div>
                                            <div className="slide-content">
                                                <h2>
                                                    Season 3
                                                    <img
                                                        src="/images/plus.png"
                                                        alt="icon"
                                                    />
                                                </h2>
                                                <span className="tag">
                                                    2 h 20 min
                                                </span>
                                                <span className="tag">
                                                    2020
                                                </span>
                                                <span className="tag">
                                                    <b>HD</b>
                                                </span>
                                                <span className="tag">
                                                    <b>16+</b>
                                                </span>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="owl-items">
                                        <a
                                            className="slide-one slide-two slide-three"
                                            href="#"
                                        >
                                            <div
                                                className="slide-image"
                                                style={{
                                                    backgroundImage: `url(/images/s1.jpg)`,
                                                }}
                                            ></div>
                                            <div className="slide-content">
                                                <h2>
                                                    Season 4
                                                    <img
                                                        src="/images/plus.png"
                                                        alt="icon"
                                                    />
                                                </h2>
                                                <span className="tag">
                                                    2 h 20 min
                                                </span>
                                                <span className="tag">
                                                    2020
                                                </span>
                                                <span className="tag">
                                                    <b>HD</b>
                                                </span>
                                                <span className="tag">
                                                    <b>16+</b>
                                                </span>
                                            </div>
                                        </a>
                                    </div>
                                </OwlCarousel>
                            </div>
                        </div>
                    ) : null} */}
                </div>
            </div>
        </div>
    );
};

export default Banner;
