import React from 'react'
import {MongoClient,ObjectId} from 'mongodb'
import ShowDetails from '../../components/meetups/showDetails'
function MeetupId(props) {
  return (
    <ShowDetails meetup={props.meetupData}/>
  )
}
export async function getStaticPaths(){
  const client = await MongoClient.connect('mongodb+srv://Bhagwat123:bhagwat123@cluster0.tcc2x.mongodb.net/meetups?retryWrites=true&w=majority')
  const db= client.db();
  
  const collection = db.collection('meetups');
  const meetupIds= await collection.find({},{_id:1}).toArray();
  client.close();
  return {
    fallback:false,
    paths:meetupIds.map((meetup)=>({
      params :{
        meetupid:meetup._id.toString()
      },
    }))
  }
}
export async function getStaticProps(context){
  const meetupId= context.params.meetupid;
  const client = await MongoClient.connect('mongodb+srv://Bhagwat123:bhagwat123@cluster0.tcc2x.mongodb.net/meetups?retryWrites=true&w=majority')
  const db= client.db();
  const collection = db.collection('meetups');
  const meetup=await collection.findOne({_id:ObjectId(meetupId)});
  client.close();
  return{ props:{
    meetupData: {
      title:meetup.title,
      address:meetup.address,
      image:meetup.image,
      description:meetup.description
    }
  }
  ,revalidate: 1,
}
}
export default MeetupId