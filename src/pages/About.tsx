import React from 'react';
import { Users, Leaf, Heart } from 'lucide-react';

export const About = () => {
  const features = [
    {
      icon: <Users className="w-8 h-8 text-green-500" />,
      title: "Community Driven",
      description: "Bringing together restaurants, shelters, and volunteers to create meaningful impact."
    },
    {
      icon: <Leaf className="w-8 h-8 text-green-500" />,
      title: "Eco-Friendly",
      description: "Reducing food waste while helping the environment and those in need."
    },
    {
      icon: <Heart className="w-8 h-8 text-green-500" />,
      title: "Social Impact",
      description: "Making a difference in local communities through sustainable food distribution."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          About EcoHack
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Empowering communities through sustainable food solutions
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {features.map((feature, index) => (
          <div key={index} className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
            <div className="inline-block p-3 bg-green-50 dark:bg-green-900 rounded-full mb-4">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      <div className="bg-green-50 dark:bg-gray-800 rounded-lg p-8 mb-16">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Our Mission
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          At EcoHack, we're committed to creating innovative solutions for sustainable agriculture and food distribution. Our platform connects restaurants with excess food to nearby shelters, reducing waste and helping those in need.
        </p>
        <p className="text-gray-600 dark:text-gray-300">
          Through our carbon footprint calculator and food rescue initiative, we empower individuals and businesses to make environmentally conscious decisions and contribute to a more sustainable future.
        </p>
      </div>
    </div>
  );
};