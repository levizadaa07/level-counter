'use client';

import { useState } from "react";

export default function Home() {
  const [level, setLevel] = useState(0);

  function getNivel(level) {
    if (level <= 10) return 'Beginner';
    if (level <= 50) return 'Intermediary';
    return 'Advanced';
  }

  return (
    <div className="flex flex-col min-h-screen items-center justify-center gap-6 bg-gray-50">
      
      <h1 className="text-5xl font-extrabold text-gray-800">
        Level: {level}
      </h1>

      <h2 className="text-3xl font-semibold text-gray-600">
        {getNivel(level)}
      </h2>

      <div className="flex gap-4">
        <button 
          onClick={() => setLevel(level + 1)}
          className="bg-gray-800 text-white font-medium py-2 px-6 rounded-lg hover:bg-gray-700 transition-colors"
        >
          Começar
        </button>

        <button 
          onClick={() => setLevel(0)}
          className="bg-gray-200 text-gray-800 font-medium py-2 px-6 rounded-lg hover:bg-gray-300 transition-colors"
        >
          Resetar
        </button>
      </div>

    </div>
  );
}
