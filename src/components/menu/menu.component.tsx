import Link from "next/link";
import { useAuthContext } from "@/context/authContext";
import handleSignOut from "@/firebase/auth/signOut";

const Menu = () => {
  const { user } = useAuthContext();
  return (
    <header className="p-4 flex gap-4 justify-center text-xl font-semibold bg-slate-200 text-black">
      <Link href="/" className="hover:text-blue-600">
        Home
      </Link>
      {user ? (
        <>
          <Link href="/profile" className="hover:text-blue-600">
            Profile
          </Link>
          <Link href="/library" className="hover:text-blue-600">
            Library
          </Link>
          <div className="grow flex justify-end">
            <button
              onClick={handleSignOut}
              className="px-2 text-base bg-black hover:bg-slate-800 text-slate-200 hover:text-slate-400 rounded"
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
              className="px-2 text-base bg-black hover:bg-slate-800 text-slate-200 hover:text-slate-400 rounded"
            >
              Sign In
            </Link>
            <Link
              href="/signUp"
              className="px-2 text-base bg-black hover:bg-slate-800 text-slate-200 hover:text-slate-400 rounded"
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
