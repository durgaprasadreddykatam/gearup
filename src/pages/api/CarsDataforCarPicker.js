import { connectToDatabase } from '../../../lib/mongodb';
const { ObjectId } = require('mongodb');

export default async function handler(req, res) {
  const db = await connectToDatabase();
  const cityname = req.body.city;
  const city = await db.collection('cities').aggregate([
    {
      '$match': {
        'city': cityname
      }
    }, {
      '$unwind': {
        'path': '$carsavailable'
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
    }, {
      '$group': {
        '_id': null, 
        'documents': {
          '$push': '$$ROOT'
        }
      }
    }
  ]).toArray();
  if(city.length > 0 && city[0].documents) {
    return res.json({ message: 'success', data: city[0].documents });
  } else {
    return res.json({ message: 'failure' });
  }
  
}
