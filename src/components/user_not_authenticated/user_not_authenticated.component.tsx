import Link from "next/link";

const UserNotAuthenticated = () => {
  return (
    <main className="min-w-screen min-h-screen p-4 flex flex-col items-center justify-center text-[#f3392c]">
      <h1 className="text-center text-4xl font-bold">
        Only Logged users can view this page
      </h1>
      <Link
        href="/signIn"
        className="mt-8 px-2 py-1 text-3xl font-semibold text-[#222126] hover:text-[#fffff3] bg-[#fffff3] hover:bg-[#f3392c] rounded transform duration-700 ease-in-out"
      >
        Sign In
      </Link>
    </main>
  );
};

export default UserNotAuthenticated;
