"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch, RootState } from "@/redux/store";
import { useAuthContext } from "@/context/authContext";
import { handleHideBookForm } from "@/redux/utils/utils";
import { fetchUserBooks } from "@/redux/books/books";

import LibrarySection from "@/components/library_section/library_section.component";
import UserNotAuthenticated from "@/components/user_not_authenticated/user_not_authenticated.component";
import BookForm from "@/components/book_form/book_form.component";

export default function Library() {
  const [authenticated, setAuthenticated] = useState<boolean>(false);
  const { user } = useAuthContext();

  const hideForm = useSelector(
    (state: RootState) => state.utils.hide_book_form
  );
  const status = useSelector((state: RootState) => state.books.status);
  const books = useSelector((state: RootState) => state.books.books);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (user === null) {
      setAuthenticated(false);
    } else {
      setAuthenticated(true);
      if (status === "idle") {
        dispatch(fetchUserBooks(user.uid));
      }
    }
  }, [user, dispatch]);

  if (authenticated) {
    return (
      <>
        <main className="min-w-screen min-h-screen p-4 flex flex-col">
          {hideForm ? "" : <BookForm />}

          <div className="z-0">
            <h1 className="text-center text-5xl font-bold">
              Library{" "}
              <button
                onClick={() => dispatch(handleHideBookForm())}
                className="bg-red-400 hover:bg-red-600 px-3 pb-1 rounded-full"
              >
                +
              </button>
            </h1>
            <LibrarySection name="Favorites" />
            <LibrarySection name="Reading" />
            <LibrarySection name="Want to Read" />
            <LibrarySection name="Read" />
          </div>
        </main>
      </>
    );
  }
  return <UserNotAuthenticated />;
}
