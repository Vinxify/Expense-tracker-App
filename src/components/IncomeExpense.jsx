import React from "react";
import TransactionContext from "../context/TransactionContext";
import { useContext } from "react";
import Transanction from "./Transanction";

function IncomeExpense() {
  const { transanctions } = useContext(TransactionContext);

  const income = transanctions
    .filter((transanction) => transanction.amount > 0)
    .reduce((acc, cur) => acc + cur.amount, 0)
    .toFixed(2);

  const expense = (
    transanctions
      .filter((transanction) => transanction.amount < 0)
      .reduce((acc, cur) => acc + cur.amount, 0) * -1
  ).toFixed(2);

  console.log(income, expense);

  return (
    <div className='bg-gray-200 flex justify-around'>
      <div className='border-none border-l'>
        <h2 className='text-2xl'>Income</h2>
        <h3 className='text-3xl text-green'>${income}</h3>
      </div>

      <div className=''>
        <h2 className='text-2xl'>Expenses</h2>
        <h3 className='text-3xl text-red'>-${expense}</h3>
      </div>
    </div>
  );
}

export default IncomeExpense;
