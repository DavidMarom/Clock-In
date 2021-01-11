import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser, setPageName } from '../store/actions/userActions';
import { uploadImg } from '../services/imgUploadService.js';
let tmp = 'https://res.cloudinary.com/dojmo7vcc/image/upload/v1610371061/clock/profile_wgiuu9.png';


const _Profile = () => {
    const dispatch = useDispatch();
    const loggedInUser = useSelector((state) => state.user.loggedInUser);

    const [loggedUserName, setLoggedUserName] = useState('');
    const [loggedUserRole, setLoggedUserRole] = useState('');
    const [loggedUserDob, setLoggedUserDob] = useState('');
    const [loggedUserImg, setLoggedUserImg] = useState('');
    const [loggedUserEmail, setLoggedUserEmail] = useState('');

    useEffect(() => {
        if (loggedInUser) {
            setLoggedUserName(loggedInUser.name);
            setLoggedUserRole(loggedInUser.role);
            setLoggedUserDob(loggedInUser.dob);
            setLoggedUserImg(loggedInUser.img);
            setLoggedUserEmail(loggedInUser.email);
        }
    }, [loggedInUser]);

    useEffect(() => {
        dispatch(setPageName("Profile"));
    }, []);

    const uploadFile = async (ev) => {
        const recivedImgUrls = await uploadImg(ev)
        setLoggedUserImg(recivedImgUrls);
    }

    const doUpdate = async ev => {
        ev.preventDefault();
        var newUser = loggedInUser;
        newUser.name = loggedUserName;
        newUser.role = loggedUserRole;
        newUser.dob = loggedUserDob;
        newUser.img = loggedUserImg;
        newUser.email = loggedUserEmail;
        dispatch(updateUser(newUser));

        sessionStorage.setItem('user', JSON.stringify(newUser))
    };

    let form = (
        <form onSubmit={doUpdate}>
            <input name="name" type="text" value={loggedUserName} onChange={event => { setLoggedUserName(event.target.value) }} placeholder="Name" /><br />
            <input name="role" type="text" value={loggedUserRole} onChange={event => { setLoggedUserRole(event.target.value) }} placeholder="Role" /><br />
            <input name="dob" type="date" value={loggedUserDob} onChange={event => { setLoggedUserDob(event.target.value) }} placeholder="Date of Birth" /><br />
            {((loggedInUser.email === 'demo@user.com') ? <p>Cant change email for demo user</p> :
                <div><input name="email" type="email" value={loggedUserEmail} onChange={event => { setLoggedUserEmail(event.target.value) }} placeholder="Email" /><br /></div>)}

            <input type="file" multiple onChange={uploadFile} />

            <button>Save</button>
        </form>
    )

    return (
        <div>
            <div className="rb-top">
                <div className="profile-left cb">
                    <div className="w195">
                        <div className="center-cropped-195">
                            {(loggedInUser.img ? <img src={loggedInUser.img[0]}></img> : <img src={tmp} ></img>)}
                        </div>

                        <div className="side-bar-title">
                            <p>{loggedInUser.name}</p>
                            <p>{loggedInUser.role}</p>

                        </div>



                    </div>
                </div>

                <div className="profile-right">

                    {form}
                </div>
            </div>
        </div>
    )
};

export const Profile = _Profile;
