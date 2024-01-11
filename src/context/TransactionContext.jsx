import { createContext, useReducer } from "react";

import AppReducer from "./AppReducer";

// initial state

const initialState = {
  transanctions: [
    { id: 1, text: "Salary", amount: 300 },
    { id: 2, text: "Flower", amount: -50 },
    { id: 3, text: "Gamble", amount: 300 },
    { id: 4, text: "Food", amount: -200 },
    { id: 5, text: "Knack", amount: -100 },
    { id: 6, text: "Snack", amount: -50 },
  ],
};

// Create context
const TransactionContext = createContext(initialState);

// Provider
export function TransactionContextProvider({ children }) {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Action

  const deleteTransanction = (id) => {
    dispatch({
      type: "DELETE_TRANSANCTION",
      payload: id,
    });
  };
  const addTransanction = (transanction) => {
    dispatch({
      type: "ADD_TRANSANCTION",
      payload: transanction,
    });
  };

  return (
    <TransactionContext.Provider
      value={{
        transanctions: state.transanctions,
        deleteTransanction,
        addTransanction,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
}

export default TransactionContext;
