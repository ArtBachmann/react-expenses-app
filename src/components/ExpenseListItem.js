import React from 'react'
import ExpenseList from './ExpenseList';

const ExpenseListItem = ({ description, amount, createdAt }) => {
  return (
    <div>
      <h3>{description}</h3>
      <h5>{amount} - {createdAt}</h5>
    </div>
  )
}

export default ExpenseListItem;