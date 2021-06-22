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
    case "SET_LOGIN_OVERLAY":
      return {
        ...state,
        showLoginOverlay: action.status,
      };
  }
};
