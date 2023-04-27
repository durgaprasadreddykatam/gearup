
import { connectToDatabase } from '../../../lib/mongodb';
import { ObjectId } from 'mongodb';

export default async function handler(req, res) {
  const db = await connectToDatabase();
  const { id, password } = req.body;
  const passwordcheck = await db.collection('users').findOne({ _id: new ObjectId(id) });

  
  if (!passwordcheck) {
    return res.json({ message: 'failure' }); // No user found with the given ID
  }

  if (passwordcheck.password === password) {
    return res.json({ message: 'success', id: passwordcheck._id, firstName: passwordcheck.firstName, lastName: passwordcheck.lastName });
  } else {
    return res.json({ message: 'failure' });
  }
}
