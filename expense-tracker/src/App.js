import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";
import { useState } from "react";

const DUMMY_EXPENSES = [
  { id: '1', title: "Car Insurrance", amount: 298.53, date: new Date(2021, 2, 2) },
  { id: '2', title: "React course", amount: 34.2, date: new Date(2021, 2, 2) },
  { id: '3', title: "Jakuzzi", amount: 2304, date: new Date(2021, 2, 2) },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);


  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {return [expense, ...prevExpenses]});
  };

  return (
    <div>
      <h2>Expense Tracker</h2>

      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
