import React from "react";

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
                        <div className="team-slider owl-carousel owl-theme">
                            <div className="owl-items">
                                <a href="#" className="crew-wrap">
                                    <img src="images/team1.jpg" alt="team" />
                                    <span>David Wenham</span>
                                </a>
                            </div>
                            <div className="owl-items">
                                <a href="#" className="crew-wrap">
                                    <img src="images/team2.jpg" alt="team" />
                                    <span>Johnny Depp</span>
                                </a>
                            </div>
                            <div className="owl-items">
                                <a href="#" className="crew-wrap">
                                    <img src="images/team3.jpg" alt="team" />
                                    <span>Javier Bardem</span>
                                </a>
                            </div>
                            <div className="owl-items">
                                <a href="#" className="crew-wrap">
                                    <img src="images/team4.jpg" alt="team" />
                                    <span>Brenton T</span>
                                </a>
                            </div>
                            <div className="owl-items">
                                <a href="#" className="crew-wrap">
                                    <img src="images/team8.jpg" alt="team" />
                                    <span>Kaya Scodelario</span>
                                </a>
                            </div>
                            <div className="owl-items">
                                <a href="#" className="crew-wrap">
                                    <img src="images/team6.jpg" alt="team" />
                                    <span>Kevin McNally</span>
                                </a>
                            </div>
                            <div className="owl-items">
                                <a href="#" className="crew-wrap">
                                    <img src="images/team7.jpg" alt="team" />
                                    <span>McNally</span>
                                </a>
                            </div>
                            <div className="owl-items">
                                <a href="#" className="crew-wrap">
                                    <img src="images/team5.jpg" alt="team" />
                                    <span>Wenham</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cast;
