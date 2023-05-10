import { connectToDatabase } from '../../../lib/mongodb';


export default async function handler(req, res) {
  const db = await connectToDatabase();
  const {userdata,email} = req.body;
  const randnom4digit = Math.floor(1000 + Math.random() * 9000);
  //const lastFour = userdata.phoneNumber.substr(-4);


  const Insertdata=await db.collection("users").insertOne({
    Email:email,
    mobile:userdata.phoneNumber,
    password:userdata.password,
    First_Name:userdata.firstName,
    Last_Name:userdata.lastName,
    isActive:true,
    referralcode:userdata.lastName+randnom4digit

  })
    res.json({ message: 'success', id: Insertdata.insertedId, firstName: userdata.firstName, lastName: userdata.lastName });

}