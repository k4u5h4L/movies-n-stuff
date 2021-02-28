import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { useRouter } from "next/router";

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <link rel="stylesheet" href="css/themify-icons.css" />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="16x16"
                        href="images/favicon.png"
                    />
                    <link rel="stylesheet" href="css/style.css" />
                    {/* <link rel="stylesheet" href="css/video-player.css" /> */}
                    <link
                        rel="stylesheet"
                        href="https://video-react.github.io/assets/video-react.css"
                    />
                </Head>
                <body className="try">
                    <Main />
                    <NextScript />

                    <script src="js/plugin.js"></script>
                    <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
                    <script src="js/scripts.js"></script>

                    {/* <script defer src="js/video-player.js"></script> */}
                </body>
            </Html>
        );
    }
}
