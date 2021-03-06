import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

const OwlCarousel = dynamic(
    () => {
        return import("react-owl-carousel");
    },
    { ssr: false }
);

const Tiles = ({ movies }) => {
    // console.log(movies);
    return (
        <div className="slide-wrapper mt-1 search-wrap-slide">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <OwlCarousel
                            className="slide-slider owl-carousel owl-theme"
                            loop
                            margin={15}
                            nav
                            items={4}
                            // navText={[
                            //     '<img src="/images/left.png" alt="icon" />',
                            //     '<img src="/images/right.png" alt="icon" />',
                            // ]}
                            dots={false}
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
                            {movies.map((movie, index) => (
                                <div className="owl-items" key={index}>
                                    <Link href={`/video/${movie.id}`}>
                                        <a className="slide-one">
                                            <div className="slide-image">
                                                <img
                                                    src="/images/s17.png"
                                                    alt="image"
                                                />
                                            </div>
                                            <div className="slide-content">
                                                <h2>
                                                    {movie.name}
                                                    <img
                                                        src="/images/plus.png"
                                                        alt="icon"
                                                    />
                                                </h2>
                                                <p>{movie.desc}</p>
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
                                    </Link>
                                </div>
                            ))}
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tiles;
