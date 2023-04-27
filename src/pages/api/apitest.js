import { connectToDatabase } from '../../../lib/mongodb';

export default async function handler(req, res) {
    
  const db = await connectToDatabase();
  const userauth = await db.collection('partnersignupdata').findOne({});
  return res.json(userauth);
  }


