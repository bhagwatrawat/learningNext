import React from 'react'

function MeetUpItem({key,id,image,title,address}) {
  return (
    <div>
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{address}</p>
        <button>Show Details</button>
    </div>
  )
}

export default MeetUpItem