import React from "react";

import Preloader from "../components/Preloader/Preloader";
import Theme from "../components/Theme";
import Navbar from "../components/Auth/Navbar/Navbar";
import ResetPassword from "../components/Auth/ResetPassword/ResetPassword";

const PasswdReset = () => {
    return (
        <div>
            {/* <Preloader /> */}
            <Theme />

            <div className="main-wrapper">
                <Navbar />

                <ResetPassword />
            </div>
        </div>
    );
};

export default PasswdReset;
