import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userService } from '../services/userService';

import {
    loadUsers,
    removeUser,
    login,
    logout,
    signup,
    updateUser,
    getUserById
} from '../store/actions/userActions';

class Test extends Component {
    state = {
        loggedName: ''

    }

    componentDidMount() {

        if (this.props.loggedInUser) {
            this.setState({ loggedName: this.props.loggedInUser.name })

        }
    }

    nameHandleChange = ev => {
        const { value } = ev.target;
        this.setState(
            { loggedName: value }
        )
    };


    doUpdate = async ev => {
        ev.preventDefault();
        var newUser = this.props.loggedInUser;
        newUser.name = this.state.loggedName;
        this.props.updateUser(newUser);

    };

    render() {
        let signupSection = (
            <form onSubmit={this.doUpdate}>

                <input
                    name="name"
                    type="text"
                    value={this.state.loggedName}
                    onChange={this.nameHandleChange}
                    placeholder="Name"
                />

                <br />
                <button>Save</button>
            </form>
        )

        const { loggedInUser } = this.props;
        return (
            <div>
                {this.state.userFull && JSON.stringify(this.state.userFull)}
                {JSON.stringify(this.props.getUserById('$2b$10$FpPXzDyfqi6j2M64xV6Mnes2zE1kPSUqrDy4BKPfNVq/jWUS69Fp6'))}
                {console.log(this.props.getUserById('$2b$10$FpPXzDyfqi6j2M64xV6Mnes2zE1kPSUqrDy4BKPfNVq/jWUS69Fp6'))}
                {loggedInUser && (
                    <div>
                        <h2>Signed in as: {loggedInUser.email} </h2>
                    </div>
                )}
                {signupSection}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        users: state.user.users,
        loggedInUser: state.user.loggedInUser,
        isLoading: state.system.isLoading
    };
};
const mapDispatchToProps = {
    login,
    logout,
    signup,
    removeUser,
    loadUsers,
    updateUser,
    getUserById
};

export default connect(mapStateToProps, mapDispatchToProps)(Test);

