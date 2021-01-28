import React, { useEffect, useState } from 'react'
import { loadAnn } from '../store/actions/annActions'
import { AnnStrip } from '../cmps/AnnStrip'
import { setPageName } from '../store/actions/userActions'
import { useDispatch, useSelector } from 'react-redux'

export const Announcments = (props) => {
  const [formTitle, setFormTitle] = useState('');
  const [formSubTitle, setFormSubTitle] = useState('');
  const [formEventType, setFormEventType] = useState('');

  const dispatch = useDispatch()
  useEffect(() => { dispatch(loadAnn()) }, [])
  useEffect(() => { dispatch(setPageName('Announcements')) })
  const allAnnouncements = useSelector((state) => state.annReducer.ann)

  const doUpdate = async ev => {
    ev.preventDefault();
    console.log(formTitle);
    console.log(formSubTitle);
    console.log(formEventType);
    // dispatch(updateUser(newUser));
  };


  let form = (
    <form onSubmit={doUpdate}>
      <input name="title" type="text" onChange={event => { setFormTitle(event.target.value) }} placeholder="Title" /><br />
      <input name="subTitle" type="text" onChange={event => { setFormSubTitle(event.target.value) }} placeholder="Sub title" /><br />

      <label htmlFor="type">Event type: </label>

      <select name="type" id="type" onChange={event => { setFormEventType(event.target.value) }}>
        <option value="meeting">Meeting</option>
        <option value="birthday">Birthday</option>
      </select>
      <button>Add Announcement</button>

    </form>
  )

  return (
    <div>
      <h1>Announcements</h1>

      {allAnnouncements ? allAnnouncements.map((ann, idx) => { return <AnnStrip key={idx} ann={ann} /> }) : null}

      {form}




    </div>
  )
}
