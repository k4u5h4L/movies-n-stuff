import React from "react";

import Preloader from "../../components/Preloader/Preloader";
import Player from "../../components/Watch/Player/Player";

const Watch = () => {
    return (
        <div className="video-player">
            {/* <Preloader /> */}
            <Player />
        </div>
    );
};

export default Watch;
