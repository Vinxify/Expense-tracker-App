import React from "react";
import TransactionContext from "../context/TransactionContext";
import { useContext } from "react";
import Transanction from "./Transanction";

function Balance() {
  const { transanctions } = useContext(TransactionContext);
  const total = transanctions
    .reduce((acc, cur) => acc + cur.amount, 0)
    .toFixed(2);

  return (
    <>
      <h4 className='mt-6'>Your Balance</h4>
      <h1 className='text-6xl' id='balance'>
        {total < 0 ? "-$" : "$"}
        {total < 0 ? `${Math.abs(total).toFixed(2)}` : total}
      </h1>
    </>
  );
}

export default Balance;
