import React, { useState, useEffect } from "react";
// import { useRouter } from "next/router";
import dynamic from "next/dynamic";

import Theme from "../../components/Theme";
import Navbar from "../../components/Home/Navbar/Navbar";

import Tiles from "../../components/Search/Tiles/Tiles";
import Footer from "../../components/Home/Footer/Footer";

const Meta = dynamic(
    () => {
        return import("../../components/Search/Meta/Meta");
    },
    { ssr: false }
);

function chunkArray(array, size = 4) {
    let result = [];
    let arrayCopy = [...array];
    while (arrayCopy.length > 0) {
        result.push(arrayCopy.splice(0, size));
    }
    return result;
}

const Search = ({ query }) => {
    const [results, setResults] = useState([]);

    useEffect(async () => {
        const getResults = async (query) => {
            const res = await fetch(`/api/search/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(query),
            });

            const data = await res.json();
            console.log(data);

            // setResults([...results, ...data]);
            setResults(chunkArray(data));
        };

        if (typeof window !== "undefined") {
            await getResults(query.query);
            console.log("useEffect");
        }
    }, [query.query]);

    return (
        <div>
            <Theme />

            <div className="main-wrapper">
                <Navbar />
                <Meta queryAsked={query.query} />
                {results.map((res, index) => (
                    <div key={index}>
                        <Tiles movies={res} />
                    </div>
                ))}
                <Footer />
            </div>
        </div>
    );
};

Search.getInitialProps = ({ query }) => {
    return { query };
};

export default Search;
