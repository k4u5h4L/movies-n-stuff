import React from "react";

import Preloader from "../../components/Preloader/Preloader";
import Theme from "../../components/Theme";
import Navbar from "../../components/Home/Navbar/Navbar";
import Breadcrumb from "../../components/Profile/Breadcrumb/Breadcrumb";
import Settings from "../../components/Profile/Settings/Settings";
import Footer from "../../components/Home/Footer/Footer";

const Profile = () => {
    return (
        <div>
            {/* <Preloader /> */}
            <Theme />

            <div className="main-wrapper">
                <Navbar />
                <Breadcrumb />
                <Settings />
                <Footer />
            </div>
        </div>
    );
};

export default Profile;
