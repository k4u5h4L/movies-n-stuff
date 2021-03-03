import React from "react";
import dynamic from "next/dynamic";

const OwlCarousel = dynamic(
    () => {
        return import("react-owl-carousel");
    },
    { ssr: false }
);

const Slider = (props) => {
    return (
        <div className="slide-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 text-left mb-4 mt-4">
                        <h2>{props.title}</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
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
                                <a className="slide-one" href="season.html">
                                    <div className="slide-image">
                                        <img src="/images/s5.jpg" alt="image" />
                                    </div>
                                    <div className="slide-content">
                                        <h2>
                                            Made in haven{" "}
                                            <img
                                                src="/images/plus.png"
                                                alt="icon"
                                                className="add-wishlist"
                                            />
                                        </h2>
                                        <p>
                                            Radhe is a singing prodigy
                                            determined to follow in the
                                            classNameical footsteps of his
                                            grandfather.
                                        </p>
                                        <span className="tag">2 h 20 min</span>
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
                                <a className="slide-one" href="season.html">
                                    <div className="slide-image">
                                        <img src="/images/s6.jpg" alt="image" />
                                    </div>
                                    <div className="slide-content">
                                        <h2>
                                            Gravity{" "}
                                            <img
                                                src="/images/plus.png"
                                                alt="icon"
                                                className="add-wishlist"
                                            />
                                        </h2>
                                        <p>
                                            Radhe is a singing prodigy
                                            determined to follow in the
                                            classNameical footsteps of his
                                            grandfather.
                                        </p>
                                        <span className="tag">2 h 20 min</span>
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
                                <a className="slide-one" href="season.html">
                                    <div className="slide-image">
                                        <img src="/images/s7.jpg" alt="image" />
                                    </div>
                                    <div className="slide-content">
                                        <h2>
                                            Inspector{" "}
                                            <img
                                                src="/images/plus.png"
                                                alt="icon"
                                                className="add-wishlist"
                                            />
                                        </h2>
                                        <p>
                                            Radhe is a singing prodigy
                                            determined to follow in the
                                            classNameical footsteps of his
                                            grandfather.
                                        </p>
                                        <span className="tag">2 h 20 min</span>
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
                                <a className="slide-one" href="season.html">
                                    <div className="slide-image">
                                        <img src="/images/s8.jpg" alt="image" />
                                    </div>
                                    <div className="slide-content">
                                        <h2>
                                            Sky Staar{" "}
                                            <img
                                                src="/images/plus.png"
                                                alt="icon"
                                                className="add-wishlist"
                                            />
                                        </h2>
                                        <p>
                                            Radhe is a singing prodigy
                                            determined to follow in the
                                            classNameical footsteps of his
                                            grandfather.
                                        </p>
                                        <span className="tag">2 h 20 min</span>
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
                                <a className="slide-one" href="season.html">
                                    <div className="slide-image">
                                        <img src="/images/s1.jpg" alt="image" />
                                    </div>
                                    <div className="slide-content">
                                        <h2>
                                            Inspector{" "}
                                            <img
                                                src="/images/plus.png"
                                                alt="icon"
                                                className="add-wishlist"
                                            />
                                        </h2>
                                        <p>
                                            Radhe is a singing prodigy
                                            determined to follow in the
                                            classNameical footsteps of his
                                            grandfather.
                                        </p>
                                        <span className="tag">2 h 20 min</span>
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
                                <a className="slide-one" href="season.html">
                                    <div className="slide-image">
                                        <img src="/images/s2.jpg" alt="image" />
                                    </div>
                                    <div className="slide-content">
                                        <h2>
                                            Sky Staar{" "}
                                            <img
                                                src="/images/plus.png"
                                                alt="icon"
                                                className="add-wishlist"
                                            />
                                        </h2>
                                        <p>
                                            Radhe is a singing prodigy
                                            determined to follow in the
                                            classNameical footsteps of his
                                            grandfather.
                                        </p>
                                        <span className="tag">2 h 20 min</span>
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
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;
