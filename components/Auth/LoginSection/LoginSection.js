import React, { useState } from "react";
// import Link from "next/link";

import { signIn, signOut, useSession } from "next-auth/client";

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
                                <h2>Sign in / Sign up</h2>
                                <p>
                                    Enter your email below.
                                    <br /> A verification email will be sent
                                    after which an account will be created if
                                    it&apos;s your first time here!
                                </p>
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
                                    </div>

                                    <div className="form-group button-block text-center">
                                        <button
                                            className="form-btn"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                // signIn("email", emailData, {
                                                //     callbackUrl:
                                                //         "/login/verify",
                                                //     redirect: true,
                                                // });
                                                signIn("email", {
                                                    email: emailData,
                                                    callbackUrl:
                                                        "http://localhost:3000/login/verify/",
                                                    redirect: true,
                                                });
                                            }}
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
                                            style={{
                                                backgroundColor: "#03001c",
                                            }}
                                        >
                                            {/* <img
                                                src="/github.png"
                                                alt="github login"
                                            /> */}
                                            <i
                                                className="ti-github"
                                                style={{ marginRight: 10 }}
                                            ></i>
                                            Sign in with GitHub
                                        </button>
                                        {/* <p className="sign-up-text">
                                            Don&apos;t have an account?
                                            <Link href="/register">
                                                Sign up
                                            </Link>
                                        </p> */}
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
                                <button className="form-btn" onClick={signOut}>
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
