import React, { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi'; // Import both FiEye and FiEyeOff
import { Link } from 'react-router';
import OAuth from '../components/OAuth';

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });
  const { email, password } = formData;

  function onChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }

  function onSubmit(e) {
    e.preventDefault();
    // Handle form submission logic here (e.g., API call for sign in)
    console.log('Email:', email);
    console.log('Password:', password);
  }

  return (
    <section>
      <h1 className="text-3xl text-center mt-6">Sign In</h1>
      <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto">
        <div className="md:w-[67%] lg:w-[50%]" mb-12>
          <img
            src="https://images.unsplash.com/photo-1522794338816-ee3a17a00ae8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2V5fGVufDB8fDB8fHww"
            alt="SignIn"
            className="w-full rounded-2xl"
            
          />
        </div>
        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20" >
          <form onSubmit={onSubmit}>
            <div className="mb-4">
              <input
                className="w-full p-2 mt-10 border border-gray-300 rounded-lg"
                type="email"
                placeholder="Email"
                id="email"
                value={email}
                onChange={onChange}
                required
              />
            </div>
            <div className="mb-6 relative">
              <input
                className="w-full p-2 border border-gray-300 rounded-lg"
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                id="password"
                value={password}
                onChange={onChange}
                required
              />
              {/* Position the eye icon in the input field */}
              <div
                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FiEye /> : <FiEyeOff />}
              </div>
              <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg"> 
                <p className="mb-6">Don't have an account? 
                  <Link to="/sign-up" className='text-red-600 hover:text-red-700'> Register</Link>
                </p>
                <p>
                  <Link to="/forgot-password">Forgot Password</Link>
                </p>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-3 rounded-lg"
            >
              Sign In
            </button>
            <div className='flex items-center my-4 before:border-t before:flex-1  before:border-gray-300 after:border-t after:flex-1  after:border-gray-300'>
              <p className='text-center text-sm mt-3 mx-4'>OR</p>
            </div>
            <OAuth />
          </form>
        </div>
      </div>
    </section>
  );
}
