import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-8">Sales and Marketing</h1>

        <img
          src="/landing.png" 
          alt="Landing Page Image"
          className="max-w-full rounded-md shadow-lg mb-8"
        />

        <div className="flex space-x-4 justify-center">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-700">
            <Link href="/users">Users</Link>
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-700">
            <Link href="/signin">Sign In</Link>
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-700">
            <Link href="/signup">Sign Up</Link>
          </button>
        </div>
      </div>
    </main>
  );
}
