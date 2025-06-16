import React from 'react';

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Countdown to Resignation</h1>
      <div className="text-6xl font-semibold mb-12 text-center">
        {/* Placeholder for countdown timer */}
        00:00:00
      </div>
      <div className="w-full max-w-xl bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Farewell Messages</h2>
        {/* Placeholder for comments/messages section */}
        <div className="h-64 border border-gray-300 rounded-lg p-4 overflow-y-auto mb-4">
          {/* Messages will appear here */}
        </div>
        <form className="flex space-x-2">
          <input
            type="text"
            placeholder="Leave a message..."
            className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
