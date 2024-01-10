import React from "react";
import { FaTimes } from "react-icons/fa";

function Transanction({ transanction }) {
  const sign = transanction.amount < 0 ? "-" : "+";

  return (
    <li className='flex justify-between align-center my-2'>
      {transanction.text}
      <span>
        {sign}${Math.abs(transanction.amount)}
      </span>
      <button>
        <FaTimes color='purple' />
      </button>
    </li>
  );
}

export default Transanction;
