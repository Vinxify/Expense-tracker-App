import { createContext, useReducer } from "react";

import AppReducer from "./AppReducer";

// initial state

const initialState = {
  transanctions: [{ id: 1, text: "Salary", amount: 300 }],
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
