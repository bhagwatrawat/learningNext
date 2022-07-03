import React from 'react'
import {useRouter} from 'next/router'
import MainNavigation from '../../components/layouts/mainnavigation';
import NewMeetupForm from '../../components/meetups/newmeetupform'
function NewMeetups() {
  const router= useRouter();
  async function onAddMeetupHandler(enterMeetupData){
    const response= await fetch('/api/add-meetup',{
      method: 'POST',
      body:JSON.stringify(enterMeetupData),
      headers:{
        'content-type': 'application/json'
      }
    })
    const data= await response.json();
    console.log(data);
    router.push('/');
  }
  return (
    <>
    <MainNavigation/>
    <NewMeetupForm onAddMeetup={onAddMeetupHandler}/>
    </>
  )
}

export default NewMeetups