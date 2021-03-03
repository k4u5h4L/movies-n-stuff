import React from "react";
import dynamic from "next/dynamic";

const OwlCarousel = dynamic(
    () => {
        return import("react-owl-carousel");
    },
    { ssr: false }
);

const CategoriesRoot = () => {
    const categories = [
        "comedy",
        "Thriller",
        "Super Hero",
        "Action",
        "Crime",
        "Adventure",
    ];
    return (
        <div className="category-wrapper slide-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 text-left mb-4 mt-1">
                        <h2>Categories</h2>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-12">
                        <OwlCarousel
                            className="category-slider owl-carousel owl-theme"
                            loop
                            margin={10}
                            autoPlay
                            items={6}
                            responsive={{
                                0: {
                                    items: 2,
                                },
                                600: {
                                    items: 4,
                                },
                                1200: {
                                    items: 5,
                                },
                                1600: {
                                    items: 6,
                                },
                            }}
                        >
                            {categories.map((category, index) => (
                                <div className="owl-items" key={index}>
                                    <a
                                        href="search.html"
                                        className="category-wrap"
                                        style={{
                                            backgroundImage: `url(/images/gb2.png)`,
                                        }}
                                    >
                                        <span>{category}</span>
                                    </a>
                                </div>
                            ))}
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoriesRoot;
