import React, { useEffect, useState } from 'react'
import { connect } from "react-redux";
import { EmpDetailsStrip } from '../cmps/Admin/EmpDetailsStrip';

import { loadUsers } from "../store/actions/userActions";

const _Admin = (props) => {

    const [search, setSearch] = useState('');

    const searchChange = ev => {
        setSearch(ev.target.value);
    }

    const doSearch = (ev) => {
        ev.preventDefault();
        console.log('01 doSearch: ', search);

        props.loadUsers(search);
    }


    useEffect(() => { props.loadUsers('') }, []);

    const { users } = props;
    if (!users) { return <h1>loading</h1> }
    else {
        return (
            <div>
                <h1>Employee List</h1>

                <form onSubmit={doSearch}>
                    <input type="text" name="search" onChange={searchChange} placeholder="Search" ></input>
                    <button>Search</button>
                </form>

                <div className="table-head">

                    <p>Name</p>
                    <p>Role</p>
                    <p>email</p>
                </div>
                {users.map(user => <EmpDetailsStrip key={user._id} user={user} />)}

            </div>
        )
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

export const Admin = connect(mapStateToProps, mapDispatchToProps)(_Admin);