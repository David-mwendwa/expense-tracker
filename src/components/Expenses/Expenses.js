import React, {useState} from 'react';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter'
import './Expenses.css';

const Expenses = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filteredChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  return (
    <Card className='expenses'>
      <ExpensesFilter selected={filteredYear} onChangeFilter={filteredChangeHandler}/>
      {expenses.map((expense) => (
        <ExpenseItem key={expense.id} {...expense} />
      ))}
    </Card>
  );
};

export default Expenses;
