import { connectToDatabase } from '../../../lib/mongodb';
const { ObjectId } = require('mongodb');

export default async function handler(req, res) {
  const db = await connectToDatabase();
  const { Payements } = req.body;

    return res.json({Pasttrips:pasttrips,Upcomingtrips:upcomingtrips});
}