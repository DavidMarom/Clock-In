import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageName } from '../store/actions/userActions'
const docs_img = require('../assets/img/docs.jpg')

export const Documents = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    // Hook option 2: dispatch({type:'PAGE_NAME',name:'Documents'})
    dispatch(setPageName('Documents'))
  })

  return (
    <div>
      <h1>Documents: </h1>
      {/* <img src={docs_img} alt=""></img> */}
      <div className="table-wrapper">
        <h2 className="Timesheet">Documents</h2>
        <button className="upload-btn">
          <i className="fas fa-upload"></i> Upload
        </button>
        <button className="folder-btn">
          <i className="fas fa-folder-plus"></i>
        </button>

        <div className="tickets">
          <p className="ticket-name">Signed Documents (2)</p>
        </div>
        <hr className="hr" />
        <div className="tickets">
          <p className="ticket-name">Resumes And Applications (0)</p>
        </div>
        <hr className="hr" />
        <div className="tickets">
          <p className="ticket-name">Tasklist Attachments (1)</p>
        </div>
      </div>
    </div>
  )
}
