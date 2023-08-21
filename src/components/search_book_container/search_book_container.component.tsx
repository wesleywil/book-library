import { useState, ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";

import { Book } from "@/utils/interfaces";
import { useAuthContext } from "@/context/authContext";
import { createUserBook } from "@/firebase/books/bookUtilities";
import { handleHideBookForm } from "@/redux/utils/utils";

import LibraryBook from "../library_book/library_book.component";

const SearchBookContainer = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [listBooks, setListBooks] = useState<Book[]>([]);

  const dispatch = useDispatch<AppDispatch>();

  const { user } = useAuthContext();

  const handleSearch = async () => {
    const req = await fetch(`http://localhost:3000/api/books/${searchValue}`);
    const books: Book[] = (await req.json()) as Book[];
    // console.log("RETURN=> ", books);
    setListBooks(books);
  };

  return (
    <div className="absolute min-w-screen min-h-screen w-full h-full p-2 flex flex-col items-center justify-center gap-2 bg-black z-10">
      <button
        onClick={() => dispatch(handleHideBookForm())}
        className="px-2 text-4xl font-bold bg-red-500 hover:bg-red-700 text-white rounded-full"
      >
        X
      </button>
      <div className="w-full h-5/6 p-4 flex flex-col items-center border border-white rounded">
        <div className="w-11/12 mx-auto mt-2 p-2 flex">
          <input
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setSearchValue(e.target.value)
            }
            type="text"
            placeholder="Search For A Book ex:Harry Potter"
            className="w-10/12 px-2 py-1 text-black font-semibold rounded-l"
          />
          <button
            onClick={handleSearch}
            className="grow px-2 py-1 bg-red-400 hover:bg-red-600 text-white font-semibold rounded-r"
          >
            Search
          </button>
        </div>
        <h1 className="text-3xl font-semibold">Books</h1>
        <div className="w-full h-full flex flex-wrap justify-center gap-2 border border-red-400 overflow-y-auto rounded">
          {listBooks.length ? (
            listBooks
              .splice(0, 10)
              .map((item) => (
                <LibraryBook
                  key={item.id}
                  book_img={item.volumeInfo.imageLinks?.thumbnail}
                  book_name={item.volumeInfo.title}
                  btnName="Add"
                  btnAction={() => createUserBook(user.uid, item)}
                />
              ))
          ) : (
            <h1 className="self-center text-4xl">NO BOOKS, SEARCH IT!</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchBookContainer;
