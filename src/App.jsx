import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpense from "./components/IncomeExpense";
import TransanctionList from "./components/TransanctionList";
import AddTransanction from "./components/AddTransanction";
import { TransactionContextProvider } from "./context/TransactionContext";

function App() {
  return (
    <TransactionContextProvider>
      <Header />
      <div className='max-w-96 mx-auto'>
        <Balance />

        <IncomeExpense />
        <TransanctionList />
        <AddTransanction />
      </div>
    </TransactionContextProvider>
  );
}

export default App;
