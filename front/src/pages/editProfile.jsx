import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { loadUsers, login, logout, signup, updateUser, getUserById, setPageName } from '../store/actions/userActions';
import { uploadImg } from '../services/imgUploadService.js'


const _profile = React.memo(props => {
    const [loggedUserName, setLoggedUserName] = useState('');
    const [loggedUserRole, setLoggedUserRole] = useState('');
    const [loggedUserDob, setLoggedUserDob] = useState('');
    const [loggedUserImg, setLoggedUserImg] = useState('');

    useEffect(() => {
        if (props.loggedInUser) {
            setLoggedUserName(props.loggedInUser.name);
            setLoggedUserRole(props.loggedInUser.role);
            setLoggedUserDob(props.loggedInUser.dob);
            setLoggedUserImg(props.loggedInUser.img);
        }
    }, [props.loggedInUser]);

    useEffect(() => {
        props.setPageName('Profile');
    }, []);

    const uploadFile = async (ev) => {
        const recivedImgUrls = await uploadImg(ev)
        setLoggedUserImg(recivedImgUrls);

    }

    const doUpdate = async ev => {
        ev.preventDefault();
        var newUser = props.loggedInUser;
        newUser.name = loggedUserName;
        newUser.role = loggedUserRole;
        newUser.dob = loggedUserDob;
        newUser.img = loggedUserImg;
        props.updateUser(newUser);

        sessionStorage.setItem('user', JSON.stringify(newUser))
    };



    let form = (
        <form onSubmit={doUpdate}>
            <input name="name" type="text" value={loggedUserName} onChange={event => { setLoggedUserName(event.target.value) }} placeholder="Name" /><br />
            <input name="role" type="text" value={loggedUserRole} onChange={event => { setLoggedUserRole(event.target.value) }} placeholder="Role" /><br />
            <input name="dob" type="date" value={loggedUserDob} onChange={event => { setLoggedUserDob(event.target.value) }} placeholder="Date of Birth" /><br />
            <input type="file" multiple onChange={uploadFile} />

            <button>Save</button>
        </form>
    )

    const { loggedInUser } = props;
    return (
        <div>
            {loggedInUser && (
                <div>
                    <h2>Signed in as: {loggedInUser.email} </h2>



                    <div className="center-cropped">
                    {(loggedInUser.img ? <img src={loggedInUser.img[0]}></img> : null )}
                    </div>
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
    login,
    logout,
    signup,
    loadUsers,
    updateUser,
    getUserById,
    setPageName
};

export default connect(mapStateToProps, mapDispatchToProps)(_profile);



