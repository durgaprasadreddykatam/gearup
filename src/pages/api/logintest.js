import { connectToDatabase } from '../../../lib/mongodb';

export default async function handler(req, res) {
    
  const db = await connectToDatabase();
  const email= req.body.email;
  const emailcheck = await db.collection('users').findOne({ Email: email }, { First_Name: 1,Last_Name: 1, _id: 1 });
    if(emailcheck === null){
        return res.json({message:"emailnotfound"});
    }
  else{
    return res.json({
        message: 'emailfound',
        id: emailcheck._id,
        firstName: emailcheck.First_Name,
        lastName: emailcheck.Last_Name
      });
  }
}