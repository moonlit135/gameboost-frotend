"use client";
import React, { useState, useEffect } from 'react';
import { FaTimes, FaArrowLeft, FaCheckCircle, FaTimesCircle, FaQrcode } from 'react-icons/fa';
import Image from 'next/image';
import { useModal } from '../context/ModalContext';

const AddMoneyModal = () => {
  const {
    isAddMoneyOpen: isOpen,
    closeAddMoney: onClose,
    step,
    setStep,
    amount,
    setAmount,
    paymentMethod,
    setPaymentMethod,
    isProcessing,
    setIsProcessing,
    showCancelConfirm,
    handleCancelConfirm
  } = useModal();
  
  const [isSuccess, setIsSuccess] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState('');
  
  // UPI ID for QR code
  const upiId = 'your-upi-id@example.com';
  
  // Generate UPI payment link
  const generateUpiLink = (amount) => {
    return `upi://pay?pa=${encodeURIComponent(upiId)}&pn=Credimi&am=${amount}&cu=INR`;
  };
  
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${generateUpiLink(amount)}`;

  const handleAmountSubmit = (e) => {
    e.preventDefault();
    if (amount) {
      setStep(2);
    }
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    if (selectedPayment) {
      // Simulate payment processing
      setIsProcessing(true);
      setTimeout(() => {
        setIsProcessing(false);
        setIsSuccess(true);
        setStep(3);
      }, 1500);
    }
  };

  const handleClose = () => {
    if (step > 1) {
      handleCancelConfirm(true); // Show cancel confirmation
    } else {
      onClose();
    }
  };

  const handleCancel = () => {
    setShowCancelConfirm(true);
  };


  if (!isOpen) return null;

  // Cancel confirmation dialog
  if (showCancelConfirm) {
    return (
      <div className="fixed inset-0 flex items-center justify-center z-[102] p-4 pointer-events-none">
        <div className="bg-white rounded-2xl w-full max-w-xs overflow-hidden shadow-2xl border border-gray-200 z-[103] pointer-events-auto">
          <div className="p-4 text-center">
            <h3 className="text-lg font-medium mb-3">Cancel Transaction?</h3>
            <p className="text-gray-600 mb-4">Are you sure you want to cancel this transaction?</p>
            
            <div className="flex space-x-3">
              <button
                onClick={() => handleCancelConfirm(false)}
                className="flex-1 py-2 text-sm border border-gray-300 rounded-lg font-medium hover:bg-gray-50"
              >
                No, Continue
              </button>
              <button
                onClick={() => handleCancelConfirm(true)}
                className="flex-1 py-2 text-sm bg-red-600 text-white rounded-lg font-medium hover:bg-red-700"
              >
                Yes, Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 flex items-start justify-center z-[100] p-4 pt-20 pointer-events-none">
      <div className="bg-white rounded-2xl w-full max-w-sm overflow-hidden shadow-2xl border border-gray-200 z-[101] pointer-events-auto">
        {/* Header */}
        <div className="bg-green-600 p-4 flex items-center justify-between">
          {step > 1 ? (
            <button 
              onClick={() => setStep(step - 1)}
              className="text-white"
            >
              <FaArrowLeft size={20} />
            </button>
          ) : (
            <div className="w-5"></div> // Empty div for spacing
          )}
          
          <h2 className="text-white font-bold text-xl">
            {step === 1 ? 'Add Money' : 'Payment Method'}
          </h2>
          
          <button 
            onClick={handleClose}
            className="text-white"
          >
            <FaTimes size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-4">
          {step === 1 && (
            <form onSubmit={handleAmountSubmit}>
              <div className="mb-4 px-4">
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Enter Amount
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₹</span>
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full pl-8 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                    placeholder="0.00"
                    min="1"
                    required
                  />
                </div>
              </div>
              <div className="px-4 pb-4">
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-2 text-sm rounded-lg font-medium hover:bg-green-700 transition-colors"
                >
                  Continue
                </button>
              </div>
            </form>
          )}

          {step === 2 && !isSuccess && (
            <div>
              <div className="text-center mb-4 px-4">
                <div className="inline-block">
                  <div className="bg-blue-50 p-2 rounded-lg mb-3 inline-block">
                    <FaQrcode className="text-blue-500 text-4xl mx-auto" />
                  </div>
                  <p className="text-gray-700 text-sm mb-1">Scan QR Code to Pay</p>
                  <p className="text-xl font-bold mb-2">₹{amount || '0.00'}</p>
                  
                  <div className="border border-gray-200 p-2 rounded-lg inline-block mb-3">
                    <Image 
                      src={qrCodeUrl}
                      alt="UPI QR Code"
                      width={160}
                      height={160}
                      className="mx-auto"
                    />
                  </div>
                  
                  <div className="bg-gray-50 p-2 rounded-lg text-xs mb-3">
                    <p className="text-gray-600">UPI ID: {upiId}</p>
                    <p className="text-gray-500 text-xs mt-1">Amount will be added after confirmation</p>
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-3 px-4 pb-4">
                <button
                  type="button"
                  onClick={handleCancel}
                  className="flex-1 py-2 text-sm border border-gray-300 rounded-lg font-medium hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handlePaymentSubmit}
                  className="flex-1 py-2 text-sm bg-green-600 text-white rounded-lg font-medium hover:bg-green-700"
                >
                  Pay Now
                </button>
              </div>
            </div>
          )}

          {isSuccess && (
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <FaCheckCircle className="text-green-500 text-2xl" />
              </div>
              <h3 className="text-lg font-medium mb-1">Transaction Successful!</h3>
              <p className="text-gray-600 text-sm mb-4">₹{amount} has been added to your wallet.</p>
              <button
                onClick={handleClose}
                className="w-1/2 mx-auto bg-green-600 text-white py-2 text-sm rounded-lg font-medium hover:bg-green-700 transition-colors"
              >
                Done
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddMoneyModal;
