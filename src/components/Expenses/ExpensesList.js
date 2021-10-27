import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = (props) => {
  const expensesContent = !props.expenses.length ? (
    <h2 className='expenses-list__fallback'>No expenses found.</h2>
  ) : (
    props.expenses.map((expense) => (
      <ExpenseItem key={expense.id} {...expense} />
    ))
  );

  return <ul className='expenses-list'>{expensesContent}</ul>;
};

export default ExpensesList;
