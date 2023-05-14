import { connectToDatabase } from '../../../lib/mongodb';
import { ObjectId } from 'mongodb';

export default async function handler(req, res) {
  const db = await connectToDatabase();
  const searchdata = req.body.searchdata;

  if(searchdata !== undefined){
    const city = await db.collection('cities').aggregate([
      {
        '$match': {
          'city': searchdata.city
        }
      }, {
        '$unwind': {
          'path': '$carsavailable'
        }
      }, {
        '$match': {
          'carsavailable.carid': new ObjectId(searchdata.id)
        }
      }, {
        '$lookup': {
          'from': 'cars', 
          'localField': 'carsavailable.carid', 
          'foreignField': '_id', 
          'as': 'cars1'
        }
      }, {
        '$unwind': {
          'path': '$cars1'
        }
      }, {
        '$project': {
          'combinedCars': {
            '$mergeObjects': [
              '$carsavailable', '$cars1'
            ]
          }
        }
      }
    ]).toArray();
  
    if(city.length > 0) {
      return res.json({ message: 'success', data: city[0].combinedCars });
    } else {
      return res.json({ message: 'failure' });
    }
  } else {
    return res.json({ message: 'failure' });
  }
}
