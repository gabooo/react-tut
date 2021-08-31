import "./ExpenseList.css";

import ExpenseItem from "./ExpenseItem";

function ExpenseList({ expenses }) {
  return (
    <div className="expense-list">
      {expenses.map((expense) => {
        return (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          ></ExpenseItem>
        );
      })}
      
    </div>
  );
}

export default ExpenseList;
