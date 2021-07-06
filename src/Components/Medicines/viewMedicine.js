import React from 'react';
import { connect } from 'react-redux'
import { useHistory, useParams } from 'react-router';

const ViewMedicine = ({medicinesData}) => {
    let history = useHistory();
    const { idParams } = useParams();

    let viewMedi = JSON.parse(localStorage.getItem('medicines')).filter(item => item.id == idParams)[0]

    return (
        <table class="table border shadow">
            <thead class="thead-light">
                <tr>
                    <th scope="col">Description</th>
                    <th scope="col">Medicine Details</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">Medicine ID</th>
                    <td>{viewMedi.id}</td>
                </tr>
                <tr>
                    <th scope="row">Medicine Name</th>
                    <td>{viewMedi.medicineName}</td>
                </tr>
                <tr>
                    <th scope="row">Manufacture Name</th>
                    <td>{viewMedi.manufacturer}</td>
                </tr>
                <tr>
                    <th scope="row">Price</th>
                    <td>Rs. {viewMedi.price}</td>
                </tr>
                <tr>
                    <th scope="row">Stock</th>
                    <td>{viewMedi.stock} nos.</td>
                </tr>
                <tr>
                    <th scope="row">Discount</th>
                    <td>{viewMedi.discount}%</td>
                </tr>
            </tbody>
        </table>
        );
}

const mapStateToProps = (store) => ({
    medicinesData: store.medicines
})

export default connect(mapStateToProps, null)(ViewMedicine);