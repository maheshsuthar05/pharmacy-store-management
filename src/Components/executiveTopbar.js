import React, { Component } from 'react';
import './managerTopbar.css'
import { Link } from 'react-router-dom';

const ExecutiveTopbar = () => {
    return (
        <div className = 'topbar'>
                <Link to='/executive/orders'><button>Orders</button></Link>
        </div>
    );
}

export default ExecutiveTopbar;