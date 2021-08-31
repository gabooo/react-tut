import "./ExpenseList.css";

import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";

function ExpenseList({ expenses }) {
  return (
    <Card className="expense-list">
      {expenses.map((expense) => {
        return (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          ></ExpenseItem>
        );
      })}
      
    </Card>
  );
}

export default ExpenseList;
