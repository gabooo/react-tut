import "./ExpenseItem.css";

import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = ({ title, amount, date }) => {

  const clickHandler = () => {

  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />

      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>

      <button onClick={clickHandler}>Change title</button>
    </Card>
  );
};

export default ExpenseItem;
