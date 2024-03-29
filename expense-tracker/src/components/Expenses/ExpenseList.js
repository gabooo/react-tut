import "./ExpenseList.css";

import ExpenseItem from "./ExpenseItem";

const ExpenseList = ({ expenses }) => {

  
  if (expenses.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses</h2>
  }

  return (
    <ul className="expenses-list">
      {expenses.map((expense) => {
      return (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        ></ExpenseItem>
      );})}
    </ul>
  );
};

export default ExpenseList;
