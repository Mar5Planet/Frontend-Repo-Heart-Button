//This is a mock API file

export const getLikes = (messageId: number) => {
  // - `GET  /api/v1/like/:id/count`: Returns the number of likes for the given ID
  return 999;
};

export const getHasUserLiked = (messageId: number, userId: number) => {
  // - `GET  /api/v1/like/:id/user/:user_id`: Returns a boolean for whether or not
  return false;
};

export const postAddUserLike = (messageId: number, userId: number) => {
  // - `POST /api/v1/like/:id/add`: Adds a like for the given ID
  return;
};

export const PostRemoveUserLike = (messageId: number, userId: number) => {
  // - `POST /api/v1/like/:id/remove`: Removes the like for the given ID
  return;
};
