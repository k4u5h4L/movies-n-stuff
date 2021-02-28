import React from "react";

const Navbar = () => {
    return (
        <div className="header-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 text-center">
                        <a href="/" className="logo float-none mt-4">
                            <img src="images/logo.png" alt="logo" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
