import React, { useState, useEffect } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './form';
const stripe = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function Indexcomp(props) {
    const [clientSecret, setClientSecret] = useState('');
    const [paymentIntent, setPaymentIntent] = useState('');
    const stripedata=props.stripedata;
    
    
    useEffect(() => {
      // Create PaymentIntent as soon as the page loads using our local API
      fetch('/api/stripe/stripe_intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: props.amount,
          payment_intent_id: '',
          stripedata:stripedata,
    
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          setClientSecret(data.client_secret);
          setPaymentIntent(data.id);
        });
    }, [props.amount]);
    

  const appearance = {
    theme: 'flat',
    labels: 'floating',
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className='w-full'>
      <h1 className="text-2xl bold mb-4 mt-4 text-center">
        Accept payments with credit card
      </h1>

      {clientSecret && (
        
        <Elements options={options} stripe={stripe}>
          <CheckoutForm searchdata={props.searchdata} stripedata={stripedata} paymentIntent={paymentIntent} />
        </Elements>
      )}
    </div>
  );
}

