import React from "react";
import { FaTimes } from "react-icons/fa";

function TransanctionList() {
  return (
    <>
      <h3></h3>
      <ul>
        <li className='flex justify-between align-center my-2'>
          Cash
          <span>-$400</span>
          <button>
            <FaTimes color='purple' />
          </button>
        </li>
      </ul>
    </>
  );
}

export default TransanctionList;
