import React from "react";

import Theme from "../../components/Theme";
import Navbar from "../../components/Auth/Navbar/Navbar";
import PostLoginSection from "../../components/Auth/PostLoginSection/PostLoginSection";

const Login = () => {
    return (
        <div>
            <Theme />

            <div className="main-wrapper">
                <Navbar />

                <PostLoginSection />
            </div>
        </div>
    );
};

export default Login;
