import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

import Preloader from "../components/Preloader/Preloader";

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    {/* <link rel="stylesheet" href="css/themify-icons.css" /> */}

                    {/* <link rel="stylesheet" href="css/style.css" /> */}
                    {/* <link rel="stylesheet" href="css/video-player.css" /> */}
                    <link
                        rel="stylesheet"
                        href="https://video-react.github.io/assets/video-react.css"
                    />
                </Head>
                <body className="try">
                    <Preloader />
                    <Main />
                    <NextScript />

                    <script src="/js/plugin.js"></script>
                    <script src="/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
                    <script src="/js/scripts.js"></script>
                </body>
            </Html>
        );
    }
}
