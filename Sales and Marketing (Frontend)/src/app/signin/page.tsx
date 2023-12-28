'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const LoginForm: React.FC = () => {

  const router = useRouter()  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:3001/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        // Successful login, handle accordingly
        const data = await response.json();
        console.log('Login successful:', data);

        // Redirect to the user profile page
        router.push(`/profile/${data.id}`);
      } else {
        console.error('Login failed');
      }
    } catch (error) {
      // Handle unexpected errors
      console.error('An unexpected error occurred:', error);
    }
  };

  return (
    <>      
      <div className="max-w-md mx-auto p-4 mt-10"> {/* Add a container for spacing */}
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
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </>
  );
};

export default LoginForm;
