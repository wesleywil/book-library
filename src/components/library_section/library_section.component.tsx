import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "@/redux/store";
import { selectUserBook } from "@/redux/books/books";
import { handleHideBookOptions } from "@/redux/utils/utils";
import LibraryBook from "../library_book/library_book.component";

type LibrarySectionProps = {
  name: string;
};

const LibrarySection = ({ name }: LibrarySectionProps) => {
  const books = useSelector((state: RootState) => state.books.books);
  const dispatch = useDispatch<AppDispatch>();

  const filteredBooks = books.filter(
    (item) => item.status === name.toLowerCase()
  );

  const handleSelectBook = (bookId: string) => {
    dispatch(selectUserBook(bookId));
    dispatch(handleHideBookOptions());
  };

  useEffect(() => {}, [books]);
  return (
    <div className="w-full xl:w-2/3 xl:mx-auto p-1  border border-[#fffff3] rounded">
      <div className="px-2 mb-2 flex flex-col  md:flex-row-reverse justify-between">
        <h2 className="text-2xl font-semibold text-[#fffff3]">{name}</h2>
      </div>

      <div className="px-2 pb-1 flex flex-wrap gap-2 justify-center md:justify-normal">
        {filteredBooks.length ? (
          filteredBooks.map((item) => (
            <LibraryBook
              key={item.id}
              book_name={item.volumeInfo.title}
              book_img={item.volumeInfo.imageLinks?.thumbnail}
              btnName="Options"
              btnAction={() => handleSelectBook(item.id)}
            />
          ))
        ) : (
          <h1 className="w-full mx-auto p-4 text-4xl text-center text-slate-400">
            NO BOOKS IN THIS SECTION
          </h1>
        )}
      </div>
    </div>
  );
};

export default LibrarySection;
