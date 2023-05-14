import React, { useEffect, useState } from 'react';
import {
  PaymentElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import { useRouter } from 'next/router';


export default function Form({paymentIntent,stripedata}) {
  const [email, setEmail] = useState('');
  const [locAmount, setLocAmount] = useState(0);
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();
  const params = new URLSearchParams(stripedata);
  const returnUrl = `https://gearup.vercel.app/SecureCheckout?${params.toString()}`;

  useEffect(() => {
    if (!stripe) {
      return;
    }

    //Grab the client secret from url params
    const clientSecret = new URLSearchParams(window.location.search).get(
      'payment_intent_client_secret'
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case 'succeeded':
          setMessage('Payment succeeded!');
          break;
        case 'processing':
          setMessage('Your payment is processing.');
          break;
        case 'requires_payment_method':
          setMessage('Your payment was not successful, please try again.');
          break;
        default:
          setMessage('Something went wrong.');
          break;
      }
    });
  }, [stripe]);


  const handleAmount = async (val) => {
    setLocAmount(val);
    fetch('api/stripe_intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        amount: val * 100,
        payment_intent_id: paymentIntent.paymentIntent,
      }),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   if (!stripe || !elements) {
      console.log('not loaded');
      
      return;
    }
    setIsLoading(true);
    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url:returnUrl,
        receipt_email: stripedata.email,
        shipping: {
          address: { city: stripedata.DeliveryCity },
          name: stripedata.name,
        },
        payment_method_data: {
          billing_details: {
            name: stripedata.name,
          },
        },
      },
    });
  
    if (error) {
      if (error.type === 'card_error' || error.type === 'validation_error') {
        setMessage(error.message);
      } else {
        setMessage('An unexpected error occured.');
      }
      setIsLoading(false);
      return;
    }
    
     else {
      setMessage('Your payment was not successful, please try again.');
    }
  
    setIsLoading(false);
  };
  
  
  

  return (
    <>
      <form id="payment-form" onSubmit={handleSubmit} className="m-auto">
        <PaymentElement id="payment-element" />
        <div className='w-full flex justify-center items-center mt-5'>
          <button disabled={isLoading || !stripe || !elements} id="submit"  className='bg-blue-500 h-12 w-60 rounded-2xl text-white'>
              <span id="button-text">
                  {isLoading ? (
                    <div className="spinner" id="spinner"></div>
                  ) : (
                    'Pay now'
                  )}
              </span>
          </button>
        </div>
        {/* Show any error or success messages */}
        {message && <div id="payment-message">{message}</div>}
      </form>
    </>
  );
}