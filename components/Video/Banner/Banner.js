import React from "react";

const Banner = ({ movie }) => {
    return (
        <div className="banner-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
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
                                    Radhe is a singing prodigy determined to
                                    follow in the classNameical footsteps of his
                                    grandfather. Tamanna is a YouTube pop
                                    sensation desperate to become .
                                </p>
                                <a href="video.html" className="btn btn-lg">
                                    <img src="images/play.png" alt="icn" />
                                    Watch now
                                </a>
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
                                        src="images/video1.mp4"
                                        type="video/mp4"
                                    />
                                </video>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div className="slide-wrapper">
                            <div className="slide-slider owl-carousel owl-theme">
                                <div className="owl-items">
                                    <a
                                        className="slide-one slide-two slide-three"
                                        href="#"
                                    >
                                        <div
                                            className="slide-image"
                                            style={{
                                                backgroundImage: `url(images/s4.jpg)`,
                                            }}
                                        ></div>
                                        <div className="slide-content">
                                            <h2>
                                                Season 1
                                                <img
                                                    src="images/plus.png"
                                                    alt="icon"
                                                />
                                            </h2>
                                            <span className="tag">
                                                2 h 20 min
                                            </span>
                                            <span className="tag">2020</span>
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
                                                backgroundImage: `url(images/s3.jpg)`,
                                            }}
                                        ></div>
                                        <div className="slide-content">
                                            <h2>
                                                Season 2
                                                <img
                                                    src="images/plus.png"
                                                    alt="icon"
                                                />
                                            </h2>
                                            <span className="tag">
                                                2 h 20 min
                                            </span>
                                            <span className="tag">2020</span>
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
                                                backgroundImage: `url(images/s2.jpg)`,
                                            }}
                                        ></div>
                                        <div className="slide-content">
                                            <h2>
                                                Season 3
                                                <img
                                                    src="images/plus.png"
                                                    alt="icon"
                                                />
                                            </h2>
                                            <span className="tag">
                                                2 h 20 min
                                            </span>
                                            <span className="tag">2020</span>
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
                                                backgroundImage: `url(images/s1.jpg)`,
                                            }}
                                        ></div>
                                        <div className="slide-content">
                                            <h2>
                                                Season 4
                                                <img
                                                    src="images/plus.png"
                                                    alt="icon"
                                                />
                                            </h2>
                                            <span className="tag">
                                                2 h 20 min
                                            </span>
                                            <span className="tag">2020</span>
                                            <span className="tag">
                                                <b>HD</b>
                                            </span>
                                            <span className="tag">
                                                <b>16+</b>
                                            </span>
                                        </div>
                                    </a>
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
