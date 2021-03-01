import React from "react";
import Link from "next/link";

const Navbar = () => {
    return (
        <div className="header-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 navbar p-0">
                        <a href="/" className="logo">
                            <img
                                src="images/logo.png"
                                alt="logo"
                                className="light"
                            />
                            <img
                                src="images/logo-white.png"
                                alt="logo"
                                className="dark"
                            />
                        </a>

                        <button
                            className="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarNavDropdown"
                            aria-controls="navbarNavDropdown"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div
                            className="collapse navbar-collapse"
                            id="navbarNavDropdown"
                        >
                            {/* prettier-ignore */}
                            <ul className="navbar-nav nav-menu float-none text-center">
                                <li className="nav-item">
                                    <Link className="nav-link" href={`/video/${parseInt(1)}`}>Single movie</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" href="/watch">Watch</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" href="/search">
                                        Search
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" href="/register">Register</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" href="/login">Login</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="user-avater">
                            <img src="images/user-8.png" alt="user" />
                            <div className="user-menu">
                                <ul>
                                    <li>
                                        <Link href="/user">
                                            <a>
                                                <i className="ti-user"></i>
                                                My Profile
                                            </a>
                                        </Link>
                                    </li>
                                    {/* <li>
                                        <a href="favorites.html">
                                            <i className="ti-heart"></i>My
                                            Favorites
                                        </a>
                                    </li> */}
                                    <li>
                                        <Link href="/faq">
                                            <a>
                                                <i className="ti-world"></i>FAQs
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/logout">
                                            <a>
                                                <i className="ti-power-off"></i>
                                                Log Out
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="search-div">
                            <input type="text" placeholder="Seacrh" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
