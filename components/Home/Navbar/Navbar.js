import React from "react";
import Link from "next/link";

import { useSession, signOut } from "next-auth/client";
import dynamic from "next/dynamic";

const Search = dynamic(() => import("../Search/Search"), { ssr: false });

const Navbar = () => {
    const [session] = useSession();
    return (
        <div className="header-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 navbar p-0">
                        <Link href="/">
                            <a className="logo">
                                <img
                                    src="/images/logo.png"
                                    alt="logo"
                                    className="light"
                                    height="70"
                                />
                                <img
                                    src="/images/logo-white.png"
                                    alt="logo"
                                    className="dark"
                                />
                            </a>
                        </Link>

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
                                    <Link className="nav-link" href={`/video/${parseInt(2)}`}>Featured</Link>
                                </li>
                                {/* <li className="nav-item">
                                    <Link className="nav-link" href="/watch">Watch</Link>
                                </li> */}
                                <li className="nav-item">
                                    <Link className="nav-link" href="/login">
                                        Login
                                    </Link>
                                </li>
                                {/* <li className="nav-item">
                                    <button className="add-button">Add to home screen</button>
                                </li> */}
                                {/* <li className="nav-item">
                                <button className="installBtn">
                                    <div className="left"></div>
                                        Add To Home Screen
                                    <div className="right"></div>
                                </button>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        {session ? (
                            <div className="user-avater">
                                <img
                                    src={
                                        session.user.image ||
                                        `/images/default_profile_pic.png`
                                    }
                                    alt="user"
                                />
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
                                                    <i className="ti-world"></i>
                                                    FAQs
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <a
                                                onClick={signOut}
                                                style={{ cursor: "pointer" }}
                                            >
                                                <i className="ti-power-off"></i>
                                                Log Out
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        ) : (
                            <div className="user-avater">
                                <img
                                    src="/images/default_profile_pic.png"
                                    alt="user"
                                />
                                <div className="user-menu">
                                    <ul>
                                        <li>
                                            <Link href="/login">
                                                <a>
                                                    <i className="ti-sign-in-alt"></i>
                                                    Sign in
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/faq">
                                                <a>
                                                    <i className="ti-world"></i>
                                                    FAQs
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <a
                                                className="add-button"
                                                style={{ cursor: "pointer" }}
                                            >
                                                <i className="ti-heart"></i>
                                                Install PWA
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        )}

                        <Search />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
