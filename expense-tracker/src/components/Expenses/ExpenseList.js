import "./ExpenseList.css";

import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";

const ExpenseList = ({ expenses }) => {
  const [selectedFilter, setSelectedFilter] = useState('2020');
  

  const filterChangeHandler = (selectedFilter) => {
    setSelectedFilter(selectedFilter);
  };
  return (
    <div>
      <Card className="expense-list">
        <ExpenseFilter selected={selectedFilter} onChangeFilter={filterChangeHandler} />

        {expenses
          // .filter((expense) => {
          //   return expense.date.getFullYear() === selectedFilter;
          // })
          .map((expense) => {
            return (
              <ExpenseItem
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
              ></ExpenseItem>
            );
          })}
      </Card>
    </div>
  );
};

export default ExpenseList;
