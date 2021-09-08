import "./Expenses.css";

import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import { useState } from "react";

const Expenses = ({ expenses }) => {
  const [selectedFilter, setSelectedFilter] = useState("2020");
  const [filteredExpenses, setFilteredExpenses] = useState(expenses);

  const filterChangeHandler = (selectedFilter) => {
    setSelectedFilter(selectedFilter);
    setFilteredExpenses(
      expenses.filter((expense) => {
        return expense.date.getFullYear().toString() === selectedFilter;
      })
    );
  };

 

  return (
    <div>
      <Card className="expense-list">
        <ExpenseFilter
          selected={selectedFilter}
          onChangeFilter={filterChangeHandler}
        />

        <ExpenseList expenses={filteredExpenses} />

      </Card>
    </div>
  );
};

export default Expenses;
