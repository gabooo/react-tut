import './NewExpense.css';

import ExpenseForm from './ExpenseForm';
import { useState } from 'react';

const NewExpense = (props) => {

    const [editorOpen, setEditorOpen] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    };

    const openNewExpenseForm = () => {
        setEditorOpen(true);
    };

    const closeExpenseForm = () => {
        setEditorOpen(false);
    };

    return (
        <div className="new-expense">

            {!editorOpen && <button onClick={openNewExpenseForm}>Add New Expense</button>}

            {editorOpen && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancelExpenseData={closeExpenseForm} />} 

            
        </div>
    )
};

export default NewExpense;