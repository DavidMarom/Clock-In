// ADMIN PAGE

import React, { useEffect, useState } from 'react'
import { EmpDetailsStrip } from '../cmps/Admin/EmpDetailsStrip';
import { useDispatch, useSelector } from "react-redux";

import { loadUsers, countUsers, setPageName } from "../store/actions/userActions";
const _Admin = () => {
    const userCount = useSelector((state) => state.user.userCount);
    const users = useSelector((state) => state.user.users);
    const dispatch = useDispatch();

    const [currPage, setCurrPage] = useState(1);
    const [search, setSearch] = useState('');
    var totalPages;
    totalPages = Math.ceil(userCount / 4)

    const searchChange = ev => {
        setSearch(ev.target.value);
    }

    const doSearch = (ev) => {
        ev.preventDefault();
        dispatch(loadUsers(search));
    }

    useEffect(() => { dispatch(loadUsers('', currPage)) });

    useEffect(() => {
        dispatch(loadUsers('', currPage));
        dispatch(countUsers());
        dispatch(setPageName('Employee List'));
    }
    ,[dispatch,currPage]
    );

    if (!users) { return <h1>loading</h1> }
    else {
        return (
            <div>
                <div className="table-head">
                    <p></p>
                    <form onSubmit={doSearch}>
                        <input type="text" name="search" onChange={searchChange} placeholder="Search" ></input>
                        <button>Search</button>
                    </form>
                </div>

                <div className="table-head"><p></p><p>Name</p><p>Role</p><p>email</p></div>
                {users.map(user => <EmpDetailsStrip key={user._id} user={user} />)}

                <button onClick={() => { ((currPage > 1) && setCurrPage(currPage - 1)) }}>Prev</button>
                <button onClick={() => { ((currPage <= totalPages - 1) && setCurrPage(currPage + 1)) }}>Next</button>
            </div>
        )
    }
}

export const Admin = _Admin;
