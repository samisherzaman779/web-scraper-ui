"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

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
      setStatus("Extracting data from the file...");
    }
  };

  const handleNextPage = () => {
    router.push("/next-page");
  };

  const downloadExtractedFile = async () => {
    setStatus("Preparing file for download...");
    try {
      const response = await fetch("http://localhost:5000/extracted-urls.txt");
      const blob = await response.blob();

      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "extracted-urls.txt";
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);

      setStatus("File downloaded successfully!");
    } catch (error) {
      console.error("Download error:", error);
      setStatus("Failed to download file.");
    }
  };

  return (
    <section className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-800 p-6 flex flex-col justify-between text-white">
        {/* Top Buttons */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold mb-6 text-center">
            Scraper Controls
          </h2>

          <button
            onClick={runUrlScraper}
            className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700"
          >
            Start URL Scraper
          </button>

          <button
            onClick={downloadExtractedFile}
            className="w-full bg-purple-600 text-white p-2 rounded-md hover:bg-purple-700"
          >
            Download URLs (.txt)
          </button>

          <button
            onClick={runMainScraper}
            className="w-full bg-green-600 text-white p-2 rounded-md hover:bg-green-700"
          >
            Start Main Scraper
          </button>

          <button
            onClick={stopScraper}
            className="w-full bg-red-600 text-white p-2 rounded-md hover:bg-red-700"
          >
            Stop Scraper
          </button>
        </div>

        {/* Bottom File Upload Section */}
        <div className="mb-50">
          <h2 className="text-lg font-bold mb-2">Upload File</h2>

          <input
            type="file"
            onChange={handleFileChange}
            className="w-full my-2 p-2 border border-gray-600 rounded-md bg-gray-700 text-white"
          />

          <button
            onClick={handleExtractData}
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700 mt-2"
          >
            Extract Data
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-3/4 p-8 bg-gray-900 min-h-screen">
        <h1 className="text-center text-4xl font-bold mb-8">
          Web Scraper Dashboard
        </h1>

        {/* Status Display */}
        <div className="mt-6 p-6 bg-gray-600 shadow-lg rounded-lg w-full text-center">
          <h2 className="text-2xl font-semibold mb-4">Status:</h2>
          <p className="text-gray-800">{status}</p>
        </div>

        {/* Next Page Button */}
        {status.includes("data") && (
          <div className="mt-10">
            <button
              onClick={handleNextPage}
              className="w-full bg-green-500 text-white p-3 rounded-md hover:bg-green-700"
            >
              Go to Next Page
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
