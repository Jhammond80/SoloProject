
import React, { useState } from 'react';
import '../styles/PinKeyPad.css'




const PinKeypad = ({ onComplete }) => {
  const [pin, setPin] = useState('');
  const [email, setEmail] = useState('');

  const handleKeyClick = (key) => {
    if (pin.length < 4) {
      setPin(pin + key);
    }
  };

  const handleDelete = () => {
    setPin(pin.slice(0, -1));
  };

  const handleSubmit = () => {
    if (pin.length === 4 && email.trim() !== '') {
      onComplete(email, pin);
    }
  };

  return (
  <div className="flex flex-col items-center justify-center h-screen">
  <input
    className="bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 mb-4 w-80"
    type="email"
    placeholder="Email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
  />
  <div className="bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 mb-4 w-80">
    <input
      className="w-full h-full"
      type="number"
      value={pin}
      readOnly
    />
  </div>
  <div className="grid grid-cols-3 gap-4">
    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((key) => (
      <button
        key={key}
        className="bg-gray-100 border border-gray-300 rounded-lg px-4 py-2"
        onClick={() => handleKeyClick(key)}
      >
        {key}
      </button>
    ))}
    <button
      className="bg-red-500 text-white font-bold border border-red-600 rounded-lg px-4 py-2"
      onClick={handleDelete}
    >
      Delete
    </button>
  </div>
  <button
    className="bg-blue-500 text-white font-bold border border-blue-600 rounded-lg px-4 py-2 mt-4"
    onClick={handleSubmit}
  >
    Submit
  </button>
</div>
  )
};

export default PinKeypad;


