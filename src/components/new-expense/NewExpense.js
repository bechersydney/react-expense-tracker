import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = ({ onAddNewExpense }) => {
    const saveExpenseHander = (newExpenseData) => {
        const expenseData = {
            id: Math.random().toString(),
            ...newExpenseData,
        };
        onAddNewExpense(expenseData);
    };
    const [isFormOpen, setFormOpen] = useState(false);
    const openFormHandler = () => setFormOpen(true);
    const closeFormHandler = (e) => {
        e.preventDefault();
        setFormOpen(false);
    };
    return (
        <div className="new-expense">
            {!isFormOpen && (
                <button onClick={openFormHandler}>Add new expense</button>
            )}
            {isFormOpen && (
                <ExpenseForm
                    onSaveExpenseData={saveExpenseHander}
                    onCancelForm={closeFormHandler}
                />
            )}
        </div>
    );
};
export default NewExpense;
