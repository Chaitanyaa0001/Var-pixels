// InputField.jsx
import React from 'react';

const InputField = ({
  id,
  label,
  type = 'text',
  value,
  onChange,
  showToggle,
  show,
  toggle,
}) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-2">
      {label}
    </label>
    <div className="relative">
      <input
        type={showToggle && !show ? 'password' : type}
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        placeholder={label}
        className={`w-full px-4 py-3 ${showToggle ? 'pr-12' : ''} border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors`}
      />
      {showToggle && toggle && (
        <button
          type="button"
          onClick={toggle}
          className="absolute inset-y-0 right-0 pr-3 flex items-center"
        >
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {show ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7s-8.268-2.943-9.542-7z" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242" />
            )}
          </svg>
        </button>
      )}
    </div>
  </div>
);

export default InputField;