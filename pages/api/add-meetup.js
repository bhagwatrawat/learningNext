import {MongoClient} from 'mongodb';
 async function handler (req,res){
    if(req.method==='POST'){
        const data = req.body
        const client = await MongoClient.connect('mongodb+srv://Bhagwat123:bhagwat123@cluster0.tcc2x.mongodb.net/meetups?retryWrites=true&w=majority')
        const db= client.db();
        
        const collection = db.collection('meetups');
        const result = await collection.insertOne(data)
        client.close();
        res.status(201).json({message:'meetup added'})

    }
}
export default handler;