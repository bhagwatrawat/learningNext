import React from 'react'
import MainNavigation from '../../components/layouts/mainnavigation';
import NewMeetupForm from '../../components/meetups/newmeetupform'
function NewMeetups() {
  const onAddMeetupHandler=(data)=>{
    console.log(data);
  }
  return (
    <>
    <MainNavigation/>
    <NewMeetupForm onAddMeetup={onAddMeetupHandler}/>
    </>
  )
}

export default NewMeetups