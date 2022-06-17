import React from 'react'
import MeetupItem from './meetupitem';
function meetuplist(props) {
  return (
    <ul>
        {props.meetups.map(meetup => (
            <MeetupItem
            key={meetup.id}
            id={meetup.id}
            title={meetup.title}
            address={meetup.address}
            image={meetup.image}/>
        ))}
    </ul>
  )
}

export default meetuplist