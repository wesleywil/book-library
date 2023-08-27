import Link from "next/link";
import { useAuthContext } from "@/context/authContext";
import handleSignOut from "@/firebase/auth/signOut";

const Menu = () => {
  const { user } = useAuthContext();
  return (
    <header className="p-4 flex gap-4 justify-center text-xl font-semibold bg-[#fffff3] text-[#222126]">
      <Link
        href="/"
        className="hover:text-[#f3392c] transform duration-500 ease-in-out"
      >
        Home
      </Link>
      {user ? (
        <>
          <Link
            href="/profile"
            className="hover:text-[#f3392c] transform duration-500 ease-in-out"
          >
            Profile
          </Link>
          <Link
            href="/library"
            className="hover:text-[#f3392c] transform duration-500 ease-in-out"
          >
            Library
          </Link>
          <div className="grow flex justify-end">
            <button
              onClick={handleSignOut}
              className="px-2 text-base bg-[#f3392c] hover:bg-[#222126] text-[#fffff3] hover:text-[#fffff3] rounded transform duration-700 ease-in-out"
            >
              Sign Out
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="grow flex justify-end gap-4">
            <Link
              href="/signIn"
              className="px-2 text-base bg-[#f3392c] hover:bg-[#222126] text-[#fffff3] hover:text-[#fffff3] rounded transform duration-700 ease-in-out"
            >
              Sign In
            </Link>
            <Link
              href="/signUp"
              className="px-2 text-base bg-[#f3392c] hover:bg-[#222126] text-[#fffff3] hover:text-[#fffff3] rounded transform duration-700 ease-in-out"
            >
              Sign Up
            </Link>
          </div>
        </>
      )}
    </header>
  );
};

export default Menu;
