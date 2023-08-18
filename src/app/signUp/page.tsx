"use client";

import signUp from "@/firebase/auth/signup";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, useState } from "react";

export default function SignUp() {
  const [data, setData] = useState<{
    username: string;
    email: string;
    password: string;
  }>({} as { username: string; email: string; password: string });
  const router = useRouter();

  const handleForm = async (event: React.FormEvent) => {
    event.preventDefault();

    const { result, error } = await signUp(data);
    if (error) {
      return console.log(error);
    }
    console.log(result);
    return router.push("/profile");
  };

  return (
    <main className="min-w-screen min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-center text-4xl font-bold">SignUp</h1>
      <form onSubmit={handleForm} className="mt-8 flex flex-col gap-2 text-xl">
        <input
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setData((prevdata) => ({ ...prevdata, username: e.target.value }))
          }
          type="text"
          name="username"
          id="username"
          placeholder="Username - ex: test_me"
          className="px-2 py-1 text-black font-semibold rounded"
        />
        <input
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setData((prevdata) => ({ ...prevdata, email: e.target.value }))
          }
          type="email"
          name="email"
          id="email"
          placeholder="E-mail - ex: test@mail.com"
          className="px-2 py-1 text-black font-semibold rounded"
        />
        <input
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setData((prevdata) => ({ ...prevdata, password: e.target.value }))
          }
          type="password"
          name="password"
          id="password"
          placeholder="Password goes here"
          className="px-2 py-1 text-black font-semibold rounded"
        />
        <div className="flex justify-center gap-2 font-semibold">
          <button className="px-2 py-1 bg-white hover:bg-slate-200 text-black rounded">
            Submit
          </button>
          <button className="px-2 py-1 bg-white hover:bg-slate-200 text-black rounded">
            Cancel
          </button>
        </div>
      </form>
    </main>
  );
}
