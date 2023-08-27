"use client";

import { useAuthContext } from "@/context/authContext";
import Link from "next/link";

export default function Home() {
  const { user } = useAuthContext();
  return (
    <main className="min-h-screen flex  flex-col items-center justify-center p-24">
      <div className="w-2/3 flex flex-col gap-2 justify-center items-center text-[#fffff3]">
        <h1 className="text-6xl font-bold text-[#f3392c]">Book Library</h1>
        <h2 className="text-xl text-center">
          Your Personal Literary Haven: Organize, Explore, and Cherish Your
          Bookshelf with Our Library Application
        </h2>
        <div className="mt-4 flex flex-col gap-4 justify-center text-2xl">
          {user ? (
            <>
              <Link
                href="/profile"
                className="px-2 py-1 bg-[#f3392c] hover:bg-red-700 rounded"
              >
                My Profile
              </Link>
            </>
          ) : (
            <>
              <Link
                href="/signIn"
                className="px-2 py-1 flex justify-center bg-[#f3392c] hover:bg-red-700 rounded"
              >
                Login
              </Link>
              <Link
                href="/signUp"
                className="px-2 py-1 flex justify-center bg-[#f3392c] hover:bg-red-700 rounded"
              >
                Create Account
              </Link>
            </>
          )}
        </div>
      </div>
    </main>
  );
}
