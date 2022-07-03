import Head from "next/head";
import {MongoClient} from 'mongodb';
import styles from "../styles/Home.module.css";
import Link from "next/link";
import MeetupLists from "../components/meetups/meetuplist";
import MainNavigation from "../components/layouts/mainnavigation";
import { useState,useEffect } from "react";

export default function Home(props) {

  
  return (
    <div>
      <Head>
        <title>MeetUp App</title>
        <meta name="description" content="This is a meetup app" />
        <link rel="icon" href="../favicon.ico" />
      </Head>
      <MainNavigation />
      <MeetupLists meetups={props.meetups} />
    </div>
  );
}
export async function getStaticProps(){
  const client = await MongoClient.connect('mongodb+srv://Bhagwat123:bhagwat123@cluster0.tcc2x.mongodb.net/meetups?retryWrites=true&w=majority')
  const db= client.db();
  
  const collection = db.collection('meetups');
  const meetups=  await collection.find().toArray();
  client.close();
  return {
    props:{
      meetups:meetups.map(meetup=>({
        title:meetup.title,
        address:meetup.address,
        image:meetup.image,
        id:meetup._id.toString(),
      }))
    },
    revalidate: 1,
  };
}