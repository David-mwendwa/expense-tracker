import Moment from 'react-moment';
import './ExpenseDate.css';

const ExpenseDate = ({ date }) => {
  let year = <Moment date={date} format='YYYY' />;
  let month = <Moment date={date} format='MMMM' />;
  let day = <Moment date={date} format='DD' />;

  return (
    <div className='expense-date'>
      <div className='expense-date__month'>{month}</div>
      <div className='expense-date__year'>{year}</div>
      <div className='expense-date__day'>{day}</div>
    </div>
  );
}

export default ExpenseDate;
