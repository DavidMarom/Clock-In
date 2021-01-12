import React, {useEffect} from 'react'
import { useDispatch } from "react-redux";
import { setPageName } from '../store/actions/userActions';


export const Settings = () => {
    const dispatch = useDispatch();



    useEffect(() => {
        dispatch(setPageName("Settings"));
    });


    return (
        <div>

        </div>
    )
}
