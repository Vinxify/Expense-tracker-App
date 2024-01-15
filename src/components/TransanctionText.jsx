import React from "react";

function TransanctionText({ transanction }) {
  return (
    <div className='truncate'>
      <h4>{transanction.text}</h4>
    </div>
  );
}

export default TransanctionText;
