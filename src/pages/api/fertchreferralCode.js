import { connectToDatabase } from '../../../lib/mongodb';
const { ObjectId } = require('mongodb');

export default async function handler(req, res) {
  const db = await connectToDatabase();
  const { userid } = req.body;
    const fetchdata = await db.collection('users').findOne({ _id: new ObjectId(userid) });
    return res.json({Refferralcode:fetchdata.referralcode});
      
}



