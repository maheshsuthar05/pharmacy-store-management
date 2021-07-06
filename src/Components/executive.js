import React, { Component } from 'react';
import { Redirect, Link, BrowserRouter, Route, Switch } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import ExecutiveTopbar from './executiveTopbar';
import ExeOrders from './exeOrders';
import './manager.css'
import AddExeOrder from './Orders Executive/AddExeOrder'
import ViewExeOrder from './Orders Executive/ViewExeOrder'

class Executive extends Component {
    constructor(props) {
        super(props);
        const token = localStorage.getItem('executiveToken')

        let loggedIn = true

        if (token == null) {
            loggedIn = false
        }
        this.state = {
            loggedIn
        }
    }

    logout = () => {
        localStorage.removeItem('executiveToken');
        this.props.history.push('/')
    }

    render() {
        if (this.state.loggedIn === false) {
            return <Redirect to='/' />
        }

        return (<div className='manager-home'>
            <BrowserRouter>
                <div className='left-col'>
                    <ExecutiveTopbar />
                </div>
                <div className='right-col'>
                    <div className='header'>
                        <h1>Hello Executive</h1>
                        <button onClick={this.logout} className='btn btn-outline-danger'>Logout</button>
                    </div>
                    <div className='manager-section'>
                        <Switch>
                            <Route path='/executive/orders' component={ExeOrders} />
                            <Route path='/executive/addExeOrder' component={AddExeOrder} />
                            <Route path='/executive/viewOrder/:idParams' component={ViewExeOrder} />
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        </div>);
    }
}

export default Executive;