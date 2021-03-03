import React from "react";

import Theme from "../Theme";
import Navbar from "../Auth/Navbar/Navbar";
import RegisterSection from "../Auth/RegisterSection/RegisterSection";
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
