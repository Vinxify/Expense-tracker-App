import { useState, useContext } from "react";
import TransactionContext from "../context/TransactionContext";

function AddTransanction() {
  const { addTransanction } = useContext(TransactionContext);

  const [text, setText] = useState("");
  const [message, setMessage] = useState(false);
  const [amount, setAmount] = useState(0);
  const [btnDisabled, setBtnDisabled] = useState(true);

  // Handling amount
  const handleChangeAmount = (e) => {
    if (e.target.value.length > 4) {
      setMessage(true);
      setBtnDisabled(true);
    } else {
      setAmount(+e.currentTarget.value);
      setMessage(false);
      handleChangeText;
    }
  };

  const handleChangeText = (e) => {
    if (!text) {
      setBtnDisabled(true);
    } else if (text.length < 2) {
      setBtnDisabled(true);
    } else setBtnDisabled(false);
    // using trim to remove whitespace
    setText(e.target.value.trim());
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
        <label className='label'>Narration</label>
        <input
          className='file-input bg-gray-600 px-2 text-clip'
          type='text'
          value={text}
          onChange={handleChangeText}
          placeholder='Enter text...'
        />
        <label className='label truncate'>Amount</label>
        <input
          className='file-input bg-gray-600 px-2 truncate'
          type='number'
          value={amount}
          onChange={handleChangeAmount}
        />
        {message && (
          <p className='text-red-500'>Amount should not be more than $9999</p>
        )}

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
