import React from 'react';
import moment from 'moment';

export default function Notifications(props) {
  const {notifications} = props;
  return (
   <div className="section">
    <div className="card z-depth-1">
      <div className="card-content">
        <div className="card-title">Notifications</div>
        <ul className="notifications">
          {notifications && notifications.map(item => {
            return (
              <li key={item.id}>
                <span className="pink-text">{item.user} </span>
                <span>{item.content}</span>
                <div className="note-date grey-text">{moment(item.time.toDate()).fromNow()}</div>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
   </div>
  )
}
