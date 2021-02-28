import { urlObjectKeys } from "next/dist/next-server/lib/utils";
import React from "react";

const Banner = () => {
    return (
        <div className="banner-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="banner-slider owl-carousel owl-theme">
                            <div className="owl-items">
                                <div className="banner-wrap justify-content-between align-items-center">
                                    <div className="left-wrap">
                                        <span className="rnd">IMDb 6.7</span>
                                        <h2>
                                            Mother of <br />
                                            Brooklyn
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
                                                src="images/play.png"
                                                alt="icn"
                                            />
                                            Watch now
                                        </a>
                                    </div>
                                    <div
                                        className="right-wrap"
                                        style={{
                                            backgroundImage: `url(images/banner-4.jpg)`,
                                        }}
                                    ></div>
                                </div>
                            </div>

                            <div className="owl-items">
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
                                                src="images/play.png"
                                                alt="icn"
                                            />
                                            Watch now
                                        </a>
                                    </div>
                                    <div
                                        className="right-wrap"
                                        style={{
                                            backgroundImage: `url(images/banner-3.jpg)`,
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
                                                src="images/play.png"
                                                alt="icn"
                                            />
                                            Watch now
                                        </a>
                                    </div>
                                    <div
                                        className="right-wrap"
                                        style={{
                                            backgroundImage: `url(images/banner-2.jpg)`,
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
                                                src="images/play.png"
                                                alt="icn"
                                            />
                                            Watch now
                                        </a>
                                    </div>
                                    <div className="right-wrap">
                                        <video autoPlay muted loop id="myVideo">
                                            <source
                                                src="images/video3.mp4"
                                                type="video/mp4"
                                            />
                                        </video>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
