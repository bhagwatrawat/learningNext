import React from 'react'
import {useRouter} from 'next/router'
function MeetUpItem({id,image,title,address}) {
  const router= useRouter();
  const showDetailHandler=()=>{
    router.push(`/${id}`)
  }
  return (
    <div>
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{address}</p>
        <button onClick={showDetailHandler}>Show Details</button>
    </div>
  )
}

export default MeetUpItem