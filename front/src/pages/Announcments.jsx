import React, { useEffect, useState } from 'react'
import { loadAnn } from '../store/actions/annActions'
import { AnnStrip } from '../cmps/AnnStrip'
import { setPageName } from '../store/actions/userActions'
import { addAnn } from '../store/actions/annActions';

import { useDispatch, useSelector } from 'react-redux'

export const Announcments = (props) => {
  const [formTitle, setFormTitle] = useState('');
  const [formSubTitle, setFormSubTitle] = useState('');
  const [formLink, setFormLink] = useState('');
  const [formEventType, setFormEventType] = useState('meeting');
  const [formDate, setFormDate] = useState('');

  const allAnnouncements = useSelector((state) => state.annReducer.ann)
  const dispatch = useDispatch()
  useEffect(() => { dispatch(loadAnn()) }, [allAnnouncements])
  useEffect(() => { dispatch(setPageName('Announcements')) })

  // **** DO UPDATE ****
  const doUpdate = async ev => {
    ev.preventDefault();
    const newAnn = {
      title: formTitle,
      subTitle: formSubTitle,
      type:formEventType,
      date:formDate,
      link:formLink
    };
    dispatch(addAnn(newAnn));
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
      <br />
      <input name="date" type="date" onChange={event => { setFormDate(event.target.value) }} /><br />
      <br />
      <input name="link" type="text" onChange={event => { setFormLink(event.target.value) }} placeholder="Link (optional)" /><br />
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