import React from "react";
import Head from "next/head";

import { Provider } from "next-auth/client";

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
                <title>Movies N&apos; Stuff</title>
            </Head>
            <Component {...pageProps} />
        </Provider>
    );
}

export default MyApp;
