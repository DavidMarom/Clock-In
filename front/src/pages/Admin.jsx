import React, { Component } from 'react'
import { connect } from "react-redux";
import { EmpDetailsStrip } from '../cmps/Admin/EmpDetailsStrip';

import { loadUsers } from "../store/actions/userActions";

export class _Admin extends Component {
    state = {
        users: null
    }

    componentDidMount() {
        this.props.loadUsers();
    }

    render() {
        const { users } = this.props;
        if (!users) { return <h1>loading</h1> }
        else {
            return (
                <div>
                    <h1>Employee List</h1>
                    {users.map(user => <EmpDetailsStrip key={user._id} user={user} />)}

                </div>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.user.users
    };
};

const mapDispatchToProps = {
    loadUsers
};


export const Admin = connect(
    mapStateToProps,
    mapDispatchToProps
)(_Admin);