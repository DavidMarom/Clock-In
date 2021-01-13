import React, {useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { setPageName } from '../store/actions/userActions';
import { loadSettings } from '../store/actions/settingsActions';

export const Settings = () => {
    const dispatch = useDispatch();

    const settings = useSelector((state) => state.settingsReducer.img);

    useEffect(() => {
        dispatch(loadSettings());
        dispatch(setPageName("Settings"));
        console.log(settings);
    },[]);

    return (
        <div>
                <p>{settings[0].img}</p>
        </div>
    )
}
