import React from "react";

import Theme from "../Theme";
import Navbar from "../Auth/Navbar/Navbar";
import ResetPassword from "../Auth/ResetPassword/ResetPassword";

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
