import NewExpense from "./components/NewExpense/NewExpense";
import ExpenseList from "./components/Expenses/ExpenseList";

const App = () => {
  const expenses = [
    { title: "Car Insurrance", amount: 298.53, date: new Date(2021, 2, 2) },
    { title: "React course", amount: 34.2, date: new Date(2021, 2, 2) },
    { title: "Jakuzzi", amount: 2304, date: new Date(2021, 2, 2) },
  ];

  return (
    <div>
      <h2>Expense Tracker</h2>

      <NewExpense />
      <ExpenseList expenses={expenses} />
    </div>
  );
}

export default App;
