import React from 'react';
import { connect } from 'react-redux'
import { useHistory, useParams } from 'react-router';

const ViewExeOrder = ({ medicinesData }) => {
    let history = useHistory();
    const { idParams } = useParams();

    let viewOrders = JSON.parse(localStorage.getItem('exeOrders')).filter(item => item.id == idParams)[0]

    return (
        <div>
            <div className='d-flex flex-row justify-content-around mb-3' style={{maxWidth:'100%',fontSize:'24px'}}>
                <div>
                    <span style={{fontWeight:'600'}}>Customer Name - </span>
                    <span>{viewOrders.customerName}</span>
                </div>
                <div>
                    <span style={{fontWeight:'600'}}>Contact Number - </span>
                    <span>{viewOrders.contact}</span>
                </div>
            </div>
            <table class="table border shadow">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">Medicine</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Net Price</th>
                    </tr>
                </thead>
                <tbody>
                    {viewOrders.orderCart.map((item, index) => {
                        return (
                            <tr>
                                <td>{viewOrders.orderCart[index].medicine}</td>
                                <td>{viewOrders.orderCart[index].qty} nos.</td>
                                <td>Rs.{viewOrders.orderCart[index].netPrice}</td>
                            </tr>
                        )
                    })}
                    <tr>
                        <td></td>
                        <th>Total Price</th>
                        <th>Rs.{viewOrders.totalPrice}</th>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

const mapStateToProps = (store) => ({
    exeOrders: store.exeOrders
})

export default connect(mapStateToProps, null)(ViewExeOrder);