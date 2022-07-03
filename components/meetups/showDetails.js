import React from 'react'

function ShowDetails(props) {
  return (
    <div>
        <u1>
            <li><img src={props.meetup.image}/></li>
            <li>{props.meetup.title}</li>
            <li>{props.meetup.description}</li>
            <li>{props.meetup.address}</li>
        </u1>
    </div>
  )
}

export default ShowDetails