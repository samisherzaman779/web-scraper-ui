"use client";

// components/DashboardContent.tsx
import { FC } from "react";

interface DashboardContentProps {
  status: string;
  runUrlScraper: () => void;
  stopScraper: () => void;
  runMainScraper: () => void;
}

const DashboardContent: FC<DashboardContentProps> = ({ status, runUrlScraper, stopScraper, runMainScraper }) => {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">Web Scraper Dashboard</h1>

      <div className="flex space-x-4 mb-4">
        <button onClick={runUrlScraper} className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Start URL Scraper
        </button>
        <button onClick={stopScraper} className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700">
          Stop Scraper
        </button>
        <button onClick={runMainScraper} className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700">
          Start Main Scraper
        </button>
      </div>

      {/* Status Display */}
      <div className="mt-6 p-4 bg-gray-700 shadow-md rounded-lg w-1/2 text-center">
        <h2 className="text-xl font-semibold">Status:</h2>
        <p>{status}</p>
      </div>
    </div>
  );
};

export default DashboardContent;
