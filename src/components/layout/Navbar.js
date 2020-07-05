import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <>
            <nav>
              <div className="nav-wrapper show-on-small show-on-medium-and-down nav-wrapper  "style={{background:"#6200ee"}}>
                <Link to="/" className="brand-logo show-on-medium-and-down">Expense Tracker</Link>
                <ul className="right ">
                    
                <li><Link  to="/ybalance">Your Balance</Link></li>
                <li><Link  to="/txhistory">Tx.History</Link></li>

                  <li><Link to="/contactme"className="waves-effect waves-light btn-large">Contact Me</Link></li>
                 
                </ul>
              </div>
            </nav>
           
          </>
        )
    }
}