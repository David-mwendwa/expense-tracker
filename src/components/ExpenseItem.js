import Moment from 'react-moment';

import './ExpenseItem.css';

function ExpenseItem(props) {
  const {date, title, amount} = props

  return (
    <div className='expense-item'>
      <div><Moment date={date} format="MMMM DD, YYYY" /></div>
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${amount.toFixed(2)}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
