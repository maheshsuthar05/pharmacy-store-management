import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { upDateExeOrder } from '../Redux/actions'

class ExeOrders extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    onDeleteExeOrders = (deleteId) => {
        const dataAfterDelete = this.props.exeOrders.filter((item) => (deleteId !== item.id))
        this.props.updateExeOrders(dataAfterDelete)
    }
    render() {
        return (<>
            <Link to='/executive/addExeOrder'><button className='btn btn-primary' style={{marginLeft:'38%',marginBottom:'20px',width:'200px'}}>Add New Order</button></Link>
            <table className="table border shadow">
                <thead className="thead-dark ">
                    <tr>
                        <th scope="col">OrderID</th>
                        <th scope="col">Customer Name</th>
                        <th scope="col">Contact Number</th>
                        <th scope="col">Total Price</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.exeOrders !== [] ? this.props.exeOrders.map((item) => (
                        <tr>
                            <th scope="row">{item.id}</th>
                            <td>{item.customerName}</td>
                            <td>{item.contact}</td>
                            <td>Rs. {item.totalPrice}</td>
                            <td>
                                <Link className='btn btn-primary mr-2' to={`/executive/viewExeOrder/${item.id}`}>View</Link>
                                <Link className='btn btn-danger' onClick={() => {this.onDeleteExeOrders(item.id)}}>Delete</Link>
                            </td>
                        </tr>
                    )) : ''}
                </tbody>
            </table>
        </>);
    }
}

const mapStateToProps = (store) => ({
    exeOrders: store.exeOrders
})

const mapDispatchToProps = (dispatch) => ({
    updateExeOrders: (payload) => dispatch(upDateExeOrder(payload)),
});



export default connect(mapStateToProps, mapDispatchToProps)(ExeOrders);