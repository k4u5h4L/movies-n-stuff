import React from "react";
import { signin, signIn, signout, useSession } from "next-auth/client";

const PostLoginSection = () => {
    const [session] = useSession();

    console.log(session);

    return (
        <section className="form-wrapper">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-sm-5">
                        {!session ? (
                            <div className="form-div text-center">
                                <h2>Verify that&apos;s you!</h2>
                                <p>
                                    A verification email with a sign in link has
                                    been sent to the email.
                                </p>
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

export default PostLoginSection;
