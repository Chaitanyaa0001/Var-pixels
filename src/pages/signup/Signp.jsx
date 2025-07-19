import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import InputField from '../../components/InputFeild';

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', password: '', confirmPassword: '', agreeToTerms: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleInputChange = ({ target: { name, value, type, checked } }) => {
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
   console.log(formData);
   setFormData({
        firstName: '', lastName: '', email: '', password: '', confirmPassword: '', agreeToTerms: false

   })
   
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-50">
      <Navbar />
      <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Sign Up to <span className="text-blue-600">VAR PIXELS</span></h1>
            <p className="text-gray-600">Create your account and start your digital journey</p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8 space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <InputField id="firstName" label="First Name" value={formData.firstName} onChange={handleInputChange} />
              <InputField id="lastName" label="Last Name" value={formData.lastName} onChange={handleInputChange} />
            </div>
            <InputField id="email" label="Email" type="email" value={formData.email} onChange={handleInputChange} />
            <InputField id="password" label="Password" value={formData.password} onChange={handleInputChange} showToggle show={showPassword} toggle={() => setShowPassword(!showPassword)} />
            <InputField id="confirmPassword" label="Confirm Password" value={formData.confirmPassword} onChange={handleInputChange} showToggle show={showConfirmPassword} toggle={() => setShowConfirmPassword(!showConfirmPassword)} />
            <div className="flex items-start">
              <input type="checkbox" id="agreeToTerms" name="agreeToTerms" checked={formData.agreeToTerms} onChange={handleInputChange} className="mt-1 h-4 w-4 text-blue-600" />
              <label htmlFor="agreeToTerms" className="ml-3 text-sm text-gray-700">I agree to the <a href="#" className="text-blue-600 hover:text-blue-500">Terms</a> and <a href="#" className="text-blue-600 hover:text-blue-500">Privacy Policy</a></label>
            </div>
            <button type="submit"  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-lg hover:from-cyan-600 hover:to-blue-700 disabled:opacity-70">
               Sign Up
            </button>
            <div className="text-center text-sm text-gray-500">Already have an account?</div>
            <button type="button" onClick={() => window.location.href = '/login'} className="w-full mt-2 text-blue-600 border border-blue-600 py-3 rounded-lg hover:bg-blue-50">
              Sign In to Existing Account
            </button>
          </form>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Signup;