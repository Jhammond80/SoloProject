
// import React, { useState } from 'react';
// import { Link, useHistory } from 'react-router-dom';
// import { registerUser } from '../services/RegisterService'; // Import the registerUser function
// import bcrypt from 'bcryptjs';

// const Register = () => {
//     const [username, setUsername] = useState('');
//     const [email, setEmail] = useState('');
//     const [pin, setPin] = useState('');
//     const [confirmPin, setConfirmPin] = useState('');
//     const [errors, setErrors] = useState({});
//     const history = useHistory();

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         if (pin !== confirmPin) {
//             setErrors({ message: 'PINs do not match' });
//             return;
//         }

//         try {
//             const hashedPin = await bcrypt.hash(pin, 10); // Hash the PIN
//             await registerUser(username, email, hashedPin); // Use registerUser with hashed PIN
//             history.push('/home'); // Redirect to /home after successful registration
//         } catch (error) {
//             console.error('Error registering user:', error);
//             if (error.response && error.response.data && error.response.data.errors) {
//                 setErrors(error.response.data.errors);
//             } else {
//                 setErrors({ message: 'An error occurred.' });
//             }
//         }
//     };


//     return (
//         <div className="container mx-auto py-8">
//             <h1 className="text-3xl font-bold mb-8">Register</h1>
//             <form onSubmit={handleSubmit} className="mb-4">
//                 <div className="mb-4">
//                     <label htmlFor="username" className="block text-lg font-medium">Username</label>
//                     <input id="username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" className="border border-gray-300 rounded-md px-3 py-2 w-full" />
//                     {errors.username && <p style={{ color: 'red' }}>{errors.username.message}</p>}
//                 </div>
//                 <div className="mb-4">
//                     <label htmlFor="email" className="block text-lg font-medium">Email</label>
//                     <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="border border-gray-300 rounded-md px-3 py-2 w-full" />
//                     {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
//                 </div>
//                 <div className="mb-4">
//                     <label htmlFor="pin" className="block text-lg font-medium">PIN</label>
//                     <input id="pin" type="password" value={pin} onChange={(e) => setPin(e.target.value)} placeholder="PIN" className="border border-gray-300 rounded-md px-3 py-2 w-full" />
//                     {errors.pin && <p style={{ color: 'red' }}>{errors.pin.message}</p>}
//                 </div>
//                 <div className="mb-4">
//                     <label htmlFor="confirmPin" className="block text-lg font-medium">Confirm PIN</label>
//                     <input id="confirmPin" type="password" value={confirmPin} onChange={(e) => setConfirmPin(e.target.value)} placeholder="Confirm PIN" className="border border-gray-300 rounded-md px-3 py-2 w-full" />
//                     {errors.confirmPin && <p style={{ color: 'red' }}>{errors.confirmPin.message}</p>}
//                 </div>
//                 {errors.message && <p style={{ color: 'red' }}>{errors.message}</p>}
//                 <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Register</button>
//             </form>
//             <Link to="/login" className="text-blue-500 hover:underline">Already have an account? Login here</Link>
//         </div>
//     );
// };

// export default Register;
