import React from "react";

import Theme from "../components/Theme";
import Navbar from "../components/Home/Navbar/Navbar";
import Breadcrumb from "../components/Faq/Breadcrumb/Breadcrumb";
import Questions from "../components/Faq/Questions/Questions";
import Footer from "../components/Home/Footer/Footer";

const Faq = () => {
    return (
        <div>
            <Theme />

            <div className="main-wrapper">
                <Navbar />
                <Breadcrumb />
                <Questions />
                <Footer />
            </div>
        </div>
    );
};

export default Faq;
