import React, {useState} from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';

import './ExpenseItem.css';

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  
  const clickHandler = () => {
    setTitle('This is the new title')
  }
  
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount.toFixed(2)}</div>
      </div>
      <button onClick={clickHandler}>Change</button>
    </Card>
  );
};

export default ExpenseItem;
