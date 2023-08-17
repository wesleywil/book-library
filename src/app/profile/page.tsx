"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useAuthContext } from "@/context/authContext";
import ProfileInfoItem from "@/components/profile_info_item/profile_info_item.component";
import UserNotAuthenticated from "@/components/user_not_authenticated/user_not_authenticated.component";

export default function Profile() {
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
        <h1 className="text-center text-5xl font-bold">Profile</h1>
        <div className="mt-8 w-full flex flex-col items-center">
          <div className="flex flex-col items-center">
            <Image
              src="https://dummyimage.com/150x150"
              height={150}
              width={150}
              alt="Profile"
              className="rounded-full border border-blue-500"
            />
            <h1 className="text-xl">wwUsernameww</h1>
            <h1 className="text-slate-400 text-sm">Wesley Wilson</h1>
          </div>
          <h1 className="mt-8 text-3xl font-semibold underline">Book Status</h1>
          <div className="mt-2 flex flex-col gap-4">
            <ProfileInfoItem status="Reading" count={2} />
            <ProfileInfoItem status="Want to Read" count={15} />
            <ProfileInfoItem status="Read" count={10} />
          </div>
        </div>
      </main>
    );
  }
  return <UserNotAuthenticated />;
}
