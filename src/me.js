import React, { Component } from 'react'
import Vehicle from './vehicle';

class Home extends Component {
    render() {
        return (
            <div>
                <h5>219 swift dr</h5>
                <h5>goodlettsville, tn, 37075</h5>
            </div>
        );
    }
}
class Me extends Component {
    render() {
        return (
            <div>
                <h3>David Paul</h3>
                <h4>cohort 25</h4>
                <h5>Nashville Software School</h5>
                <Home/>
                <Vehicle/>
            </div>
        );
    }
}

export default Me