import { useState, ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { FaSearch, FaTimes } from "react-icons/fa";

import { Book } from "@/utils/interfaces";
import {
  handleHideBookForm,
  handleHideAddBookOptions,
} from "@/redux/utils/utils";

import LibraryBook from "../library_book/library_book.component";

const SearchBookContainer = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [listBooks, setListBooks] = useState<Book[]>([]);

  const dispatch = useDispatch<AppDispatch>();

  const handleSearch = async () => {
    const req = await fetch(`http://localhost:3000/api/books/${searchValue}`);
    const books: Book[] = (await req.json()) as Book[];
    // console.log("RETURN=> ", books);
    setListBooks(books);
  };

  const handleHideOptions = () => {
    dispatch(handleHideAddBookOptions());
  };

  return (
    <div className="absolute w-11/12 h-5/6 top-18 p-2 flex flex-col items-center justify-center gap-2 bg-[#222126]/90 z-10">
      <button
        onClick={() => dispatch(handleHideBookForm())}
        className="p-2 text-4xl font-bold bg-[#f3392c] hover:bg-[#f3392c]/60 text-[#fffff3] rounded-full transform duration-700 ease-in-out"
      >
        <FaTimes />
      </button>
      <div className="w-full h-5/6 p-4 flex flex-col items-center border border-[#fffff3] rounded">
        <div className="w-11/12 mx-auto mt-2 p-2 flex text-xl">
          <input
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setSearchValue(e.target.value)
            }
            type="text"
            placeholder="Search For A Book ex:Harry Potter"
            className="w-10/12 px-2 py-1 bg-[#fffff3] text-[#222126] font-semibold outline-0 rounded-l"
          />
          <button
            onClick={handleSearch}
            className="px-4 py-1 bg-[#f3392c] hover:bg-[#f3392c]/60 text-[#fffff3] font-semibold rounded-r"
          >
            <FaSearch />
          </button>
        </div>
        <h1 className="mb-4 text-4xl font-semibold">Books</h1>
        <div className="w-full h-full p-2 flex flex-wrap justify-center gap-2 border border-[#f3392c] overflow-y-auto rounded">
          {listBooks.length ? (
            listBooks
              .splice(0, 10)
              .map((item) => (
                <LibraryBook
                  key={item.id}
                  book={item}
                  book_img={item.volumeInfo.imageLinks?.thumbnail}
                  book_name={item.volumeInfo.title}
                  btnName="Add"
                  btnAction={handleHideOptions}
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
