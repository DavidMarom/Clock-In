// ************************************
// * THIS IS THE CLOCK-IN-OUT PAGE    *
// ************************************

import React, { useState, useEffect } from 'react'
import moment from 'moment'
import { setPageName } from '../store/actions/userActions'
import { useSelector, useDispatch } from 'react-redux'
import { TodayPillar } from '../cmps/TodayPillar'
import { TotalPillar } from '../cmps/TotalPillar'
import { TotalPillar2 } from '../cmps/TotalPillar2'
import { Example } from '../cmps/Example'
import { timeService } from '../services/timeService'

const _Punch = () => {
  const dispatch = useDispatch()

  const loggedInUser = useSelector((state) => state.user.loggedInUser)
  // const users = useSelector(state => state.user.users)
  // const isLoading = useSelector(state => state.system.isLoading)

  const [refresh, setRefresh] = useState(0)

  let currentTime = new Date()
  const currYear = currentTime.getFullYear()
  const currMonth = currentTime.getMonth() + 1
  // const today = currentTime.getDate();
  let sum = 0

  const last3Months = timeService.getLast3Months()
  const a = timeService.sumHours(loggedInUser, last3Months[0])
  const b = timeService.sumHours(loggedInUser, last3Months[1])
  const c = timeService.sumHours(loggedInUser, last3Months[2])

  useEffect(() => {
    dispatch(setPageName('Clock in / out'))
  })

  var totalThisMonth = timeService.sumHours(loggedInUser, [currYear, currMonth])

  const doRefresh = () => {
    setRefresh(refresh + 1)
  }

  let hours = Object.entries(loggedInUser.hours[currYear][currMonth])

  return (
    <div>
      <Example />
      <div className="pillars-strip">
        <div className="pillar">
          <p className="small-text">Today</p>
          <TodayPillar doRefresh={doRefresh} />
        </div>
        <div className="pillar">
          <p className="small-text">Total working hours</p>
          <TotalPillar2
            h1={a}
            h2={b}
            h3={c}
            last3Months={last3Months}
            monthTotalHours={totalThisMonth[0]}
            monthTotalMinutes={totalThisMonth[1]}
          />
        </div>

        <div className="pillar">
          <p className="small-text">Total working hours</p>
          <TotalPillar h1={a} h2={b} h3={c} />
        </div>
      </div>

      <div className="table-wrapper">
        <div className="table-head2">
          <p className="tch">Day</p>
          <p className="tch">In</p>
          <p className="tch">Out</p>
          <p className="tch">Total</p>
        </div>

        {hours.map((day, idx) => {
          if (day[1].length > 1) {
            sum += day[1][1] - day[1][0]
          }

          if (day[1].length > 0) {
            return (
              <div key={idx} className="table2">
                <p className="tc">{day[0]}</p>
                <p className="tc">{moment.unix(day[1][0]).format('HH:mm')}</p>
                {day[1].length > 1 ? (
                  <p className="tc">{moment.unix(day[1][1]).format('HH:mm')}</p>
                ) : (
                  <p className="tc">-</p>
                )}

                {day[1].length > 1 ? (
                  <p className="tc">
                    {Math.floor((day[1][1] - day[1][0]) / 3600)}h⠀
                    {Math.round((((day[1][1] - day[1][0]) / 3600) % 1) * 60)}m
                  </p>
                ) : (
                  <p className="tc">-</p>
                )}
              </div>
            )
          }
        })}

        <div className="table-head2">
          <p className="tch"></p>
          <p className="tch"></p>
          <p className="tch"></p>
          <p className="tch">
            {Math.floor(sum / 3600)}h⠀
            {Math.round(((sum / 3600) % 1) * 60)}m
          </p>
        </div>
      </div>
    </div>
  )
}

export const Punch = _Punch
