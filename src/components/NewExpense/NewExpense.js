import React from 'react'
import ExpenseForm from './ExpenseForm'
import Card from '../UI/Card'
import './NewExpense.css'

const NewExpense = (props) => {
  const saveExpenseDateHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    props.onAddExpense(expenseData);
  }
  return (
    <Card className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDateHandler} />
    </Card>
  )
}

export default NewExpense
