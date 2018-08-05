import React from 'react'
import ExpenseList from './ExpenseList';
import { removeExpense } from '../actions/expenses';
import connect from '../../node_modules/react-redux/lib/connect/connect';

const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => {
  return (
    <div>
      <h3>{description}</h3>
      <h5>{amount} - {createdAt}</h5>
      <button onClick={() => {
        dispatch(removeExpense({ id }));
      }}>Remove</button>
    </div>
  )
}

export default connect()(ExpenseListItem);