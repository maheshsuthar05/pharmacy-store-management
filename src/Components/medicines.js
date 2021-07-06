import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { upDateMedicine } from '../Redux/actions'

class Medicines extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    onDeleteMedicine = (deleteId) => {
        const dataAfterDelete = this.props.medicinesData.filter((item) => (deleteId !== item.id))
        this.props.updateMedicine(dataAfterDelete)
    }
    render() {
        return (<>
            <Link to='/manager/addMedicine'><button className='btn btn-primary' style={{marginLeft:'38%',marginBottom:'20px',width:'200px'}}>Add New Medicine</button></Link>
            <table className="table border shadow">
                <thead className="thead-dark ">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Stock</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.medicinesData !== null ? this.props.medicinesData.map((item) => (
                        <tr>
                            <th scope="row">{item.id}</th>
                            <td>{item.medicineName}</td>
                            <td>Rs.{item.price}</td>
                            <td>{item.stock} nos.</td>
                            <td>
                                <Link className='btn btn-primary mr-2' to={`/manager/viewMedicine/${item.id}`}>View</Link>
                                <Link className='btn btn-outline-primary mr-2' to={`/manager/editMedicine/${item.id}`}>Edit</Link>
                                <Link className='btn btn-danger' onClick={() => {this.onDeleteMedicine(item.id)}}>Delete</Link>
                            </td>
                        </tr>
                    )) : ''}
                </tbody>
            </table>
        </>);
    }
}

const mapStateToProps = (store) => ({
    medicinesData: store.medicines
})

const mapDispatchToProps = (dispatch) => ({
    updateMedicine: (payload) => dispatch(upDateMedicine(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Medicines);