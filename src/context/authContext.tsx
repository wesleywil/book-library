import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import { FaRedo } from "react-icons/fa";
import firebase_app from "@/config";

const auth = getAuth(firebase_app);

export const AuthContext = createContext<{ user: any }>({ user: null });

export const useAuthContext = () => useContext(AuthContext);

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>
      {!loading ? (
        <main className="min-w-screen min-h-screen flex flex-col items-center justify-center p-4 text-[#f3392c]">
          <div className="text-6xl font-bold spin">
            <FaRedo />
          </div>
          <h1 className="text-center text-4xl font-bold animate-pulse">
            Loading
          </h1>
        </main>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
};
