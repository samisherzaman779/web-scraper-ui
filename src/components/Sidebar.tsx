// components/Sidebar.tsx
"use client";

export default function Sidebar() {
  return (
    <div className="w-1/4 bg-gray-800 p-4 text-white">
      <h2 className="text-xl font-semibold mb-4">File Input</h2>
      <input type="file" className="mb-4 p-2 border rounded-md" />
      <button className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Run Scraper</button>
    </div>
  );
}
