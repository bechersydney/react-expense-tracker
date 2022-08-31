import "./ExpenseItem.css";
import { useState } from "react";

import Card from "../ui/Card";
import ExpenseItemDate from "./ExpenseItemDate";

const ExpenseItem = ({ expense }) => {
    const [title, setTitle] = useState(expense.title);
    let { date, amount } = expense;
    // const changeNameHandler = () => setTitle("Updated");
    // const changeName = (e) => setTitle(e.target.value);
    return (
        <Card className="expense-item">
            <ExpenseItemDate date={date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${amount}</div>
            </div>
            {/* <button onClick={changeNameHandler}>Change title</button>
            <input type="text" value={title} onChange={(e) => changeName(e)} /> */}
        </Card>
    );
};
export default ExpenseItem;
