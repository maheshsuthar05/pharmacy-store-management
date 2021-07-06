import React, { Component, useState, useEffect } from 'react';
import { upDateExecutive } from '../../Redux/actions'
import { connect } from 'react-redux'

class EditExecutive extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: Number(this.props.match.params.idParam),
            firstName: '',
            lastName: '',
            dob: '',
            gender: '',
            exp: ''
        }
    }

    componentDidMount = () => {
        const exe = this.props.executivesData[this.props.match.params.idParam - 1]
        this.setState({firstName: exe.firstName, lastName: exe.lastName,
            dob: exe.dob, gender: exe.gender, exp: exe.exp})
    }

    onInputChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmitForm = e => {
        e.preventDefault();
        let newData = this.props.executivesData.filter((item)=>(item.id !== this.state.id))
        newData.push(this.state)
        this.props.updateExecutive(newData)
        this.props.history.push('/manager/salesexecutive')
    }

    render() {
        return (
            <div className="card bg-light">
                <article className="card-body mx-auto" style={{ maxWidth: '400px' }}>
                    <form onSubmit={e => this.onSubmitForm(e)}>
                        <div className="form-group input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"> <i className="fas fa-users"></i> </span>
                            </div>
                            <input name="firstName" className="form-control" placeholder="Enter First Name" type="text" required
                                value={this.state.firstName} onChange={e => this.onInputChange(e)}/>
                        </div>
                        <div className="form-group input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"> <i className="fas fa-users"></i> </span>
                            </div>
                            <input name="lastName" className="form-control" placeholder="Enter Last Name" type="text" required
                                value={this.state.lastName} onChange={e => this.onInputChange(e)}/>
                        </div>
                        <div className="form-group input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"> <i className="fas fa-table"></i> </span>
                            </div>
                            <input name="dob" type='date' className="form-control" placeholder="Enter Date of Birth" required
                                value={this.state.dob} onChange={e => this.onInputChange(e)}/>
                        </div>
                        <div className="form-group input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"> <i className="fas fa-users"></i> </span>
                            </div>
                            <input name="gender" className="form-control" placeholder="Enter Gender" required
                                value={this.state.gender} onChange={e => this.onInputChange(e)}/>
                        </div>
                        <div className="form-group input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"> <i className="fas fa-clock"></i> </span>
                            </div>
                            <input name="exp" className="form-control" placeholder="Enter Experience in years" type="number" min='0' max='100' required
                                value={this.state.exp} onChange={e => this.onInputChange(e)}/>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary btn-block"> Update Executive </button>
                        </div>
                    </form>
                </article>
            </div>
        );
    }
}

const mapStateToProps = (store) => ({
    executivesData: store.executives,
});

const mapDispatchToProps = (dispatch) => ({
    updateExecutive: (payload) => dispatch(upDateExecutive(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExecutive);