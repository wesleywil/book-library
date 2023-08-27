"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaPlus } from "react-icons/fa";

import { AppDispatch, RootState } from "@/redux/store";
import { useAuthContext } from "@/context/authContext";
import { handleHideBookForm } from "@/redux/utils/utils";
import { fetchUserBooks } from "@/redux/books/books";

import UserNotAuthenticated from "@/components/user_not_authenticated/user_not_authenticated.component";
import SearchBookContainer from "@/components/search_book_container/search_book_container.component";
import LibraryContainerSections from "@/components/library_container_sections/library_container_sections.component";
import { BookStatusCode } from "@/utils/statusCodes";

export default function Library() {
  const { user } = useAuthContext();

  const hideForm = useSelector(
    (state: RootState) => state.utils.hide_book_form
  );
  const status = useSelector((state: RootState) => state.books.status);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (user) {
      if (
        status === BookStatusCode.Idle ||
        status === BookStatusCode.SuccessCreate ||
        status === BookStatusCode.SuccessUpdate ||
        status === BookStatusCode.SuccessDelete
      ) {
        dispatch(fetchUserBooks(user.uid));
      }
    }
  }, [user, status, dispatch]);

  if (user) {
    return (
      <>
        <main className="min-w-screen min-h-screen p-4 flex flex-col text-[#fffff3]">
          {hideForm ? "" : <SearchBookContainer />}

          <div className="z-0">
            <h1 className="text-center text-5xl font-bold">
              Library{" "}
              <button
                onClick={() => dispatch(handleHideBookForm())}
                className="p-2 text-3xl bg-[#f3392c] hover:bg-[#f3392c]/60 rounded-full transform duration-700 ease-in-out"
              >
                <FaPlus />
              </button>
            </h1>
            <LibraryContainerSections />
          </div>
        </main>
      </>
    );
  }
  return <UserNotAuthenticated />;
}
