import React from "react";

function IncomeExpense() {
  return (
    <div className='bg-gray-200 flex justify-around'>
      <div className='border-none border-l'>
        <h2 className='text-2xl'>Income</h2>
        <h3 className='text-3xl text-green'>$500</h3>
      </div>

      <div className=''>
        <h2 className='text-2xl'>Expenses</h2>
        <h3 className='text-3xl text-red'>$200</h3>
      </div>
    </div>
  );
}

export default IncomeExpense;
