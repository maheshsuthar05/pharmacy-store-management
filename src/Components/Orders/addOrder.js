import React, { Component } from 'react';
import { addNewOrder } from '../../Redux/actions'
import { connect } from 'react-redux';
import Invoice from './invoice';

class AddOrder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.orders.length === [] ? 1 : this.props.orders.length + 1,
            customerName: '',
            contact: '',
            orderCart: [],
            medicine: '',
            qty: '',
            totalPrice: 0
        }
    }

    onInputChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmitForm = e => {
        e.preventDefault();
        if (this.state.orderCart.length === 0) {
            alert('Please add Medicines to create order')
        } else {
            this.state.orderCart.map((item) => this.state.totalPrice += item.netPrice);
            console.log(this.state)
            const {id, customerName, contact, orderCart, totalPrice} = this.state;
            this.props.addOrder({id,customerName,contact,orderCart,totalPrice});
            this.props.history.push('/manager/orders');
        }
    }

    onSubmitCartForm = e => {
        e.preventDefault();
        const indexAt = this.props.medicines.filter((item) => item.medicineName === this.state.medicine)
        const netPrice = this.state.qty * indexAt[0].price;
        this.setState({ orderCart: [...this.state.orderCart, { medicine: this.state.medicine, qty: this.state.qty, netPrice: netPrice }], qty: '' })
    }

    render() {
        return (
            <div className="card bg-light d-flex flex-column">
                <article className="card-body" style={{ maxWidth: '100%' }}>
                    <form onSubmit={e => this.onSubmitForm(e)} class='d-flex flex-row'>
                        <div className="form-group input-group mx-5">
                            <div className="input-group-prepend">
                                <span className="input-group-text"> <i className="fas fa-users"></i> </span>
                            </div>
                            <input name="customerName" className="form-control" placeholder="Enter Customer Name" type="text" required
                                value={this.state.customerName} onChange={e => this.onInputChange(e)} />
                        </div>
                        <div className="form-group input-group mr-5">
                            <div className="input-group-prepend">
                                <span className="input-group-text"> +91 </span>
                            </div>
                            <input name="contact" className="form-control" placeholder="Enter 10-digit Contact Number" type='tel' pattern="[0-9]{10}" required
                                value={this.state.contact} onChange={e => this.onInputChange(e)} />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-danger btn-block" style={{ width: '200px' }}> Create Order  </button>
                        </div>
                    </form>
                </article>
                <article className="card-body d-flex flex-row" style={{ maxWidth: '100%' }}>
                    <div style={{ width: '50%' }}>
                        <form onSubmit={e => this.onSubmitCartForm(e)} style={{ maxWidth: '60%' }} className='mx-auto'>
                            <div className="form-group input-group" style={{ width: '100%' }}>
                                <div className="input-group-prepend" style={{ width: '100%' }}>
                                    <span className="input-group-text"> <i className="fas fa-pills"></i> </span>
                                    <select name='medicine' onChange={this.onInputChange} required style={{ width: '100%' }}>
                                        <option value="" >Select Medicine</option>
                                        {this.props.medicines.map((item) => (
                                            <option value={item.medicineName}>{item.medicineName} - {item.stock} nos.</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className="form-group input-group" style={{ width: '100%' }}>
                                <div className="input-group-prepend" style={{ width: '100%' }}>
                                    <span className="input-group-text"> <i className="fas fa-pills"></i> </span>
                                    <input name="qty" style={{ width: '100%' }} className="form-control" placeholder="Enter Quantity" type="number" min='0' required
                                        value={this.state.qty} onChange={e => this.onInputChange(e)} />
                                </div>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-primary btn-block"> Add Medicine  </button>
                            </div>
                        </form>
                    </div>
                    <div style={{ width: '50%' }}>
                        <h3  style={{ width: '50%' }} className='mx-auto'>Customer Invoice</h3>
                        {this.state.orderCart.length !== 0 ? <Invoice orderCart={this.state.orderCart} /> : ''}
                    </div>
                </article>
            </div>
        );
    }
}

const mapStateToProps = (store) => ({
    orders: store.orders,
    medicines: store.medicines
});

const mapDispatchToProps = (dispatch) => ({
    addOrder: (payload) => dispatch(addNewOrder(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddOrder);