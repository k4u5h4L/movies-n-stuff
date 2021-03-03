import React from "react";

import Theme from "../components/Theme";
import Navbar from "../components/Auth/Navbar/Navbar";
import ResetPassword from "../components/Auth/ResetPassword/ResetPassword";

const PasswdReset = () => {
    return (
        <div>
            <Theme />

            <div className="main-wrapper">
                <Navbar />

                <ResetPassword />
            </div>
        </div>
    );
};

export default PasswdReset;
