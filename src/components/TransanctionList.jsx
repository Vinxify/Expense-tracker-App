import TransactionContext from "../context/TransactionContext";
import { useContext } from "react";
import Transanction from "./Transanction";

function TransanctionList() {
  const { transanctions } = useContext(TransactionContext);

  return (
    <>
      <h3></h3>
      <ul className='card bg-gray-700 p-2'>
        {transanctions.map((transanction) => (
          <Transanction
            className='card-body bg-gray-700'
            key={transanction.id}
            transanction={transanction}
          />
        ))}
      </ul>
    </>
  );
}

export default TransanctionList;
