import NewExpense from "./components/NewExpense/NewExpense";
import ExpenseList from "./components/Expenses/ExpenseList";
import { useState } from "react";

const DUMMY_EXPENSES = [
  { title: "Car Insurrance", amount: 298.53, date: new Date(2021, 2, 2) },
  { title: "React course", amount: 34.2, date: new Date(2021, 2, 2) },
  { title: "Jakuzzi", amount: 2304, date: new Date(2021, 2, 2) },
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
      <ExpenseList expenses={expenses} />
    </div>
  );
}

export default App;
