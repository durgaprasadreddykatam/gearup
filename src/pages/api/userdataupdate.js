import { connectToDatabase } from '../../../lib/mongodb';
const { ObjectId } = require('mongodb');
export default async function (req, res) {
    const db = await connectToDatabase();
    const {id,userdata,isActive} = req.body;
    const updatedata = await db.collection('users').updateOne({ _id: new ObjectId(id) },{
        $set: {
            mobile: userdata.mobile,
            First_Name: userdata.firstname,
            Last_Name:userdata.lastname,
            isActive:isActive


        }
    });
    return res.json(updatedata);
    // return res.json(updatedata);
}