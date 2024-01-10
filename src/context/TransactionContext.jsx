import { createContext, useReducer } from "react";

const TransactionContext = createContext();

function TransactionContext({ children }) {
  return (
    <TransactionContext.Provider value>{children}</TransactionContext.Provider>
  );
}

export default TransactionContext;
