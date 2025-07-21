import React from 'react';

const Featurecard = ({ title, content, serviceProvided, lines }) => {
  const technologies = title === 'Technologies Used' 
    ? content?.split(' ').filter(tech => tech.trim()) || []
    : [];
    
  const services = lines?.split(',').filter(service => service.trim()) || [];

  return (
    <div className="bg-white rounded-xl shadow-md p-6 my-7 hover:shadow-lg transition">
      <h3 className="text-xl font-semibold text-black mb-3">{title}</h3>

      {/* Show content for non-technology cards, or show technologies as tags */}
      {title !== 'Technologies Used' ? (
        <div className="p-4 rounded-md mb-4">
          <p className="text-gray-700 whitespace-pre-line">{content}</p>
        </div>
      ) : (
        <div className="mb-4">
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech, idx) => (
              <span
                key={idx}
                className="bg-blue-100 text-blue-700 px-3 py-1 text-sm rounded-full border border-blue-300"
              >
                {tech.trim()}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Services Provided section */}
      {serviceProvided && services.length > 0 && (
        <>
          <h4 className="text-lg font-semibold text-blue-600 mb-3">{serviceProvided}</h4>
          <div className="flex flex-wrap gap-2">
            {services.map((service, idx) => (
              <span
                key={idx}
                className="bg-green-100 text-blue-500 px-3 py-1 text-sm rounded-full border border-blue-600"
              >
                {service.trim()}
              </span>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Featurecard;
