import React from 'react';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import Contactme from './components/Contactme';


import Navbar from './components/layout/Navbar';
// import Landing from './components/layout/Landing';
import Footer from './components/layout/Footer';


import { GlobalProvider } from './context/GlobalState';

import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
      <Navbar/>
      <div className="container">
        <Route exact path='/'>
          < AddTransaction/>
        </Route>
        <Route path='/ybalance'>
            
        <Balance />        
        </Route>

        <Route path='/addtx'>
          <AddTransaction/>
        </Route>

        <Route path='/txhistory'>            
        <TransactionList />
        </Route>

        <Route path='/expense'>
        <IncomeExpenses />
        </Route>

        <Route path='/contactme' component={Contactme}></Route>

      </div>
      <Footer/>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
