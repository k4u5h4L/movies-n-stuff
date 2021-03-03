import React from "react";
import dynamic from "next/dynamic";

const OwlCarousel = dynamic(
    () => {
        return import("react-owl-carousel");
    },
    { ssr: false }
);

export const SmallSlider = () => {
    return (
        <div className="slide-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 text-left mb-4 mt-1">
                        <h2>Best of World Cinema</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <OwlCarousel
                            className="slide-slider owl-carousel owl-theme"
                            loop
                            margin={15}
                            items={4}
                            nav
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
                                <a className="slide-one slide-two" href="#">
                                    <div
                                        className="slide-image"
                                        style={{
                                            backgroundImage: `url(/images/s17.png)`,
                                        }}
                                    ></div>
                                    <div className="slide-content">
                                        <h2>
                                            Batman Knight{" "}
                                            <img
                                                src="/images/plus.png"
                                                alt="icon"
                                                className="add-wishlist"
                                            />
                                        </h2>
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
                                <a className="slide-one slide-two" href="#">
                                    <div
                                        className="slide-image"
                                        style={{
                                            backgroundImage: `url(/images/s18.png)`,
                                        }}
                                    ></div>
                                    <div className="slide-content">
                                        <h2>
                                            Gimini Man{" "}
                                            <img
                                                src="/images/plus.png"
                                                alt="icon"
                                                className="add-wishlist"
                                            />
                                        </h2>
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

export default SmallSlider;
