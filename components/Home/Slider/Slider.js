import React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";

const OwlCarousel = dynamic(
    () => {
        return import("react-owl-carousel");
    },
    { ssr: false }
);

const Slider = (props) => {
    // console.log(props.movies);

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
                            // navText={[
                            //     '<img src="/images/left.png" alt="icon" />',
                            //     '<img src="/images/right.png" alt="icon" />',
                            // ]}
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
                            {props.movies.map((movie, index) => (
                                <div className="owl-items" key={index}>
                                    <Link href={`/video/${movie.id}`}>
                                        <a className="slide-one">
                                            <div className="slide-image">
                                                <img
                                                    // src={`/images/s${
                                                    //     parseInt(movie.id) %
                                                    //     props.movies.length
                                                    // }.jpg`}
                                                    width={400}
                                                    height={400}
                                                    // src={`../thumbnails/pic-${
                                                    //     parseInt(movie.id) %
                                                    //     props.movies.length
                                                    // }.jpg`}
                                                    src={`/thumbnails/pic-${movie.id}.jpg`}
                                                    alt="image"
                                                />
                                            </div>
                                            <div className="slide-content">
                                                <h2>
                                                    {movie.name}{" "}
                                                    <img
                                                        src="/images/plus.png"
                                                        alt="icon"
                                                        className="add-wishlist"
                                                    />
                                                </h2>
                                                <p>
                                                    Radhe is a singing prodigy
                                                    determined to follow in the
                                                    classNameical footsteps of
                                                    his grandfather.
                                                </p>
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

export default Slider;
