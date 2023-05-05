
import { connectToDatabase } from '../../../lib/mongodb';
import { ObjectId } from 'mongodb';

export default async function handler(req, res) {
  const db = await connectToDatabase();
  const { userid} = req.body;
  const fetchdata = await db.collection('users').findOne({ _id: new ObjectId(userid) });
  const data={email:fetchdata.Email,first_name:fetchdata.First_Name,last_name:fetchdata.Last_Name,mobile:fetchdata.mobile}
    return res.json({ message: 'success',data });
  
}
