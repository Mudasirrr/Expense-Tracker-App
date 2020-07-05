import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

import {Link} from 'react-router-dom';
export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);

  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  return (
    <div className="">
  

        <div className="row">
    <div className="col s12 m6">
      <div className="card blue-grey darken-1">
      <div className="card-content white-text">
          <span className="card-title">Income</span>
          <p>{income}.</p>
        </div>
        <div className="card-content white-text">
          <span className="card-title">Expense</span>
          <p>{expense}.</p>
        </div>
        <div className="card-action">
          <Link to="/addtx">Add Tx</Link>
          <Link to="/ybalance">Balance</Link>
        </div>
      </div>
    </div>
  </div>
           
      </div>
  )
}
