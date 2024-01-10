import { useState } from "react";

function AddTransanction() {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const handleChangeText = (e) => {
    setText(e.target.value);
  };

  const handleChangeAmount = (e) => {
    setAmount(+e.currentTarget.value);
  };

  return (
    <div>
      <h3>Add new Transanction</h3>
      <form>
        <label className='block'>Text</label>
        <input
          type='text'
          value={text}
          onChange={handleChangeText}
          placeholder='Enter text...'
        />
        <label className='block'>Amount</label>
        <input type='number' value={amount} onChange={handleChangeAmount} />

        <button className=' btn btn-primary' type='submit'>
          Add transanction
        </button>
      </form>
    </div>
  );
}

export default AddTransanction;
