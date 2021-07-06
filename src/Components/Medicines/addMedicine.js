import React, { Component } from 'react';
import { addNewMedicine } from '../../Redux/actions'
import { connect } from 'react-redux';

class AddMedicine extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.medicineData.length === null ? 1 : this.props.medicineData.length + 1,
            medicineName: '',
            manufacturer: '',
            price: '',
            stock: '',
            discount: ''
        }
    }

    onInputChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmitForm = e => {
        e.preventDefault();
        this.props.addMedicine(this.state)
        this.props.history.push('/manager/medicines')
    }

    render() {
        return (
            <div className="card bg-light">
                <article className="card-body mx-auto" style={{ maxWidth: '700px' }}>
                    <form onSubmit={e => this.onSubmitForm(e)} style={{ maxWidth: '100%' }}>
                        <div className="form-group input-group" style={{ maxWidth: '100%' }}>
                            <div className="input-group-prepend">
                                <span className="input-group-text"> <i className="fas fa-pills"></i> </span>
                            </div>
                            <input name="medicineName" className="form-control" placeholder="Medicine name" type="text" required
                                value={this.state.medicineName} onChange={e => this.onInputChange(e)}/>
                        </div>
                        <div className="form-group input-group" style={{ maxWidth: '100%' }}>
                            <div className="input-group-prepend">
                                <span className="input-group-text"> <i className="fas fa-industry"></i> </span>
                            </div>
                            <input name="manufacturer" className="form-control" placeholder="Manufacturer name" type="text" required
                                value={this.state.manufacturer} onChange={e => this.onInputChange(e)}/>
                        </div>
                        <div className="form-group input-group" style={{ maxWidth: '100%' }}>
                            <div className="input-group-prepend">
                                <span className="input-group-text"> <i className="fas fa-tag"></i> </span>
                            </div>
                            <input name="price" className="form-control" placeholder="Enter the Price" type="number" min='0' required
                                value={this.state.price} onChange={e => this.onInputChange(e)}/>
                        </div>
                        <div className="form-group input-group" style={{ maxWidth: '100%' }}>
                            <div className="input-group-prepend">
                                <span className="input-group-text"> <i className="fas fa-cubes"></i> </span>
                            </div>
                            <input name="stock" className="form-control" placeholder="Enter Stock available" type="number" min='0' required
                                value={this.state.stock} onChange={e => this.onInputChange(e)}/>
                        </div>
                        <div className="form-group input-group" style={{ maxWidth: '100%' }}>
                            <div className="input-group-prepend">
                                <span className="input-group-text"> <i className="fas fa-percent"></i> </span>
                            </div>
                            <input name="discount" className="form-control" placeholder="Enter Discount" type="number" min='0' max='100'
                                value={this.state.discount} onChange={e => this.onInputChange(e)}/>
                        </div>
                        <div className="form-group" style={{ maxWidth: '100%' }}s>
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
    addMedicine: (payload) => dispatch(addNewMedicine(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddMedicine);