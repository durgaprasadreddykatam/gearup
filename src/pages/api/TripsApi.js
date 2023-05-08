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
    if (pasttrips.length > 0 && upcomingtrips.length > 0) {
        return res.json({
          pastripsmessage: 'Past Trips Found',
          upcomingtripsmessage: 'Upcoming Trips Found',
          Pasttrips: pasttrips,
          Upcomingtrips: upcomingtrips
        });
      } else if (pasttrips.length > 0 && upcomingtrips.length === 0) {
        return res.json({
            upcomingtripsmessage: 'No Upcoming Trips Found',
          pastripsmessage: 'Past Trips Found',
          Pasttrips: pasttrips
        });
      } else if (pasttrips.length === 0 && upcomingtrips.length > 0) {
        return res.json({
            pastripsmessage: 'No Past Trips Found',
          upcomingtripsmessage: 'Upcoming Trips Found',
          Upcomingtrips: upcomingtrips
        });
      } else {
        return res.json({
          pastripsmessage: 'No Past Trips Found',
          upcomingtripsmessage: 'No Upcoming Trips Found'
        });
      }
      
}



