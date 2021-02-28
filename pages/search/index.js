import React from "react";

import Preloader from "../../components/Preloader/Preloader";
import Theme from "../../components/Theme";
import Navbar from "../../components/Home/Navbar/Navbar";
import Meta from "../../components/Search/Meta/Meta";

import Tiles from "../../components/Search/Tiles/Tiles";

const Search = () => {
    return (
        <div>
            {/* <Preloader /> */}
            <Theme />

            <div className="main-wrapper">
                <Navbar />
                <Meta />
                <Tiles />
                <Tiles />
                <Tiles />
                <Tiles />
            </div>
        </div>
    );
};

export default Search;
