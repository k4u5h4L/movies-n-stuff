import React, { useState } from "react";
import Link from "next/link";

import { signin, signIn, signout, useSession } from "next-auth/client";

const LoginSection = () => {
    const [session] = useSession();

    const [emailData, setEmailData] = useState("");

    const emailChangeHandler = (e) => {
        setEmailData(e.target.value);
    };
    return (
        <section className="form-wrapper">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-sm-5">
                        {!session ? (
                            <div className="form-div text-center">
                                <h2>Login</h2>
                                <p>Enter your account details below</p>
                                <form action="#">
                                    <div className="form-group mt-5">
                                        <input
                                            className="form-control"
                                            type="email"
                                            placeholder="Email address"
                                            style={{ color: "black" }}
                                            onChange={() =>
                                                emailChangeHandler(event)
                                            }
                                        />
                                        {/* <input
                                            className="form-control"
                                            type="password"
                                            placeholder="Password"
                                        /> */}
                                    </div>
                                    {/* <div className="form-group form-check-label">
                                    <label htmlFor="tarms-check">
                                        <input
                                            className="d-none"
                                            type="checkbox"
                                            id="tarms-check"
                                            checked
                                        />
                                        <span className="checkbox"></span>
                                        <p>Keep me signed in</p>
                                    </label>
                                </div> */}
                                    <div className="form-group button-block text-center">
                                        <button
                                            className="form-btn"
                                            onClick={() =>
                                                signin(
                                                    "email",
                                                    emailData,
                                                    "/login/verify",
                                                    "/"
                                                )
                                            }
                                        >
                                            Sign in with email
                                        </button>
                                    </div>
                                    <div className="form-group button-block text-center">
                                        OR
                                    </div>
                                    <div className="form-group button-block text-center">
                                        <button
                                            className="form-btn"
                                            type="button"
                                            onClick={() => signIn("github")}
                                        >
                                            Sign in with GitHub
                                        </button>
                                        <p className="sign-up-text">
                                            Don&apos;t have an account?
                                            <Link href="/register">
                                                Sign up
                                            </Link>
                                        </p>
                                    </div>
                                </form>
                            </div>
                        ) : (
                            <div className="form-div text-center">
                                <h2>Hmm...</h2>
                                <p>
                                    Not <b>{session.user.name}</b>? Then logout
                                    and login again!
                                </p>
                                <button className="form-btn" onClick={signout}>
                                    Logout
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LoginSection;
