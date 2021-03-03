import React from "react";
import Head from "next/head";

import { Provider } from "next-auth/client";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import "../styles/404.css";
import "../styles/style.css";
import "../styles/themify-icons.css";

function MyApp({ Component, pageProps }) {
    return (
        <Provider session={pageProps.session}>
            <Head>
                <meta charSet="UTF-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/images/favicon.png"
                />
                <title>Movies N&apos; Stuff</title>
            </Head>
            <Component {...pageProps} />
        </Provider>
    );
}

export default MyApp;
