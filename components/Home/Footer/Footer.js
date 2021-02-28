import React from "react";

const Footer = () => {
    return (
        <div className="footer-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 text-left">
                        <h4 className="mb-4">Movies N&apos; Stuff</h4>
                    </div>
                    <div className="col-sm-6 text-left">
                        <img
                            src="images/icon-21.png"
                            alt="icon"
                            className="icon-img"
                        />
                    </div>
                    <div className="col-sm-5 offset-sm-1 text-right">
                        <form action="#" className="mt-0">
                            <input type="text" placeholder="Email" />
                            <button onClick={() => alert("button clicked")}>
                                Submit
                            </button>
                        </form>
                    </div>
                    <div className="col-sm-12">
                        <div className="middle-footer">
                            <div className="row">
                                <div className="col-md-4 col-lg-2 col-sm-6 col-xs-6 md-mb25">
                                    <h5>Social Link</h5>
                                    <ul>
                                        <li>
                                            <a href="#">Facebook</a>
                                        </li>
                                        <li>
                                            <a href="#">Twitter</a>
                                        </li>
                                        <li>
                                            <a href="#">Instagram</a>
                                        </li>
                                        <li>
                                            <a href="#">Youtube</a>
                                        </li>
                                        <li>
                                            <a href="#">Dribble</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-4 col-lg-2 col-sm-6 col-xs-6 md-mb25">
                                    <h5>ONLINE</h5>
                                    <ul>
                                        <li>
                                            <a href="#">Web</a>
                                        </li>
                                        <li>
                                            <a href="#">Series</a>
                                        </li>
                                        <li>
                                            <a href="#">Natak</a>
                                        </li>
                                        <li>
                                            <a href="#">Comedy</a>
                                        </li>
                                        <li>
                                            <a href="#">Action</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-4 col-lg-2 col-sm-6 col-xs-6 md-mb25">
                                    <h5>Language</h5>
                                    <ul>
                                        <li>
                                            <a href="#">English</a>
                                        </li>
                                        <li>
                                            <a href="#">Spanish</a>
                                        </li>
                                        <li>
                                            <a href="#">Arab</a>
                                        </li>
                                        <li>
                                            <a href="#">Urdu</a>
                                        </li>
                                        <li>
                                            <a href="#">Brazil</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-4 col-lg-2 col-sm-6 col-xs-6">
                                    <h5>Channel</h5>
                                    <ul>
                                        <li>
                                            <a href="#">Makeup</a>
                                        </li>
                                        <li>
                                            <a href="#">Dresses</a>
                                        </li>
                                        <li>
                                            <a href="#">Girls</a>
                                        </li>
                                        <li>
                                            <a href="#">Sandals</a>
                                        </li>
                                        <li>
                                            <a href="#">Headphones</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-4 col-lg-2 col-sm-6 col-xs-6">
                                    <h5>About</h5>
                                    <ul>
                                        <li>
                                            <a href="#">FAQ</a>
                                        </li>
                                        <li>
                                            <a href="#">Term of use</a>
                                        </li>
                                        <li>
                                            <a href="#">Privacy Policy</a>
                                        </li>
                                        <li>
                                            <a href="#">Feedback</a>
                                        </li>
                                        <li>
                                            <a href="#">Careers</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-4 col-lg-2 col-sm-6 col-xs-6">
                                    <h5 className="mb-3">Office</h5>
                                    <p style={{ width: "100%" }}>
                                        41 madison ave, floor 24 new work, NY
                                        10010 <br />
                                        1-877-932-7111
                                    </p>
                                    <p style={{ width: "100%" }}>
                                        41 madison ave, floor 24 new work, NY
                                        10010 <br />
                                        1-877-932-7111
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 lower-footer"></div>
                    <div className="col-sm-6">
                        <p className="copyright-text">
                            © 2020 copyright. All rights reserved.
                        </p>
                    </div>
                    <div className="col-sm-6 text-right">
                        <p className="float-right copyright-text">
                            In case of any concern, <a href="#">contact us</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
