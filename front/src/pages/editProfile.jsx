import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { loadUsers, login, logout, signup, updateUser, getUserById } from '../store/actions/userActions';

const _profile = React.memo(props => {
    const [loggedName, setLoggedName] = useState('');

    useEffect(() => {
        if (props.loggedInUser) {
            setLoggedName(props.loggedInUser.name);
        }
    }, [props.loggedInUser]);

    const nameHandleChange = ev => {
        const { value } = ev.target;
        setLoggedName(value);
    };

    const doUpdate = async ev => {
        ev.preventDefault();
        var newUser = props.loggedInUser;
        newUser.name = loggedName;
        props.updateUser(newUser);
    };

    let form = (
        <form onSubmit={doUpdate}>
            <input name="name" type="text" value={loggedName} onChange={nameHandleChange} placeholder="Name" />
            <br />
            <button>Save</button>
        </form>
    )

    const { loggedInUser } = props;
    return (
        <div>
            {loggedInUser && (
                <div>
                    <h2>Signed in as: {loggedInUser.email} </h2>
                </div>
            )}
            {form}
        </div>
    )
});

const mapStateToProps = state => {
    return {
        users: state.user.users,
        loggedInUser: state.user.loggedInUser,
        isLoading: state.system.isLoading
    };
};

const mapDispatchToProps = {
    login, logout, signup, loadUsers, updateUser, getUserById
};

export default connect(mapStateToProps, mapDispatchToProps)(_profile);