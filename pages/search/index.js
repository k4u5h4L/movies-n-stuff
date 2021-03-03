import React from "react";

import Theme from "../../components/Theme";
import Navbar from "../../components/Home/Navbar/Navbar";
import Meta from "../../components/Search/Meta/Meta";

import Tiles from "../../components/Search/Tiles/Tiles";
import Footer from "../../components/Home/Footer/Footer";

const Search = () => {
    return (
        <div>
            <Theme />

            <div className="main-wrapper">
                <Navbar />
                <Meta />
                <Tiles />
                <Tiles />
                <Tiles />
                <Tiles />
                <Footer />
            </div>
        </div>
    );
};

export default Search;
