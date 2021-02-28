import React from "react";

import Preloader from "../components/Preloader/Preloader";
import Theme from "../components/Theme";
import Navbar from "../components/Auth/Navbar/Navbar";
import LoginSection from "../components/Auth/LoginSection/LoginSection";

const Login = () => {
    return (
        <div>
            {/* <Preloader /> */}
            <Theme />

            <div className="main-wrapper">
                <Navbar />

                <LoginSection />
            </div>
        </div>
    );
};

export default Login;
