import React from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import "./Intro.css";
import { meal } from "../../constants";

const Intro = () => {
  const [playVid, setPlayVid] = React.useState(false);
  const vidRef = React.useRef();
  const handleVid = () => {
    setPlayVid((prevPlayVid) => !prevPlayVid);

    if (playVid) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  };

  return (
    <div className="app__vid">
      <video
        src={meal}
        type="video/mp4"
        loop
        controls={false}
        ref={vidRef}
        muted
      />
      <div className="app__vid-overlay flex__center">
        <div
          className="app__vid-overlay_circle flex__center"
          onClick={handleVid}
        >
          {playVid ? (
            <BsPauseFill color="#fff" fontSize={30} />
          ) : (
            <BsFillPlayFill color="#fff" fontSize={30} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;
