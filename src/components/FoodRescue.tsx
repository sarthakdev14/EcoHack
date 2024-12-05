import React from 'react';
import { MapPin, Clock, Utensils } from 'lucide-react';
import type { Restaurant } from '../types';

export const FoodRescue = () => {
  const restaurants: Restaurant[] = [
    {
      id: '1',
      name: 'Green Bistro',
      location: '123 Eco Street',
      availableFood: [
        { id: '1', name: 'Fresh Salads', quantity: 5, expiryTime: '2 hours' },
        { id: '2', name: 'Sandwiches', quantity: 10, expiryTime: '3 hours' }
      ]
    },
    {
      id: '2',
      name: 'Sustainable Kitchen',
      location: '456 Earth Avenue',
      availableFood: [
        { id: '3', name: 'Vegetable Soup', quantity: 8, expiryTime: '4 hours' },
        { id: '4', name: 'Fresh Bread', quantity: 15, expiryTime: '6 hours' }
      ]
    },
    {
      id: '3',
      name: 'Eco Cafe',
      location: '789 Nature Boulevard',
      availableFood: [
        { id: '5', name: 'Fruit Platters', quantity: 6, expiryTime: '2 hours' },
        { id: '6', name: 'Pastries', quantity: 12, expiryTime: '5 hours' }
      ]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Food Rescue Initiative
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Help reduce food waste by connecting restaurants with excess food to nearby shelters
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {restaurants.map((restaurant) => (
          <div key={restaurant.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {restaurant.name}
                </h3>
                <Utensils className="w-6 h-6 text-green-500" />
              </div>
              
              <div className="flex items-center text-gray-600 dark:text-gray-300 mb-6">
                <MapPin className="w-4 h-4 mr-2" />
                <span>{restaurant.location}</span>
              </div>

              <div className="space-y-4">
                {restaurant.availableFood.map((food) => (
                  <div key={food.id} className="border-t pt-4">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-900 dark:text-white">{food.name}</span>
                      <span className="text-sm bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 px-2 py-1 rounded">
                        Qty: {food.quantity}
                      </span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mt-2">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>Expires in: {food.expiryTime}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 bg-gray-50 dark:bg-gray-700">
              <button className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition-colors flex items-center justify-center">
                <span>Request Food</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};