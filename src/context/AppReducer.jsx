export default (state, action) => {
  switch (action.type) {
    case "DELETE_TRANSANCTION":
      return {
        ...state,

        transanctions: state.transanctions.filter(
          (transanction) => transanction.id !== action.payload
        ),
      };

    case "ADD_TRANSANCTION":
      return {
        ...state,
        transanctions: [action.payload, ...state.transanctions],
      };

    default:
      return state;
  }
};
