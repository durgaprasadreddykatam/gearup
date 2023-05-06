import { connectToDatabase } from '../../../lib/mongodb';
const { ObjectId } = require('mongodb');

export default async function handler(req, res) {
  const db = await connectToDatabase();
  const { Payements,Stripedata } = req.body;

  const UpdatePayemenys = await db.collection('Payements').insertOne({
    user_email: Payements.user_email,
    Transaction_Amount: Payements.Transaction_Amount,
    Currency: Payements.Currency,
    Transaction_Type: Payements.Transaction_Type,
    Transaction_date: Payements.Transaction_date,
    Payement_Instrument: Payements.Payement_Instrument,
    Payement_Status: "Started",
  });

  const Payement_refid = UpdatePayemenys.insertedId;

  const UpdateTrips = await db.collection('Trips').insertOne({
    Payement_refid: Payement_refid,
    DeliveryAddress: Stripedata.DeliveryAddress,
    DeliveryCity: Stripedata.DeliveryCity,
    Delivery_date: Stripedata.DeliveryDateObj,
    Delivery_date_Normal: Stripedata.DeliveryDate,
    ReturnAddress: Stripedata.returnAddress,
    ReturnCity: Stripedata.returnCity,
    Return_date: Stripedata.returnDateObj,
    Return_date_Normal: Stripedata.returnDate,
    user_id:new ObjectId(Stripedata.userid),
    amount_paid: Payements.Transaction_Amount,
    car_class: Stripedata.car_class,
    Coverage_selected: Stripedata.Coverage_selected,
    Drivers: Stripedata.Drivers,
    isSameaddress: Stripedata.isSameaddress,
    no_of_days: Stripedata.no_of_days,
    Unlimited_miles_selected: Stripedata.Unlimited_miles_selected,
    Status: "Started",
  });

  return res.json({ UpdatePayemenys: UpdatePayemenys, UpdateTrips: UpdateTrips});
}
