import React, { Component } from 'react';
import { Redirect, Link, BrowserRouter, Route, Switch } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import ManagerTopbar from './managerTopbar';
import Medicines from './medicines';
import Orders from './orders';
import AddMedicine from './Medicines/addMedicine';
import './manager.css'
import SalesExecutive from './salesExecutive';
import EditMedicine from './Medicines/editMedicine';
import ViewMedicine from './Medicines/viewMedicine';
import AddExecutive from './Executives/addExecutive';
import ViewExecutive from './Executives/viewExecutive';
import EditExecutive from './Executives/editExecutive';
import AddOrder from './Orders/addOrder';
import ViewOrder from './Orders/viewOrder';

class Manager extends Component {
    constructor(props) {
        super(props);
        const token = localStorage.getItem('managerToken')

        let loggedIn = true

        if (token == null) {
            loggedIn = false
        }
        this.state = {
            loggedIn
        }
    }

    logout = () => {
        localStorage.removeItem('managerToken');
        this.props.history.push('/')
    }

    render() {
        if (this.state.loggedIn === false) {
            return <Redirect to='/' />
        }

        return (<div className='manager-home'>
            <BrowserRouter>
                <div className='left-col'>
                    <ManagerTopbar />
                </div>
                <div className='right-col'>
                    <div className='header'>
                        <h1>Hello Manager</h1>
                        <button onClick={this.logout} className='btn btn-outline-danger'>Logout</button>
                    </div>
                    <div className='manager-section'>
                        <Switch>
                            <Route path='/manager/medicines' component={Medicines} />
                            <Route path='/manager/orders' component={Orders} />
                            <Route path='/manager/salesexecutive' component={SalesExecutive} />

                            <Route path='/manager/addMedicine' component={AddMedicine} />
                            <Route path='/manager/editMedicine/:idParam' component={EditMedicine} />
                            <Route path='/manager/viewMedicine/:idParams' component={ViewMedicine} />

                            <Route path='/manager/addExecutive' component={AddExecutive} />
                            <Route path='/manager/editExecutive/:idParam' component={EditExecutive} />
                            <Route path='/manager/viewExecutive/:idParams' component={ViewExecutive} />

                            <Route path='/manager/addOrder' component={AddOrder} />
                            <Route path='/manager/viewOrder/:idParams' component={ViewOrder} />
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        </div>);
    }
}

export default Manager;