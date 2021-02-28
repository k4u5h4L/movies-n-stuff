import React from "react";

const Categories = () => {
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
                        <div className="category-slider owl-carousel owl-theme">
                            {categories.map((category, index) => (
                                <div className="owl-items" key={index}>
                                    <a
                                        href="search.html"
                                        className="category-wrap"
                                        style={{
                                            backgroundImage: `url(images/gb2.png)`,
                                        }}
                                    >
                                        <span>{category}</span>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categories;
