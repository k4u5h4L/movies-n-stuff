import React from "react";

import Theme from "../components/Theme";
import Navbar from "../components/Auth/Navbar/Navbar";
import RegisterSection from "../components/Auth/RegisterSection/RegisterSection";
const Register = () => {
    return (
        <div>
            <Theme />

            <div className="main-wrapper">
                <Navbar />

                <RegisterSection />
            </div>
        </div>
    );
};

export default Register;
