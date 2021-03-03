import React from "react";
import Link from "next/link";

const Navbar = () => {
    return (
        <div className="header-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 text-center">
                        <Link href="/">
                            <a className="logo float-none mt-4">
                                <img src="/images/logo.png" alt="logo" />
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
