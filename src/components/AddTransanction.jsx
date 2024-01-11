import { useState, useContext, useEffect } from "react";
import TransactionContext from "../context/TransactionContext";

function AddTransanction() {
  const { addTransanction } = useContext(TransactionContext);

  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const [btnDisabled, setBtnDisabled] = useState(true);

  const handleChangeAmount = (e) => {
    setAmount(+e.currentTarget.value);
  };

  const handleChangeText = (e) => {
    if (!text) {
      setBtnDisabled(true);
    } else if (text.length < 3) {
      setBtnDisabled(true);
    } else setBtnDisabled(false);

    setText(e.target.value);
  };

  const handleSumbit = (e) => {
    e.preventDefault();

    const newTransanction = {
      id: Math.floor(Math.random() * 100000),
      text,
      amount,
    };

    addTransanction(newTransanction);
    setBtnDisabled(true);
    setText("");
    setAmount(0);
  };

  return (
    <div className='card mt-6'>
      <h3 className='text-3xl text-primary'>Add new Transanction</h3>
      <form className='form-control' onSubmit={handleSumbit}>
        <label className='label '>Text</label>
        <input
          className='file-input bg-gray-600 px-2'
          type='text'
          value={text}
          onChange={handleChangeText}
          placeholder='Enter text...'
        />
        <label className='label'>Amount</label>
        <input
          className='file-input bg-gray-600 px-2'
          type='number'
          value={amount}
          onChange={handleChangeAmount}
        />

        <button
          className=' btn btn-primary mt-3'
          disabled={btnDisabled}
          type='submit'
        >
          Add transanction
        </button>
      </form>
    </div>
  );
}

export default AddTransanction;
