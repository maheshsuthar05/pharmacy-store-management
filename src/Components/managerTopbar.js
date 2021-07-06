import React, { Component } from 'react';
import './managerTopbar.css'
import { Link } from 'react-router-dom';

const ManagerTopbar = () => {
    return (
        <div className = 'topbar'>
                <Link to='/manager/medicines'><button>Medicines</button></Link>
                <Link to='/manager/orders'><button>Orders</button></Link>
                <Link to='/manager/salesexecutive'><button>Sales Executive</button></Link>
        </div>
    );
}

export default ManagerTopbar;