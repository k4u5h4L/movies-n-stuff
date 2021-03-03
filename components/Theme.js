import React from "react";

const Theme = () => {
    return (
        <>
            <div className="switchcolor">
                <img src="/images/settings.png" alt="icon" />
            </div>
            <div className="switchcolor-wrap">
                <a className="link sheet-close">
                    <i className="ti-close"></i>
                </a>
                <h2>Settings</h2>
                <div className="toggle-div mt-4">
                    <h4 className="d-inline">Dark Mode</h4>
                    <div className="d-inline float-right">
                        <label className="toggle toggle-init">
                            <input type="checkbox" />
                            <span className="toggle-icon"></span>
                        </label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Theme;
