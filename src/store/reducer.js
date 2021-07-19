export const initialState = {
  user: null,
  showLoginOverlay: false,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "UPDATE_USER_PROFILE_PICTURE":
      return {
        ...state,
        user: {
          ...state.user,
          profilePicture: action.profilePicture,
        },
      };
    case "UPDATE_USER":
      return {
        ...state,
        user: {
          ...state.user,
          ...action.user,
        },
      };
    case "SET_LOGIN_OVERLAY":
      return {
        ...state,
        showLoginOverlay: action.status,
      };
    default:
      return { ...state };
  }
};
