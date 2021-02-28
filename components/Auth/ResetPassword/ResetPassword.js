import React from "react";

const ResetPassword = () => {
    return (
        <section className="form-wrapper">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-sm-5">
                        <div className="form-div text-center">
                            <h2>Forgot password</h2>
                            <p>Enter your details to recieve a reset link</p>
                            <form action="#">
                                <div className="form-group mt-5">
                                    <input
                                        className="form-control"
                                        type="email"
                                        placeholder="Email address"
                                    />
                                </div>

                                <div className="form-group button-block text-center">
                                    <button className="form-btn">
                                        Send Link
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ResetPassword;
