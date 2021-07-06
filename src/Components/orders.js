import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { upDateOrder } from '../Redux/actions'

class Orders extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    onDeleteOrders = (deleteId) => {
        const dataAfterDelete = this.props.orders.filter((item) => (deleteId !== item.id))
        this.props.updateOrders(dataAfterDelete)
    }
    render() {
        return (<>
            <Link to='/manager/addOrder'><button className='btn btn-primary' style={{marginLeft:'38%',marginBottom:'20px',width:'200px'}}>Add New Order</button></Link>
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
                    {console.log(this.props.orders)}
                    {this.props.orders !== [] ? this.props.orders.map((item) => (
                        <tr>
                            <th scope="row">{item.id}</th>
                            <td>{item.customerName}</td>
                            <td>{item.contact}</td>
                            <td>Rs. {item.totalPrice}</td>
                            <td>
                                <Link className='btn btn-primary mr-2' to={`/manager/viewOrder/${item.id}`}>View</Link>
                                <Link className='btn btn-danger' onClick={() => {this.onDeleteOrders(item.id)}}>Delete</Link>
                            </td>
                        </tr>
                    )) : ''}
                </tbody>
            </table>
        </>);
    }
}

const mapStateToProps = (store) => ({
    orders: store.orders
})

const mapDispatchToProps = (dispatch) => ({
    updateOrders: (payload) => dispatch(upDateOrder(payload)),
});



export default connect(mapStateToProps, mapDispatchToProps)(Orders);