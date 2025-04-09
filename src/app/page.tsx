import Link from "next/link";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center h-screen text-center bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <h1 className="text-5xl font-bold mb-4">Welcome to Web Scraper</h1>
      <p className="text-lg mb-6">Automate your web scraping tasks with ease.</p>
      <Link href="/dashboard">
        <button className="px-6 py-3 bg-white text-blue-600 rounded-lg text-lg hover:bg-gray-200 transition">
          Get Started
        </button>
      </Link>
    </section>
  );
}
