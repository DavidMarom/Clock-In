import React, { useEffect } from 'react'
import { loadAnn } from '../store/actions/annActions'
import { AnnStrip } from '../cmps/AnnStrip'
import { setPageName } from '../store/actions/userActions'
import { useDispatch, useSelector } from 'react-redux'

export const Announcments = (props) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadAnn())
  }, [])

  useEffect(() => {
    dispatch(setPageName('Announcements'))
  })

  const allAnnouncements = useSelector((state) => state.annReducer.ann)

  return (
    <div>
      <h1>Announcements</h1>

      {allAnnouncements
        ? allAnnouncements.map((ann, idx) => {
            return <AnnStrip key={idx} ann={ann} />
          })
        : null}
    </div>
  )
}
