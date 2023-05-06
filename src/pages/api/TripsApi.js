import { connectToDatabase } from '../../../lib/mongodb';
const { ObjectId } = require('mongodb');

export default async function handler(req, res) {
  const db = await connectToDatabase();
  const { userid } = req.body;
  const currentDate = new Date();
const pasttrips = await db.collection('Trips').aggregate([
{
    $match: {
    user_id: new ObjectId(userid),
    $expr: {
        $lte: [
        { $toDate: "$Delivery_date" },
        currentDate
        ]
    }
    }
}
]).toArray();
const upcomingtrips = await db.collection('Trips').aggregate([
    {
        $match: {
        user_id: new ObjectId(userid),
        $expr: {
            $gt: [
            { $toDate: "$Delivery_date" },
            currentDate
            ]
        }
        }
    }
    ]).toArray();
    return res.json({Pasttrips:pasttrips,Upcomingtrips:upcomingtrips});
}



