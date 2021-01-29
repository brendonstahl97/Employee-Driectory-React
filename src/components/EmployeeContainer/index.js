import React, { Component } from 'react';
import API from '../../utils/API';

class EmployeeContainer extends Component {
    state = {
        employees: []
    };

    componentDidMount() {
        API.getEmployees()
        // .then(res => this.setState({employees: res}))
        .then(res => console.log(res.data.results))
        .catch(err => console.log(err));
    };

    render() {
        return(
            <h1>Hey Dingo</h1>
        );
    };
};

export default EmployeeContainer;