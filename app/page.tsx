"use client";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-md w-full space-y-8 text-center">
        <div>
          <h1 className="text-6xl font-bold text-gray-900 mb-4">Welcome</h1>
          <p className="text-xl text-gray-600 mb-8">
            This is a public page that anyone can see
          </p>
        </div>
        <div className="space-y-4">
          <a
            href="/secret"
            className="block w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Go to Secret Page 🔒
          </a>
          <p className="text-sm text-gray-500">(requires authentication)</p>
        </div>
      </div>
    </div>
  );
}
// Trigger deployment test
