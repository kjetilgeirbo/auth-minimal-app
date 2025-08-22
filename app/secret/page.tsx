"use client";

import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

export default function SecretPage() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="max-w-md w-full space-y-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                🔒 This is secret
              </h1>
              <p className="text-gray-600 mb-2">
                Welcome, {user?.signInDetails?.loginId || user?.username}!
              </p>
              <p className="text-sm text-gray-500 mb-8">
                You are viewing a protected page.
              </p>
              <div className="space-y-4">
                <button
                  onClick={signOut}
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  Sign out
                </button>
                <a
                  href="/"
                  className="block w-full text-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Back to Home
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </Authenticator>
  );
}
