import Link from "next/link";

const UserNotAuthenticated = () => {
  return (
    <main className="min-w-screen min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-center text-4xl font-bold">
        Only Logged in users can view this page
      </h1>
      <Link
        href="/signIn"
        className="mt-8 px-2 py-1 text-3xl font-semibold bg-white hover:bg-slate-200 text-black rounded"
      >
        Login
      </Link>
    </main>
  );
};

export default UserNotAuthenticated;
