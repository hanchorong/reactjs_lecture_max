import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  // const [userInput, setUserInput] = useState({
  //   title: "",
  //   amount: "",
  //   date: "",
  // });

  const onTitleChange = (e) => {
    setTitle(e.target.value);
    // setUserInput((prevState) => {
    //   return {
    //     ...prevState,
    //     title: e.target.value,
    //   };
    // });
  };
  const onAmountChange = (e) => {
    setAmount(e.target.value);
  };
  const onDateChange = (e) => {
    setDate(e.target.value);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    const expenseDate = {
      title: title,
      amount: amount,
      date: new Date(date),
    };

    props.onSaveExpenseData(expenseDate);

    setAmount("");
    setDate("");
    setTitle("");
  };
  return (
    <form onSubmit={onSubmitForm}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={title} onChange={onTitleChange}></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={amount}
            min="0.01"
            step="0.01"
            onChange={onAmountChange}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={date}
            min="2019-01-01"
            max="2022-12-31"
            onChange={onDateChange}
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
