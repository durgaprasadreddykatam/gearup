import { connectToDatabase } from '../../../lib/mongodb';
import { ObjectId } from 'mongodb';

export default async function handler(req, res) {
  const db = await connectToDatabase();
  const {userdata,email} = req.body;
  const Insertdata=await db.collection("users").insertOne({
    Email:email,
    mobile:userdata.phoneNumber,
    password:userdata.password,
    First_Name:userdata.firstName,
    Last_Name:userdata.lastName,
    isActive:true

  })
    res.json({ message: 'success', id: Insertdata.insertedId, firstName: userdata.firstName, lastName: userdata.lastName });

}