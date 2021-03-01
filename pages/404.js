import React from "react";
import Head from "next/head";

const NotFound = () => {
    return (
        <>
            <Head>
                <title>404 Resource not found</title>

                <link
                    href="https://fonts.googleapis.com/css?family=Cabin:400,700"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/css?family=Montserrat:900"
                    rel="stylesheet"
                />
                <link type="text/css" rel="stylesheet" href="css/404.css" />
            </Head>

            <div id="notfound">
                <div className="notfound">
                    <div className="notfound-404">
                        <h3>Oops! Page not found</h3>
                        <h1>
                            <span>4</span>
                            <span>0</span>
                            <span>4</span>
                        </h1>
                    </div>
                    <h2>
                        we are sorry, but the page you requested was not found
                    </h2>
                </div>
            </div>
        </>
    );
};

export default NotFound;
