import { connectToDatabase } from '../../../lib/mongodb';
const { ObjectId } = require('mongodb');

export default async function handler(req, res) {
    const db = await connectToDatabase();
    const id = req.body;
    const fetchdata = await db.collection('users').findOne({ _id: new ObjectId(id) });
    return res.json({
        message:"sucess",
        email:fetchdata.Email,
        firstname:fetchdata.First_Name,        
        lastname:fetchdata.Last_Name,
        mobile:fetchdata.mobile,
        id:fetchdata._id
});}