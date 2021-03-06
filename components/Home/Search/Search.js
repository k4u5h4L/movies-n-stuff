import React, { useState } from "react";

const Search = () => {
    const [search, setSearch] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch(`/api/search/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(search),
        });

        const data = await res.json();

        console.log(data);
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
