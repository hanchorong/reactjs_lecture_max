import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  // const [add, setAdd] = useState(false);
  const [isEditing, setEditing] = useState(false);

  const saveExpenseData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setEditing(false);
  };

  const addNewExpenseBtn = () => {
    setEditing(true);
  };

  const stopEditingHandler = () => {
    setEditing(false);
  };

  return (
    <div className="new-expense">
      {isEditing === true ? (
        <ExpenseForm
          onSaveExpenseData={saveExpenseData}
          onCancel={stopEditingHandler}
        />
      ) : (
        <button type="button" onClick={addNewExpenseBtn}>
          Add Expense
        </button>
      )}
    </div>
  );
};

export default NewExpense;
