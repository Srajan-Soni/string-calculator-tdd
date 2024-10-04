import React, { useState } from 'react';
import { add } from '../functionality/add';

const StringCalculator = () => {
    const [value, setValue] = useState("");
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);
  
    const calculate = () => {
      try {
        setError(null);
        const sum = add(value);
        setResult(sum);
      } catch (err) {
        setError(err.message);
        setResult(null);
      }
    };
  
    return (
      <div className="w-full md:w-1/3 flex flex-col items-center mt-10">
        <div className="flex flex-col gap-4 w-full shadow-lg p-6 md:p-10 bg-white rounded-lg">
          <h2 className="font-bold text-xl text-center mb-4">
            Enter String of Numbers
          </h2>

      
          <input
            type="text"
            placeholder="Enter numbers"
            className="w-full border border-blue-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />

   
          <button
            className="w-1/2 mx-auto bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 "
            onClick={calculate}
          >
            Calculate
          </button>

          {result !== null && (
            <div className="mt-4">
              <h2 className="text-xl font-bold text-center">Result: {result}</h2>
            </div>
          )}

          {error && (
            <div className="mt-4 text-red-600">
              <h2 className="text-lg font-bold text-center">Error: {error}</h2>
            </div>
          )}
        </div>
      </div>
    );
};

export default StringCalculator;
