import React, { useContext, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

const Verify = () => {
  const { navigate, token, backendUrl } = useContext(ShopContext);
  const [searchParams] = useSearchParams();

  const success = searchParams.get('success');
  const orderId = searchParams.get('orderId');

  const verifyPayment = async () => {
    try {
      if (!token) return;

      const response = await axios.post(
        backendUrl + '/api/order/verifyStripe',
        { success, orderId, userId: localStorage.getItem("userId") },
        { headers: { token } }
      );

      if (response.data.success) {
        toast.success("Payment successful and order placed!");
        navigate('/orders');
      } else {
        toast.warn("Payment was not successful. Order marked as pending.");
        navigate('/orders');
      }
    } catch (error) {
      console.log(error);
      toast.error("Payment verification failed.");
    }
  };

  useEffect(() => {
    verifyPayment();
  }, [token]);

  return <div></div>;
};

export default Verify;
