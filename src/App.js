import { useState } from "react";
import "./App.css";
import Chart from "./components/chart/Chart";
import ExpenseList from "./components/expense/ExpenseList";
import ExpensesChart from "./components/expense/ExpensesChart";
import NewExpense from "./components/new-expense/NewExpense";

const DUMMY_EXPENSES = [
    {
        id: "e1",
        title: "Toilet Paper",
        amount: 94.12,
        date: new Date(2020, 7, 14),
    },
    {
        id: "e2",
        title: "New TV",
        amount: 799.49,
        date: new Date(2021, 2, 12),
    },
    {
        id: "e3",
        title: "Car Insurance",
        amount: 294.67,
        date: new Date(2021, 2, 28),
    },
    {
        id: "e4",
        title: "New Desk (Wooden)",
        amount: 450,
        date: new Date(2021, 5, 12),
    },
];
const App = () => {
    // state
    const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
    const addNewExpenseHandler = (expenseData) => {
        setExpenses((prevState) => {
            return [expenseData, ...prevState];
        });
    };

    return (
        <div className="App">
            <NewExpense onAddNewExpense={addNewExpenseHandler} />
            <ExpenseList expenses={expenses} />
        </div>
    );
};

export default App;
