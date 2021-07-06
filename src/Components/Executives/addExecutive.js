import React, { Component } from 'react';
import { addNewExecutive } from '../../Redux/actions'
import { connect } from 'react-redux'

class AddExecutive extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.executivesData.length === null ? 1 : this.props.executivesData.length + 1,
            firstName: '',
            lastName: '',
            dob: '',
            gender: '',
            exp: ''
        }
    }

    onInputChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmitForm = e => {
        e.preventDefault();
        this.props.addExecutive(this.state)
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
                                value={this.state.firstName} onChange={e => this.onInputChange(e)} />
                        </div>
                        <div className="form-group input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"> <i className="fas fa-users"></i> </span>
                            </div>
                            <input name="lastName" className="form-control" placeholder="Enter Last Name" type="text" required
                                value={this.state.lastName} onChange={e => this.onInputChange(e)} />
                        </div>
                        <div className="form-group input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"> <i className="fas fa-table"></i> </span>
                            </div>
                            <input name="dob" type='date' className="form-control" placeholder="Enter Date of Birth" required
                                value={this.state.dob} onChange={e => this.onInputChange(e)} />
                        </div>
                        <div className="form-group input-group">
                            <div className="input-group-prepend" style={{ width: '100%' }}>
                                <span className="input-group-text"> <i className="fas fa-users"></i> </span>
                                <select name='gender' onChange={e => this.onInputChange(e)} required style={{ width: '100%' }} className="form-control">
                                    <option value=''>Select Gender</option>
                                    <option value='Male'>Male</option>
                                    <option value='Female'>Female</option>
                                </select>
                            </div>
                            {/* <input name="gender" className="form-control" placeholder="Enter Gender" required
                                value={this.state.gender} onChange={e => this.onInputChange(e)}/> */}
                        </div>
                        <div className="form-group input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"> <i className="fas fa-clock"></i> </span>
                            </div>
                            <input name="exp" className="form-control" placeholder="Enter Experience in years" type="number" min='0' max='100' required
                                value={this.state.exp} onChange={e => this.onInputChange(e)} />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary btn-block"> Add Executive  </button>
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
    addExecutive: (payload) => dispatch(addNewExecutive(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddExecutive);

// import React, { Component } from 'react';
// import { addNewExecutive } from '../../Redux/actions'
// import { connect } from 'react-redux'

// class AddExecutive extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             id: this.props.executivesData.length === null ? 1 : this.props.executivesData.length + 1,
//             firstName: '',
//             lastName: '',
//             dob: '',
//             gender: '',
//             exp: ''
//         }
//     }

//     onInputChange = e => {
//         this.setState({[e.target.name]: e.target.value})
//     }

//     onSubmitForm = e => {
//         e.preventDefault();
//         this.props.addExecutive(this.state)
//         this.props.history.push('/manager/salesexecutive')
//     }

//     render() {
//         return (
//             <div className="card bg-light">
//                 <article className="card-body mx-auto" style={{ maxWidth: '400px' }}>
//                     <form onSubmit={e => this.onSubmitForm(e)}>
//                         <div className="form-group input-group">
//                             <div className="input-group-prepend">
//                                 <span className="input-group-text"> <i className="fas fa-users"></i> </span>
//                             </div>
//                             <input name="firstName" className="form-control" placeholder="Enter First Name" type="text" required
//                                 value={this.state.firstName} onChange={e => this.onInputChange(e)}/>
//                         </div>
//                         <div className="form-group input-group">
//                             <div className="input-group-prepend">
//                                 <span className="input-group-text"> <i className="fas fa-users"></i> </span>
//                             </div>
//                             <input name="lastName" className="form-control" placeholder="Enter Last Name" type="text" required
//                                 value={this.state.lastName} onChange={e => this.onInputChange(e)}/>
//                         </div>
//                         <div className="form-group input-group">
//                             <div className="input-group-prepend">
//                                 <span className="input-group-text"> <i className="fas fa-table"></i> </span>
//                             </div>
//                             <input name="dob" className="form-control" placeholder="Enter Date of Birth" required
//                                 value={this.state.dob} onChange={e => this.onInputChange(e)}/>
//                         </div>
//                         <div className="form-group input-group">
//                             <div className="input-group-prepend">
//                                 <span className="input-group-text"> <i className="fas fa-users"></i> </span>
//                             </div>
//                             <input name="gender" className="form-control" placeholder="Enter Gender" required
//                                 value={this.state.gender} onChange={e => this.onInputChange(e)}/>
//                         </div>
//                         <div className="form-group input-group">
//                             <div className="input-group-prepend">
//                                 <span className="input-group-text"> <i className="fas fa-clock"></i> </span>
//                             </div>
//                             <input name="exp" className="form-control" placeholder="Enter Experience in years" type="number" min='0' max='100' required
//                                 value={this.state.exp} onChange={e => this.onInputChange(e)}/>
//                         </div>
//                         <div className="form-group">
//                             <button type="submit" className="btn btn-primary btn-block"> Add Executive  </button>
//                         </div>
//                     </form>
//                 </article>
//             </div>
//         );
//     }
// }

// const mapStateToProps = (store) => ({
//     executivesData: store.executives,
// });

// const mapDispatchToProps = (dispatch) => ({
//     addExecutive: (payload) => dispatch(addNewExecutive(payload)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(AddExecutive);