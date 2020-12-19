import React, { Component } from 'react';
import API from '../utils/API'
import TableRow from './TableRow'
import 'bootstrap/dist/css/bootstrap.min.css';



class Table extends Component {
    employeeData() {
        return API.getRandomEmployee()
    }
    constructor(props) {
        super(props)
        this.state = {
            items: [],
        }

    }
    // Enable employee-search functionality in the table. 
    handleSearch = event => {
        const filters = event.target.value;
        const filteredList = this.state.items.filter(item => {
            let values = Object.values(item).join("").toLowerCase();
            return values.indexOf(filters.toLowerCase()) !== -1;

        });

        this.setState({ items: filteredList });
    }

    // When the component mounts, get a list of all available users and update this.state.users
    componentDidMount() {
        this.employeeData()
            .then(employees => {
                    this.setState({
                        items: employees,
                        loading: true
                    })
                })
                .catch(err => console.log(err));
    }
    // Render employee details in the table.
    render() {
        if (this.state.items.length === 0) {
            return null;
        }
        
        return (

            <div>
                <div className="container">
                    <input className="form-control mb-4" 
                    onChange={this.handleSearch} id="tableSearch" type="text" 
                    placeholder="Filter your current employee search by their firstname, lastname, email or location. Ex, John">

                    </input>

                    <table className="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>Photo ID</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Gender</th>
                                <th>Location</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody id="myTable">
                            {this.state.items.map((items) => {
                                return (
                                    <TableRow picture={items.image} firstname={items.loginFirstName} lastname={items.loginLastName} gender={items.gender} location={items.location}  email={items.email}/>)
                            })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default Table;