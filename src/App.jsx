import React from "react";
import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpense from "./components/IncomeExpense";
import TransanctionList from "./components/TransanctionList";
import AddTransanction from "./components/AddTransanction";

function App() {
  return (
    <div className='bg-transparent'>
      <Header />
      <div className='max-w-96 mx-auto'>
        <Balance />

        <IncomeExpense />
        <TransanctionList />
        <AddTransanction />
      </div>
    </div>
  );
}

export default App;
