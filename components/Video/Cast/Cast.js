import React from "react";
import dynamic from "next/dynamic";

const OwlCarousel = dynamic(
    () => {
        return import("react-owl-carousel");
    },
    { ssr: false }
);

const Cast = () => {
    return (
        <div className="slide-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 text-left mb-4 mt-4">
                        <h2>The Crew</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <OwlCarousel
                            className="team-slider owl-carousel owl-theme"
                            loop
                            margin={15}
                            items={7}
                            responsive={{
                                0: {
                                    items: 2,
                                },
                                600: {
                                    items: 5,
                                },
                                1200: {
                                    items: 6,
                                },
                                1600: {
                                    items: 7,
                                },
                            }}
                        >
                            <div className="owl-items">
                                <a href="#" className="crew-wrap">
                                    <img src="/images/team1.jpg" alt="team" />
                                    <span>David Wenham</span>
                                </a>
                            </div>
                            <div className="owl-items">
                                <a href="#" className="crew-wrap">
                                    <img src="/images/team2.jpg" alt="team" />
                                    <span>Johnny Depp</span>
                                </a>
                            </div>
                            <div className="owl-items">
                                <a href="#" className="crew-wrap">
                                    <img src="/images/team3.jpg" alt="team" />
                                    <span>Javier Bardem</span>
                                </a>
                            </div>
                            <div className="owl-items">
                                <a href="#" className="crew-wrap">
                                    <img src="/images/team4.jpg" alt="team" />
                                    <span>Brenton T</span>
                                </a>
                            </div>
                            <div className="owl-items">
                                <a href="#" className="crew-wrap">
                                    <img src="/images/team8.jpg" alt="team" />
                                    <span>Kaya Scodelario</span>
                                </a>
                            </div>
                            <div className="owl-items">
                                <a href="#" className="crew-wrap">
                                    <img src="/images/team6.jpg" alt="team" />
                                    <span>Kevin McNally</span>
                                </a>
                            </div>
                            <div className="owl-items">
                                <a href="#" className="crew-wrap">
                                    <img src="/images/team7.jpg" alt="team" />
                                    <span>McNally</span>
                                </a>
                            </div>
                            <div className="owl-items">
                                <a href="#" className="crew-wrap">
                                    <img src="/images/team5.jpg" alt="team" />
                                    <span>Wenham</span>
                                </a>
                            </div>
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cast;
