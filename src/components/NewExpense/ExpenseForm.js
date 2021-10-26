import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: ""
  })

  const titleChangeHandler = (e) => {
    e.preventDefault();
    setUserInput(prevState => {
      return { ...prevState, enteredTitle: e.target.value };
    })
  };
  const amountChangeHandler = (e) => {
    e.preventDefault();
    setUserInput((prevState) => {
      return { ...prevState, enteredAmount: e.target.value };
    });
  };
  const dateChangeHandler = (e) => {
    e.preventDefault();
    setUserInput((prevState) => {
      return { ...prevState, enteredDate: e.target.value };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault()
    const expenseData = {
      title: userInput.enteredTitle,
      amount: userInput.enteredAmount,
      date: userInput.enteredDate,
    };
    console.log(expenseData)
  }

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input
            type='text'
            onChange={titleChangeHandler}
            value={userInput.enteredTitle}
          />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            onChange={amountChangeHandler}
            value={userInput.enteredAmount}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2019-01-01'
            max='2022-12-31'
            onChange={dateChangeHandler}
            value={userInput.enteredDate}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
