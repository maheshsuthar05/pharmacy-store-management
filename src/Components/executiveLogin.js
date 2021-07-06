import React, { Component } from 'react';
import './login.css';
import { Redirect } from 'react-router';

class ExecutiveLogin extends Component {
    constructor(props) {
        super(props);
        const token = localStorage.getItem('executiveToken')

        let loggedIn = true

        if(token == null){
            loggedIn = false
        }
        this.state = { 
            username: '',
            password: '',
            loggedIn
         }
    }

    submitForm = (e) => {
        e.preventDefault();
        const {username, password} = this.state
        if(username === 'test-sales' && password === 'test-sales'){
            localStorage.setItem('executiveToken','asdsdadoawokda')
            this.setState({loggedIn: true})
        }
    }

    render() { 
        if(this.state.loggedIn){
            return <Redirect to='/executive' />
        }
        return ( 
            <div>
            <img className='background-img' 
                src='https://images.unsplash.com/photo-1587370560942-ad2a04eabb6d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80' />
            <div className='card-wrapper'>
                <h1 className='call-to-action'>Executive Login</h1>
                <form onSubmit={this.submitForm}>
                    <div className='field'>
                        <label>Username</label><br />
                        <i className='bx bx-user'></i>
                        <input type='text'
                            id='username'
                            name='username'
                            placeholder='type your username'
                            onChange={(e) =>
                                this.setState({username: e.target.value})
                            }/>
                    </div>

                    <div className='field'>
                        <label>Password</label><br />
                        <i className='bx bx-lock-alt' ></i>
                        <input type='password'
                            id='pwd'
                            name='pwd'
                            placeholder='type your password' 
                            onChange={(e) =>
                                this.setState({password: e.target.value})
                            }/>
                    </div>
                    <a><span>Forgot password?</span></a>
                    <input type='submit' id='login-button' value='LOGIN' on/>

                </form>

            </div>
        </div>
         );
    }
}
 
export default ExecutiveLogin;