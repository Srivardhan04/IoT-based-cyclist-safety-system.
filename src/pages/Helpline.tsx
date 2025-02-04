import React from 'react';
import { Phone, MessageSquare, Clock, AlertTriangle } from 'lucide-react';

const Helpline = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">24/7 Emergency Support</h1>
          <p className="text-xl text-gray-600">We're here to help you stay safe on your journey</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <EmergencyCard
            icon={<Phone className="h-8 w-8 text-red-500" />}
            title="Emergency Hotline"
            description="For immediate assistance in case of accidents or emergencies"
            action="Call 911"
            urgent
          />
          <EmergencyCard
            icon={<MessageSquare className="h-8 w-8 text-blue-500" />}
            title="Technical Support"
            description="Having issues with your IoT device? Our tech team is here to help"
            action="Chat Now"
          />
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">Common Emergency Scenarios</h2>
          <div className="space-y-4">
            <EmergencyScenario
              title="Device Malfunction"
              description="If your device stops working or shows incorrect readings"
              steps={[
                "Check if the device is properly charged",
                "Restart the device",
                "Contact technical support if issue persists"
              ]}
            />
            <EmergencyScenario
              title="Accident Response"
              description="In case of a cycling accident"
              steps={[
                "Stay calm and assess the situation",
                "Call emergency services if needed",
                "Use the SOS button on your device",
                "Wait for help to arrive"
              ]}
            />
          </div>
        </div>

        <div className="bg-blue-600 text-white rounded-lg p-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h3 className="text-2xl font-bold mb-2">Need Immediate Assistance?</h3>
              <p className="text-blue-100">Our support team is available 24/7 to help you</p>
            </div>
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const EmergencyCard = ({ icon, title, description, action, urgent = false }) => (
  <div className={`bg-white rounded-lg shadow-lg p-6 ${urgent ? 'border-2 border-red-500' : ''}`}>
    <div className="flex items-center mb-4">
      {icon}
      <h3 className="text-xl font-semibold ml-3">{title}</h3>
    </div>
    <p className="text-gray-600 mb-6">{description}</p>
    <button
      className={`w-full py-2 px-4 rounded-lg font-semibold ${
        urgent
          ? 'bg-red-500 text-white hover:bg-red-600'
          : 'bg-blue-600 text-white hover:bg-blue-700'
      } transition-colors`}
    >
      {action}
    </button>
  </div>
);

const EmergencyScenario = ({ title, description, steps }) => (
  <div className="border-l-4 border-blue-600 pl-4">
    <h4 className="text-lg font-semibold mb-2">{title}</h4>
    <p className="text-gray-600 mb-3">{description}</p>
    <ol className="list-decimal list-inside space-y-1">
      {steps.map((step, index) => (
        <li key={index} className="text-gray-700">{step}</li>
      ))}
    </ol>
  </div>
);

export default Helpline;