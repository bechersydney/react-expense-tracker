import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = ({ onSaveExpenseData, onCancelForm }) => {
    const [data, setData] = useState({
        title: "",
        amount: 0.1,
        date: "",
    });

    const dataHandler = (e) => {
        const value = e.target.value;
        switch (e.target.name) {
            case "title":
                setData((prevState) => {
                    return { ...prevState, title: value };
                });
                break;
            case "amount":
                setData((prevState) => {
                    return { ...prevState, amount: value };
                });
                break;
            case "date-val":
                setData((prevState) => {
                    return { ...prevState, date: value };
                });
                break;
            default:
                return;
        }
    };
    const addNewExpenseHandler = (e) => {
        e.preventDefault();
        const formattedDate = new Date(data.date);
        const newData = { ...data, date: formattedDate };
        onSaveExpenseData(newData);
        setData({
            title: "",
            amount: "",
            date: "",
        });
    };

    return (
        <form onSubmit={addNewExpenseHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        value={data.title}
                        name="title"
                        onChange={dataHandler}
                    />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="amount">Amount</label>
                    <input
                        name="amount"
                        type="number"
                        min="0.01"
                        step="0.01"
                        value={data.amount}
                        onChange={dataHandler}
                    />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="date">Date</label>
                    <input
                        name="date-val"
                        type="date"
                        min="2019-01-01"
                        max="2022-12-31"
                        value={data.date}
                        onChange={dataHandler}
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                <button onClick={onCancelForm}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;
