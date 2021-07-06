import React from 'react';

const Invoice = ({ orderCart }) => {

    let price = 0;
    orderCart.map((item) => price += item.netPrice);
    console.log(price)


    return (
        <table className="table border shadow">
            <thead className="thead-dark ">
                <tr>
                    <th scope="col">Medicine Name</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Total Price</th>
                </tr>
            </thead>
            <tbody>
                {orderCart.map((item) =>{
                    return(
                        <tr>
                            <td>{item.medicine}</td>
                            <td>{item.qty} nos.</td>
                            <td>Rs.{item.netPrice}</td>
                        </tr>
                    )
                })}
                <tr>
                    <td></td>
                    <th>Total Price</th>
                    <td>Rs.{price}</td>
                </tr>
            </tbody>
        </table>
    );
}

export default Invoice;