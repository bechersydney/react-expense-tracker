import "./ExpenseDate.css";

const formatDate = (date, format) => {
    switch (format) {
        case "month":
            return date.toLocaleString("en-US", { month: "long" });
        case "day":
            return date.toLocaleString("en-US", { day: "2-digit" });
        default:
            return date.getFullYear();
    }
};

const ExpenseItemDate = ({ date }) => {
    return (
        <div className="expense-date">
            <div className="expense-date__month">
                {formatDate(date, "month")}
            </div>
            <div className="expense-date__year">{formatDate(date, "day")}</div>
            <div className="expense-date__day">{formatDate(date)}</div>
        </div>
    );
};
export default ExpenseItemDate;
