import React, { useState, useEffect } from "react";
import {
  getLikes,
  getHasUserLiked,
  postAddUserLike,
  PostRemoveUserLike,
} from "../api";
import LikeButtonView from "./LikeButtonView";

const LikeButtonContainer = () => {
  const [isHearted, setIsHearted] = useState(false);
  const [heartCount, setHeartCount] = useState(999);
  //mock information- selectors needed here in real scenario
  const messageId = 11001;
  const userId = 1;

  const handleButtonClick = () => {
    if (isHearted) {
      setIsHearted(false);
      PostRemoveUserLike(messageId, userId);
    } else if (!isHearted) {
      setIsHearted(true);
      postAddUserLike(messageId, userId);
    }
    setHeartCount(isHearted ? heartCount - 1 : heartCount + 1);
  };

  useEffect(() => {
    const doGetLikes = async () => {
      try {
        const result = await getLikes(messageId);
        setHeartCount(result);
      } catch (error) {
        console.log(error);
      }
    };

    const doGetHasUserLiked = async () => {
      try {
        const result = await getHasUserLiked(messageId, userId);
        setIsHearted(result);
      } catch (error) {
        console.log(error);
      }
    };

    doGetLikes();
    doGetHasUserLiked();
  }, []);

  return (
    <LikeButtonView
      isHearted={isHearted}
      toggleIsHearted={handleButtonClick}
      heartCount={heartCount}
    />
  );
};

export default LikeButtonContainer;
