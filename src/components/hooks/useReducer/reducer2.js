
export const initialState = {
  posts: [],
  loading: false,
  error: null,
  x: 1
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "SAVE":
      return { ...state, posts: payload };

    default:
      return state;
  }
};


