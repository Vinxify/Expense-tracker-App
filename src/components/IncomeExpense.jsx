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
    <div className='bg-gray-100 card flex-row  justify-around mt-6 mb-3'>
      <div>
        <h2 className='text-3xl text-black'>Income</h2>
        <h3 className='text-3xl text-green-500 border-l'>${income}</h3>
      </div>

      <div>
        <h2 className='text-3xl text-black'>Expenses</h2>
        <h3 className='text-3xl text-red-500'>${expense}</h3>
      </div>
    </div>
  );
}

export default IncomeExpense;
