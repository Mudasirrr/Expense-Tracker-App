import React, { Component } from 'react'

export default class Contactme extends Component {
    render() {
        return (
                                    
                <div className="row"style={{background:'purple'}}>
                    <div className="col s12 m7">
                        <div className="card"style={{background:'greenl'}}>
                            <div className="card-image">
                                
                        <img src={require('./mdsr.jpg')} height=''alt='Image..'  />
                           <h4>
                                Mudasir Hussain
                                    </h4>
                            </div>
                            <div className="card-content">
                            <p>Mudasir Hussain
                                ( Zosn )
                                A passionate individual who always thrive to work on end to end products which develop sustainable and scalable social and technical systems to create impact.</p>
                            </div>
                            <div className="card-action">
                                <a href="https://mudasirrr.github.io/My-Portfolio/#/home">Portfolio</a>
                            </div>
                        </div>
                   </div>
                </div>
        )
    }
}
