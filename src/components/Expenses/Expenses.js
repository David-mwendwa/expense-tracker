import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import './Expenses.css';
import ExpensesChart from './ExpensesChart';

const Expenses = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filteredChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = expenses.filter((expense) => {
    // console.log(expense)
    // console.log(expense.date)
    // console.log(expense.date.getFullYear());
    // console.log(expense.date.getFullYear().toString());
    // console.log(filteredYear)
    // return 2021
    return expense.date.getFullYear().toString() === filteredYear;
  });
  console.log('filtered ex',filteredExpenses)

  return (
    <Card className='expenses'>
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filteredChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList expenses={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
