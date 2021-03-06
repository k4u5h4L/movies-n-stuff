import React, { useState } from "react";
import { useRouter } from "next/router";

const Search = () => {
    const router = useRouter();
    const [search, setSearch] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        router.push(`/search?query=${encodeURI(search)}`);
    };

    const handleChange = (e) => {
        setSearch(e.target.value);
    };

    return (
        <div className="search-div">
            <form onSubmit={(event) => handleSubmit(event)}>
                <input
                    type="text"
                    placeholder="Search movies..."
                    onChange={(event) => handleChange(event)}
                />
            </form>
        </div>
    );
};

export default Search;
