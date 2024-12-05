import React, { useState } from 'react';
import type { CarbonFootprint } from '../types';

export const CarbonCalculator = () => {
  const [inputs, setInputs] = useState<CarbonFootprint>({
    electricity: 0,
    carUsage: 0,
    airTravel: 0,
    waterConsumption: 0,
    gasUsage: 0
  });

  const calculateEmissions = () => {
    const annual = {
      electricity: inputs.electricity * 0.85 * 365, // kWh to CO2
      car: inputs.carUsage * 0.2 * 365, // km to CO2
      flights: inputs.airTravel * 90, // per flight average
      water: inputs.waterConsumption * 0.001 * 365,
      gas: inputs.gasUsage * 2.3 * 12
    };

    return Object.values(annual).reduce((a, b) => a + b, 0);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Carbon Footprint Calculator</h2>
      
      <div className="space-y-4">
        {Object.keys(inputs).map((key) => (
          <div key={key} className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              {key.split(/(?=[A-Z])/).join(' ')}:
            </label>
            <input
              type="number"
              value={inputs[key as keyof CarbonFootprint]}
              onChange={(e) => setInputs(prev => ({
                ...prev,
                [key]: parseFloat(e.target.value) || 0
              }))}
              className="input-field"
              placeholder="Enter value"
            />
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-green-50 dark:bg-green-900 rounded-lg">
        <p className="text-lg font-semibold text-green-800 dark:text-green-100">
          Your estimated annual carbon footprint:
          <span className="block text-2xl mt-2">
            {calculateEmissions().toFixed(2)} kg CO2
          </span>
        </p>
      </div>
    </div>
  );
};