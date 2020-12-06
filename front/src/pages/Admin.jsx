import React, { useEffect, useState } from 'react'
import { connect } from "react-redux";
import { EmpDetailsStrip } from '../cmps/Admin/EmpDetailsStrip';

import { loadUsers, countUsers } from "../store/actions/userActions";
var test = 0;
const _Admin = (props) => {
    const [currPage, setCurrPage] = useState(1);
    const [search, setSearch] = useState('');
    var totalPages;
    totalPages = Math.ceil(props.userCount / 4)
    test++;

    const searchChange = ev => {
        setSearch(ev.target.value);
    }

    const doSearch = (ev) => {
        ev.preventDefault();

        props.loadUsers(search);
    }

    useEffect(() => {
        props.loadUsers('', currPage);
    }, [currPage]);


    useEffect(() => {
        props.loadUsers('', currPage);
        props.countUsers();
    }, []);

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
                
                <button onClick={() => {
                    ((currPage > 1) && setCurrPage(currPage - 1) )
                }}>Prev</button>

                <button onClick={() => {
                    ((currPage <= totalPages-1) && setCurrPage(currPage + 1) )
                }}>Next</button>
                

                {users.map(user => <EmpDetailsStrip key={user._id} user={user} />)}
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.user.users,
        userCount: state.user.userCount
    };
};

const mapDispatchToProps = {
    loadUsers,
    countUsers
};

export const Admin = connect(mapStateToProps, mapDispatchToProps)(_Admin);