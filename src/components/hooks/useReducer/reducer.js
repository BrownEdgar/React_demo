export const initialValue = [];

// export const PLUS = "PLUS"
// export const RESET = "RESET"
// export const MINUS = "PLUS"

export const actionTypes = {
  PUSH: "PUSH",
  POP: "POP",
  SWAP: "SWAP",
  SORT: "SORT",
  CLEAR: "CLEAR",
};

function swap(state, payload = [2, 4]) {
  const copy = [...state];
  const [i, j] = payload;
  [copy[i], copy[j]] = [copy[j], copy[i]];
  return copy;
}

function sort(state, option) {
  return option === "asc"
    ? state.toSorted((a, b) => a - b)
    : state.toSorted((a, b) => b - a);
}

const reducer = (state = initialValue, { type, payload }) => {
  switch (type) {
    case actionTypes.PUSH:
      return [...state, ...payload];
    case actionTypes.POP:
      return state.slice(0, -payload);
    case actionTypes.SWAP:
      return swap(state, payload);
    case actionTypes.SORT:
      return sort(state, payload.sortOption);
    case actionTypes.CLEAR:
      return initialValue;
    default:
      return state;
  }
};
export default reducer;
