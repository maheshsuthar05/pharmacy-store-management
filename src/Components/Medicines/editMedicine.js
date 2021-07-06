import React, { Component, useState, useEffect } from 'react';
import { upDateMedicine } from '../../Redux/actions'
import { connect } from 'react-redux'

class EditMedicine extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: Number(this.props.match.params.idParam),
            medicineName: '',
            manufacturer: '',
            price: '',
            stock: '',
            discount: ''
        }
    }

    componentDidMount = () => {
        const medi = this.props.medicineData[this.props.match.params.idParam - 1]
        this.setState({medicineName: medi.medicineName, manufacturer: medi.manufacturer,
            price: medi.price, stock: medi.stock, discount: medi.discount})
    }

    onInputChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmitForm = e => {
        e.preventDefault();
        let newData = this.props.medicineData.filter((item)=>(item.id !== this.state.id))
        newData.push(this.state)
        this.props.updateMedicine(newData)
        this.props.history.push('/manager/medicines')
    }

    render() {
        return (
            <div className="card bg-light">
                <article className="card-body mx-auto" style={{ maxWidth: '400px' }}>
                    <form onSubmit={e => this.onSubmitForm(e)}>
                        <div className="form-group input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"> <i className="fas fa-pills"></i> </span>
                            </div>
                            <input name="medicineName" className="form-control" placeholder="Medicine name" type="text" required
                                value={this.state.medicineName} onChange={e => this.onInputChange(e)}/>
                        </div>
                        <div className="form-group input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"> <i className="fas fa-industry"></i> </span>
                            </div>
                            <input name="manufacturer" className="form-control" placeholder="Manufacturer name" type="text" required
                                value={this.state.manufacturer} onChange={e => this.onInputChange(e)}/>
                        </div>
                        <div className="form-group input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"> <i className="fas fa-tag"></i> </span>
                            </div>
                            <input name="price" className="form-control" placeholder="Enter the Price" type="number" min='0' required
                                value={this.state.price} onChange={e => this.onInputChange(e)}/>
                        </div>
                        <div className="form-group input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"> <i className="fas fa-cubes"></i> </span>
                            </div>
                            <input name="stock" className="form-control" placeholder="Enter Stock available" type="number" min='0' required
                                value={this.state.stock} onChange={e => this.onInputChange(e)}/>
                        </div>
                        <div className="form-group input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"> <i className="fas fa-percent"></i> </span>
                            </div>
                            <input name="discount" className="form-control" placeholder="Enter Discount" type="number" min='0' max='100'
                                value={this.state.discount} onChange={e => this.onInputChange(e)}/>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary btn-block"> Add Medicine  </button>
                        </div>
                    </form>
                </article>
            </div>
        );
    }
}

const mapStateToProps = (store) => ({
    medicineData: store.medicines,
});

const mapDispatchToProps = (dispatch) => ({
    updateMedicine: (payload) => dispatch(upDateMedicine(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditMedicine);