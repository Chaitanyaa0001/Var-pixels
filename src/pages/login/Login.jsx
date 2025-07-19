import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import InputFieldlogin from '../../components/InputFeildlogin';
import Footer from '../../components/footer/Footer';
 

const Login = () => {
  const [formDatalogin, setFormDatalogin] = useState({
    email: '',
    password: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormDatalogin(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    console.log('Login Data:', formDatalogin);
    // TODO: call your backend API here

    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Navbar />

      <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md">
          {/* Welcome Back Link */}
          <div className="text-center mb-6">
            <button className="text-cyan-500 hover:text-cyan-600 font-medium text-sm flex items-center justify-center gap-1 mx-auto">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Welcome Back
            </button>
          </div>

          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Login to</h1>
            <h2 className="text-3xl font-bold text-blue-600 mb-4">VAR PIXELS</h2>
            <p className="text-gray-600">Access your account and continue your digital journey</p>
          </div>

          {/* Login Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="mb-6 text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Sign In</h3>
              <p className="text-gray-600 text-sm">Enter your credentials to access your account</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <InputFieldlogin
                label="Email"
                type="email"
                name="email"
                value={formDatalogin.email}
                onChange={handleInputChange}
                placeholder="your@email.com"
              />

              <InputFieldlogin
                label="Password"
                type="password"
                name="password"
                value={formDatalogin.password}
                onChange={handleInputChange}
                placeholder="Enter your password"
                showPasswordToggle={true}
                showPassword={showPassword}
                onTogglePassword={togglePasswordVisibility}
              />

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="rememberMe"
                    name="rememberMe"
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-700">
                    Remember me
                  </label>
                </div>
                <div className="text-sm">
                  <a href="#" className="text-blue-600 hover:text-blue-500">
                    Forgot your password?
                  </a>
                </div>
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-cyan-600 hover:to-blue-700 focus:ring-4 focus:ring-blue-300 transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Signing In...' : (
                  <>
                    <svg className="w-5 h-5 mr-2 inline" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Sign In
                  </>
                )}
              </button>
            </form>

            <div className="mt-6 text-center">
              <span className="text-gray-500 text-sm">Don't have an account?</span>
            </div>

            <div className="mt-4">
              <button
                type="button"
                onClick={() => window.location.href = '/signup'}
                className="w-full bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg border border-blue-600 hover:bg-blue-50 focus:ring-4 focus:ring-blue-300 transition-all duration-300"
              >
                Create New Account
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Login;
