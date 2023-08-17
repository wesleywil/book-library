"use client";

import { useEffect, useState } from "react";
import { useAuthContext } from "@/context/authContext";

import LibrarySection from "@/components/library_section/library_section.component";
import UserNotAuthenticated from "@/components/user_not_authenticated/user_not_authenticated.component";

export default function Library() {
  const [authenticated, setAuthenticated] = useState<boolean>(false);
  const { user } = useAuthContext();

  useEffect(() => {
    if (user === null) {
      setAuthenticated(false);
    } else {
      setAuthenticated(true);
    }
  }, [user]);

  if (authenticated) {
    return (
      <main className="min-w-screen min-h-screen p-4">
        <h1 className="text-center text-5xl font-bold">Library</h1>
        <LibrarySection name="Favorites" />
        <LibrarySection name="Reading" />
        <LibrarySection name="Want to Read" />
        <LibrarySection name="Read" />
      </main>
    );
  }
  return <UserNotAuthenticated />;
}
