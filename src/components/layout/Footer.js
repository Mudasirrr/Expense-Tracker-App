import React, { Component } from 'react';

export default class Footer extends Component {
   

    render() {
        return (
            <div>
            <footer className="page-footer"style={{background:"#6200ee"}}>
              <div className="container">
                <div className="row">
                  <div className="col l6 s12">
                      <h5>
                  <a className="grey-text text-lighten-4 right"  style={{background:"Red"}}href="https://web.facebook.com/ziakhan.edu/">Special Thanks to Sir Zia Khan,Sir Zeeshan and Sir Adils</a></h5>
                    <h5 className="white-text">Expense</h5>
                    <p className="grey-text text-lighten-4">Who doesn’t have a goal for the new year that involves money? Many of us have goals that involve making more money or managing the money we already have — but, no matter exactly what goal you might have for your money, you’ll probably need some baseline information about it. While understanding your expenses is basic, they make up some of the most important information you can gather about where your money goes. Tracking expenses can be a relatively simple matter and can provide you so much information about your spending habits..</p>
                  </div>
                  <div className="col l4 offset-l2 s12">
                    <h5 className="white-text">Links</h5>
                    <ul>
                      <li><a className="grey-text text-lighten-3" href="https://www.youtube.com/channel/UCJmZcg2nqJBlgeXyRtWcVnw?sub_confirmation=1">Youtube</a></li>
                      <li><a className="grey-text text-lighten-3" href="https://web.facebook.com/mudasir.hussain.1671897/">Facebook</a></li>
                      <li><a className="grey-text text-lighten-3" href="https://github.com/Mudasirrr">Github</a></li>
                      
                    </ul>
                  </div>
                </div>
              </div>
              <div className="footer-copyright">
                <div className="container">
                © 2020 Mudasir Hussain
                <a className="grey-text text-lighten-4 right" href="https://web.facebook.com/ziakhan.edu/">Special Thanks to Sir Zia Khan,Sir Zeeshan and Sir Adils</a>
                </div>
              </div>
            </footer>
            </div>
        )
    }
}