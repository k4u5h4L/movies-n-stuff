import React from "react";

export const Settings = () => {
    return (
        <div className="faq-page">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-sm-8">
                        <div id="accordion" className="accordion">
                            <div className="card mb-3">
                                <div className="card-header" id="headingOne">
                                    <h5 className="mb-0">
                                        <button
                                            className="btn btn-link small-text collapsed pl-5 text-left"
                                            data-toggle="collapse"
                                            data-target="#collapseOne"
                                            aria-expanded="false"
                                            aria-controls="collapseOne"
                                        >
                                            <i className="ti-user"></i>Account
                                            Settings{" "}
                                            <span>
                                                Create custom landing pages with
                                                that converts.
                                            </span>
                                        </button>
                                    </h5>
                                </div>

                                <div
                                    id="collapseOne"
                                    className="collapse"
                                    aria-labelledby="headingOne"
                                    data-parent="#accordion"
                                >
                                    <div className="card-body form-div">
                                        <form action="#">
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <div className="form-group mt-4">
                                                        <input
                                                            className="form-control"
                                                            type="text"
                                                            placeholder="Name"
                                                        />
                                                        <input
                                                            className="form-control"
                                                            type="password"
                                                            placeholder="Password"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="form-group mt-4">
                                                        <input
                                                            className="form-control"
                                                            type="email"
                                                            placeholder="Email address"
                                                        />
                                                        <input
                                                            className="form-control"
                                                            type="password"
                                                            placeholder="Confirm Password"
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="form-group button-block text-center">
                                                <a className="form-btn member-bttn3 text-white d-block">
                                                    Get Started
                                                </a>
                                                <p className="sign-up-text">
                                                    Already have an account?
                                                    <a href="#">Sign in</a>
                                                </p>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="card mb-3">
                                <div className="card-header" id="headingTwo">
                                    <h5 className="mb-0">
                                        <button
                                            className="btn btn-link small-text collapsed pl-5 text-left"
                                            data-toggle="collapse"
                                            data-target="#collapseTwo"
                                            aria-expanded="false"
                                            aria-controls="collapseTwo"
                                        >
                                            <i className="ti-credit-card"></i>{" "}
                                            Payment Info{" "}
                                            <span>
                                                Create custom landing pages with
                                                that converts.
                                            </span>
                                        </button>
                                    </h5>
                                </div>
                                <div
                                    id="collapseTwo"
                                    className="collapse"
                                    aria-labelledby="headingTwo"
                                    data-parent="#accordion"
                                >
                                    <div className="card-body form-div ">
                                        <form action="#">
                                            <div className="row">
                                                <div className="col-sm-12">
                                                    <div className="form-group mt-4">
                                                        <input
                                                            className="form-control"
                                                            type="text"
                                                            placeholder="Cardholder Name"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-sm-12">
                                                    <div className="form-group ">
                                                        <input
                                                            className="form-control"
                                                            type="text"
                                                            placeholder="Card Number"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="form-group ">
                                                        <input
                                                            className="form-control"
                                                            type="text"
                                                            placeholder="Expiry Date"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="form-group ">
                                                        <input
                                                            className="form-control"
                                                            type="text"
                                                            placeholder="CVV"
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="form-group button-block text-center">
                                                <a className="form-btn d-block member-bttn4 text-white">
                                                    Pay Now
                                                </a>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>

                            <div className="card mb-3">
                                <div className="card-header" id="headingTwo">
                                    <h5 className="mb-0">
                                        <button
                                            className="btn btn-link small-text collapsed pl-5 text-left"
                                            data-toggle="collapse"
                                            data-target="#collapseTHree"
                                            aria-expanded="false"
                                            aria-controls="collapseTHree"
                                        >
                                            <a href="home.html">
                                                <i className="ti-power-off"></i>{" "}
                                                Log Out{" "}
                                                <span>
                                                    Create custom landing pages
                                                    with that converts.
                                                </span>
                                            </a>
                                        </button>
                                    </h5>
                                </div>
                                {/* <div
                                    id="collapseTHree"
                                    className="collapse"
                                    aria-labelledby="headingTwo"
                                    data-parent="#accordion"
                                ></div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Settings;
