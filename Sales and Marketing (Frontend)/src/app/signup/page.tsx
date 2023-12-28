'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const SignupForm: React.FC = () => {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try {
      const response = await fetch('http://localhost:3001/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Signup successful:', data);

        router.push(`/signin`);
      } else {
        console.error('Signup failed');
      }
    } catch (error) {
      console.error('An unexpected error occurred:', error);
    }
  };

  return (
    <>
      <div className="max-w-md mx-auto p-4 mt-10">
        <label className="block font-medium text-gray-700 mb-2">
          Name
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </label>
        <label className="block font-medium text-gray-700 mb-2">
          Email
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </label>
        <label className="block font-medium text-gray-700 mb-2">
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </label>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleSignup}
        >
          Signup
        </button>
      </div>
    </>
  );
  

  // return (
  //   <>
  //     <label>
  //       Name:
  //       <input type="text" value={name} onChange={(e) => setName(e.target.value)} style={{ color: 'black' }} />
  //     </label>
  //     <label>
  //       Email:
  //       <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ color: 'black' }} />
  //     </label>
  //     <label>
  //       Password:
  //       <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ color: 'black' }} />
  //     </label>
  //     <button onClick={handleSignup}>Signup</button>
  //   </>
  // );
};

export default SignupForm;
