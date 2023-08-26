"use client";

import { useEffect, useState } from "react";

import { User } from "@/utils/interfaces";
import { getUserInfo } from "@/firebase/users/userUtilities";

import { useAuthContext } from "@/context/authContext";
import ProfileInfoItem from "@/components/profile_info_item/profile_info_item.component";
import UserNotAuthenticated from "@/components/user_not_authenticated/user_not_authenticated.component";

export default function Profile() {
  const [selectedUser, setSelectedUser] = useState<User>();
  const { user } = useAuthContext();

  const booksCountByStatus: { [status: string]: number } = {
    reading: 0,
    "want to read": 0,
    read: 0,
  };

  selectedUser?.books.forEach((book) => {
    if (book.status in booksCountByStatus) {
      booksCountByStatus[book.status]++;
    }
  });

  useEffect(() => {
    if (user) {
      const fetchUserInfo = async () => {
        const userDocId = user.uid;
        try {
          const userData = await getUserInfo(userDocId);
          setSelectedUser(userData);
        } catch (error) {
          console.error("Error: ", error);
        }
      };
      fetchUserInfo();
    }
  }, [user]);

  if (user) {
    return (
      <main className="min-w-screen min-h-screen p-4">
        <h1 className="text-center text-5xl font-bold">Profile</h1>
        <div className="mt-8 w-full flex flex-col items-center">
          <div className="flex flex-col items-center">
            <h1 className="text-3xl font-bold">{selectedUser?.displayName}</h1>
            <h1 className="text-slate-400 text-xl">{selectedUser?.email}</h1>
          </div>
          <h1 className="mt-8 text-3xl font-semibold underline">Books Count</h1>
          <div className="mt-2 flex flex-col gap-4">
            {Object.keys(booksCountByStatus).map((status) => (
              <ProfileInfoItem
                key={status}
                status={status}
                count={booksCountByStatus[status]}
              />
            ))}
          </div>
        </div>
      </main>
    );
  }
  return <UserNotAuthenticated />;
}
