"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // For navigating to the next page

// import Sidebar from "../../components/Sidebar";
// import DashboardContent from "../../components/DashboardContent";

export default function Dashboard() {
  const [status, setStatus] = useState("Waiting...");
  const [file, setFile] = useState<File | null>(null);
  const router = useRouter();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const runUrlScraper = async () => {
    setStatus("Running URL Scraper...");
    const res = await fetch("http://localhost:5000/run-url-scraper", {
      method: "POST",
    });
    const data = await res.json();
    setStatus(data.message);
  };

  const stopScraper = async () => {
    setStatus("Stopping Scraper...");
    const res = await fetch("http://localhost:5000/stop-scraper", {
      method: "POST",
    });
    const data = await res.json();
    setStatus(data.message);
  };

  const runMainScraper = async () => {
    setStatus("Running Main Scraper...");
    const res = await fetch("http://localhost:5000/run-main-scraper", {
      method: "POST",
    });
    const data = await res.json();
    setStatus(data.message);
  };

  const handleExtractData = () => {
    if (file) {
      // Integrate your scraper logic here to extract data
      // For now, assuming we just display a message for demo purposes
      setStatus("Extracting data from the file...");
    }
  };

  const handleNextPage = () => {
    // Navigate to the next page where data can be displayed in detail
    router.push("/next-page"); // Replace with the actual route where you display data
  };

  return (
    <section className="flex">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-800 p-4 text-white">
        <h2 className="text-lg font-bold mb-4">File Upload</h2>
        <input
          type="file"
          onChange={handleFileChange}
          className="my-4 p-2 border border-gray-600 rounded-md"
        />
        <button
          onClick={handleExtractData}
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700"
          style={{ position: "relative", paddingBottom: "5px" }}
        >
          Extract Data
          
        </button>
        <br />
        

        <div className="mt-6 space-y-4">
          {/* Scraper Control Buttons */}
          <button
            onClick={runUrlScraper}
            className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700"
          >
            Start URL Scraper
          </button>
          <button
            onClick={stopScraper}
            className="w-full bg-red-600 text-white p-2 rounded-md hover:bg-red-700"
          >
            Stop Scraper
          </button>
          <button
            onClick={runMainScraper}
            className="w-full bg-green-600 text-white p-2 rounded-md hover:bg-green-700"
          >
            Start Main Scraper
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-3/4 p-4">
        <h1 className="text-center text-4xl font-bold mb-8">
          Web Scraper Dashboard
        </h1>

        {/* Status Display */}
        <div className="mt-6 p-4 bg-gray-700 shadow-md rounded-lg w-full text-center">
          <h2 className="text-xl font-semibold">Status:</h2>
          <p>{status}</p>
        </div>

        {/* Next Page Button */}
        {status.includes("data") && (
          <div className="mt-6">
            <button
              onClick={handleNextPage}
              className="w-full bg-green-500 text-white p-2 rounded-md hover:bg-green-700"
            >
              Go to Next Page
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
