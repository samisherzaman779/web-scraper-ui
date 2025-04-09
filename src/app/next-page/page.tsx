// app/next-page/page.tsx
"use client";

import { useState, useEffect } from "react";

export default function NextPage() {
  const [data, setData] = useState<string | null>(null);

  useEffect(() => {
    // Fetch the extracted data here (for now, we are simulating it)
    const fetchedData = "This is the extracted data from the scraper!";
    setData(fetchedData);
  }, []);

  return (
    <section className="flex justify-center items-center h-screen bg-gray-800">
      <div className="w-3/4 bg-gray-700 p-8 rounded-lg">
        <h1 className="text-center text-4xl font-bold mb-8 text-white">Extracted Data</h1>

        {data ? (
          <div className="text-white">
            <h2 className="text-2xl font-semibold mb-4">Detailed Data:</h2>
            <p>{data}</p>
          </div>
        ) : (
          <p className="text-white">No data found. Please go back and extract data first.</p>
        )}

        {/* Back to Dashboard Button */}
        <div className="mt-6 text-center">
          <button
            onClick={() => window.history.back()} // Go back to previous page (Dashboard)
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    </section>
  );
}
