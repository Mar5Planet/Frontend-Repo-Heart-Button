import React from "react";
import heartIcon from "./heart-icon.svg";
import filledHeartIcon from "./heart-icon-filled.svg";
import { kFormatter } from "./util";
import "./LikeButton.css";

interface Props {
  isHearted: boolean;
  toggleIsHearted: () => void;
  heartCount: number;
}

const LikeButtonView = (props: Props) => {
  const { isHearted, toggleIsHearted, heartCount } = props;

  return (
    <div className="like-button-wrapper">
      <button onClick={toggleIsHearted} className="heart-button">
        <img src={isHearted ? filledHeartIcon : heartIcon} />
        <p>{kFormatter(heartCount)}</p>
      </button>
    </div>
  );
};

export default LikeButtonView;
