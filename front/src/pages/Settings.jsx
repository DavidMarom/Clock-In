import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { setPageName } from '../store/actions/userActions';
import { updateSettings } from '../store/actions/settingsActions';
import { uploadImg } from '../services/imgUploadService.js';

export const Settings = () => {
    const dispatch = useDispatch();
    var settings = useSelector((state) => state.settingsReducer.settings);
    const [compLogo, setCompLogo] = useState('');

    // useEffect(() => {
    //     console.log('useeffect settings:', settings);

    //     if (settings2) {
    //         setCompLogo(settings.img);
    //     }
    // }, [settings]);

    useEffect(() => { console.log('useEffect on settings page: ', settings); }, [compLogo]);

    const uploadFile = async (ev) => {
        const recivedImgUrls = await uploadImg(ev)
        setCompLogo(recivedImgUrls);
        console.log('comp logo: ',compLogo);
    }

    const doUpdate = async ev => {
        ev.preventDefault();
        var newSet = settings[0];
        newSet.img = compLogo;
        console.log('**********',newSet);
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