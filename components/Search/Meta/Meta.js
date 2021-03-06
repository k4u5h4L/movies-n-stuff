import React from "react";

const Meta = ({ queryAsked }) => {
    return (
        <div className="page-nav p-0">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 text-center">
                        <div className="search-wrapper">
                            <h2 className="mb-3">
                                Results found for &quot;{queryAsked}
                                &quot;.
                            </h2>
                            {/* <p className="mb-0">
                                Search results you asked for.
                            </p> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Meta;
