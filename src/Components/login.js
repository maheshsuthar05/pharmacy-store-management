import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'
import './login.css'

class Login extends Component {
    constructor(props) {
        super(props);

        let mLog, eLog = false;
        const mToken = localStorage.getItem('managerToken')
        if (mToken == null) {
            const eToken = localStorage.getItem('executiveToken')
            if (eToken !== null) {
                eLog = true;
            }
        } else {
            mLog = true;
        }

        this.state = {
            mLog, eLog
        }
    }
    render() {
        if (this.state.mLog) {
            return <Redirect to='/manager' />
        }
        if (this.state.eLog) {
            return <Redirect to='/executive' />
        }
        return (<div className='main-bg'>
            <Link to='/managerLogin'><button>Manager Login</button></Link>
            <Link to='/executiveLogin'><button>Executive Login</button></Link>
        </div>);
    }
}

export default Login;