import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { setPageName } from '../store/actions/userActions';
import { updateSettings } from '../store/actions/settingsActions';
import { uploadImg } from '../services/imgUploadService.js';
const loading = require("../assets/img/loading3.gif");

export const Settings = () => {
    const dispatch = useDispatch();
    var settings = useSelector((state) => state.settingsReducer.settings);
    const [compLogo, setCompLogo] = useState('');
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => { console.log('useEffect on settings page: ', settings); }, [compLogo]);

    const uploadFile = async (ev) => {
        setIsLoading(true);

        const recivedImgUrls = await uploadImg(ev)
        setCompLogo(recivedImgUrls);
        console.log('comp logo: ', compLogo);
        setIsLoading(false);

    }

    const doUpdate = async ev => {
        ev.preventDefault();
        var newSet = settings[0];
        newSet.img = compLogo;
        dispatch(updateSettings(newSet));
    };

    let form = (
        <form onSubmit={doUpdate}>

            { isLoading ? <img src={loading} alt=""></img> :
                <div>
                    <input type="file" multiple onChange={uploadFile} />
                    <button>Save</button>
                </div>
            }
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