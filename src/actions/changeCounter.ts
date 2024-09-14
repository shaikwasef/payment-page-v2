export const incrementCount = (payload: number) => {
  return {
    type: "ADD",
    payload: payload,
  };
};

export const decrementCount = (payload: number) => {
  return {
    type: "SUBTRACT",
    payload: payload,
  };
};
