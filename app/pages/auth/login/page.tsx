'use client';
import React, {  useState } from 'react';
import LoginInputFields from '../../../../components/authpageComp/logininputFields';
import Buttons from '../../../../components/authpageComp/loginButton';
import { useAuth } from '../../../../context/AuthContext';
import { useRouter } from 'next/navigation';

export default function Login() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const { setToken ,token  ,userdata} = useAuth();

  const [error, setError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("=====================================")
    console.log(token)
    console.log(userdata)
    console.log("=====================================")

    const { email, password } = formData;
    // console.log('https://dztabib.onrender.com/api/auth/login/');
    if (!email || !password) {
      setError('Please fill out both fields.');
      return;
    }
    setError('');
    try { 
      console.log("URL");
      console.log(process.env.URL);
      const response = await fetch(`https://dztabib.onrender.com/api/auth/login/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();
      console.log('Response from server:', data);
      if (data.success) {
        setToken(data.key); // Store token in memory
        router.push('/dashDoc/appointments'); // Redirect to home page
        // Handle successful login (e.g., redirect to another page)
      } else {
        setError('Invalid email or password.');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="mx-auto w-full flex flex-col justify-center items-center py-10 px-4 ">
      <div className="text-[40px] font-bold text-gray-800 mb-4">Login</div>
      <div className="text-[20px] text-gray-600 mb-8">Enter your credentials</div>

      {/* Form Section */}
      <form
        onSubmit={handleSubmit}
        className="w-full  bg-white rounded-lg p-6 space-y-6"
      >
        {/* Input Fields for Login */}
        <LoginInputFields 
          formData={formData} 
          handleInputChange={handleInputChange}
        />

        {/* Error Message */}
        {error && <div className="text-red-500 text-sm">{error}</div>}

        {/* Buttons (e.g., submit button) */}
        <Buttons />
      </form>
      <div className="text-[20px] text-center text-gray-600 mt-4">
        Dont have an account?{' '}
        <a href="/pages/auth/signup" className="text-blue-500 hover:underline">
          Sign up
        </a>
      </div>
    </div>
  );
}
