import React from "react";
import { FaTimes } from "react-icons/fa";
import TransactionContext from "../context/TransactionContext";
import { useContext } from "react";

function Transanction({ transanction }) {
  const { deleteTransanction } = useContext(TransactionContext);
  const sign = transanction.amount < 0 ? "-" : "+";

  return (
    <li className=' flex bg-gray-600 rounded-lg justify-between px-4 py-4 align-center my-2 relative'>
      {transanction.text}
      <span>
        {sign}${Math.abs(transanction.amount)}
      </span>
      <button
        className='absolute top-0 right-0'
        onClick={() => deleteTransanction(transanction.id)}
      >
        <FaTimes color='red' />
      </button>
    </li>
  );
}

export default Transanction;
