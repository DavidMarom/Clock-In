import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { setPageName } from '../store/actions/userActions';
import { updateSettings } from '../store/actions/settingsActions';
import { uploadImg } from '../services/imgUploadService.js';

export const Settings = () => {
    const dispatch = useDispatch();
    const settings = useSelector((state) => state.settingsReducer.settings);
    const [compLogo, setCompLogo] = useState('');

    useEffect(() => {
        
        }
    , [compLogo]);

    const uploadFile = async (ev) => {
        const recivedImgUrls = await uploadImg(ev)
        const final = recivedImgUrls[0];
        setCompLogo(final);
    }

    const doUpdate = async ev => {
        ev.preventDefault();
        var newSet = settings;
        newSet.img = compLogo;
        dispatch(updateSettings(newSet));
    };

    let form = (
        <form onSubmit={doUpdate}>
            <input type="file" multiple onChange={uploadFile} />
            <button>Save</button>
        </form>
    )

    useEffect(() => { dispatch(setPageName("Settings")); }, []);

    return (
        <div>
            <p>Upload your company logo</p>
            {form}
        </div>
    )
}