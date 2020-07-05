import React, { useContext } from 'react';
import { Transaction } from './Transaction';

import { GlobalContext } from '../context/GlobalState';

import {Link} from 'react-router-dom';
export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <>


      <div className="row">
    <div className="col s12 m6">
      <div className="card blue-grey darken-1">
      <div className="card-content white-text">
          <span className="card-title">Transaction History</span>
          <p><ul className="hislist">
        {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
      </ul>.</p>
        </div>
        <div className="card-action">
          <Link to="/addtx">Add Tx</Link>
          <Link to="/expense">Expense</Link>
        </div>
      </div>
    </div>
  </div>
           
      
    </>
  )
}
