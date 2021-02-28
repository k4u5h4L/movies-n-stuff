import React from "react";

import Preloader from "../components/Preloader/Preloader";
import Theme from "../components/Theme";
import Navbar from "../components/Auth/Navbar/Navbar";
import RegisterSection from "../components/Auth/RegisterSection/RegisterSection";
const Register = () => {
    return (
        <div>
            {/* <Preloader /> */}
            <Theme />

            <div className="main-wrapper">
                <Navbar />

                <RegisterSection />
            </div>
        </div>
    );
};

export default Register;
