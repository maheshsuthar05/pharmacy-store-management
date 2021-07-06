import React from 'react';
import { connect } from 'react-redux'
import { useHistory, useParams } from 'react-router';

const ViewExecutive = ({executivesData}) => {
    let history = useHistory();
    const { idParams } = useParams();

    let viewExe = JSON.parse(localStorage.getItem('executives')).filter(item => item.id == idParams)[0]

    return (
        <table class="table border shadow">
            <thead class="thead-light">
                <tr>
                    <th scope="col">Description</th>
                    <th scope="col">Executive Details</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">FirstName</th>
                    <td>{viewExe.firstName}</td>
                </tr>
                <tr>
                    <th scope="row">Last Name</th>
                    <td>{viewExe.lastName}</td>
                </tr>
                <tr>
                    <th scope="row">Date of Birth</th>
                    <td>{viewExe.dob}</td>
                </tr>
                <tr>
                    <th scope="row">Gender</th>
                    <td>{viewExe.gender}</td>
                </tr>
                <tr>
                    <th scope="row">Experience (in Yrs.)</th>
                    <td>{viewExe.exp} nos.</td>
                </tr>
            </tbody>
        </table>
        );
}

const mapStateToProps = (store) => ({
    executivesData: store.executives
})

export default connect(mapStateToProps, null)(ViewExecutive);