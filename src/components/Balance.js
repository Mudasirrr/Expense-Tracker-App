import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

import {Link} from 'react-router-dom';
export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <>
      {/* <h4>Your Balance</h4>
    <h1>Rs:{total}/-</h1>  */}
     <div className="row">
    <div className="col s12 m6">
      <div className="card blue-grey darken-1">
        <div className="card-content white-text">
          <span className="card-title">Your Balance</span>
          <p>{total}.</p>
        </div>
        <div className="card-action">
          <Link to="txhistory">Tx History</Link>
          <Link to="/">Add Tx</Link>
        </div>
      </div>
    </div>
  </div>
           
    </>
  )
}
