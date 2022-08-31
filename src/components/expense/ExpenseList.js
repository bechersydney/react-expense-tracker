import Card from "./../ui/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "../expenses-filter/ExpensesFilter";
import "./Expenses.css";
import { useState } from "react";
import ExpensesChart from "./ExpensesChart";

const ExpenseList = ({ expenses }) => {
    const [filteredYear, setSelectedYear] = useState("2020");
    const handleFilter = (val) => {
        setSelectedYear(val);
    };

    const filteredExpenses = expenses.filter(
        (expense) => filteredYear === expense.date.getFullYear().toString()
    );

    let expenseListContent = <p>No Expenses Found!!</p>;
    if (filteredExpenses.length !== 0) {
        expenseListContent = filteredExpenses.map((expense) => (
            <ExpenseItem key={expense.id} expense={expense} />
        ));
    }
    return (
        <Card className="expenses">
            <ExpensesChart filteredExpenses={filteredExpenses} />
            <ExpensesFilter selected={filteredYear} onFilter={handleFilter} />
            {expenseListContent}
        </Card>
    );
};
export default ExpenseList;
