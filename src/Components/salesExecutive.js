import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { upDateExecutive } from '../Redux/actions'

class SalesExecutive extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    onDeleteExecutive = (deleteId) => {
        const dataAfterDelete = this.props.executivesData.filter((item) => (deleteId !== item.id))
        this.props.updateExecutive(dataAfterDelete)
    }
    render() {
        return (<>
            <Link to='/manager/addExecutive'><button className='btn btn-primary' style={{marginLeft:'38%',marginBottom:'20px',width:'200px'}}>Add New Executive</button></Link>
            <table className="table border shadow">
                <thead className="thead-dark ">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Experience (in Yrs)</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.executivesData !== [] ? this.props.executivesData.map((item) => (
                        <tr>
                            <th scope="row">{item.id}</th>
                            <td>{item.firstName}</td>
                            <td>{item.lastName}</td>
                            <td>{item.exp}</td>
                            <td>
                                <Link className='btn btn-primary mr-2' to={`/manager/viewExecutive/${item.id}`}>View</Link>
                                <Link className='btn btn-outline-primary mr-2' to={`/manager/editExecutive/${item.id}`}>Edit</Link>
                                <Link className='btn btn-danger' onClick={() => {this.onDeleteExecutive(item.id)}}>Delete</Link>
                            </td>
                        </tr>
                    )) : ''}
                </tbody>
            </table>
        </>);
    }
}

const mapStateToProps = (store) => ({
    executivesData: store.executives
})

const mapDispatchToProps = (dispatch) => ({
    updateExecutive: (payload) => dispatch(upDateExecutive(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SalesExecutive);