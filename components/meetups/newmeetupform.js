import React, {useState}from 'react'
import classes from './newmeetupform.module.css'
function NewMeetupForm(props) {
  const [title,setTitle]=useState('')
  const [description,setDescription]=useState('')
  const [image,setImage]=useState('')
  const [address,setAddress]=useState('')
  const submitHandler=(e)=>{
    e.preventDefault()
   const data={address,title,description,image}
   props.onAddMeetup(data);
  }
  return (
    <form className={classes.container}>
        <label>Title</label>
        <input type="text" onChange={(e)=>setTitle(e.target.value)} />
        <label>Image</label>
        <input type="text"  onChange={(e)=>setImage(e.target.value)}/>
        <label>Address</label>
        <input type="text"  onChange={(e)=>setAddress(e.target.value)}/>
        <label>Description</label>
        <textarea  onChange={(e)=>setDescription(e.target.value)}></textarea>
        <button type="submit" onClick={submitHandler}>Submit</button>
    </form>
  )
}

export default NewMeetupForm