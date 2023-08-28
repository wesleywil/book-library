import { useDispatch } from "react-redux";
import type { AppDispatch } from "@/redux/store";
import { useAuthContext } from "@/context/authContext";
import { Book } from "@/utils/interfaces";
import { createUserBook } from "@/redux/books/books";
import {
  handleHideAddBookOptions,
  handleHideBookForm,
} from "@/redux/utils/utils";

const BookAddOptions = ({ book }: { book: Book }) => {
  const dispatch = useDispatch<AppDispatch>();

  const { user } = useAuthContext();

  const handleCreateBook = (status: string) => {
    dispatch(
      createUserBook({
        userId: user.uid,
        userBookData: {
          ...book,
          status: status,
        },
      })
    );
    dispatch(handleHideAddBookOptions());
    dispatch(handleHideBookForm());
  };
  return (
    <div className="grow w-11/12 m-2 p-2 text-xs flex flex-col items-center justify-center gap-2 text-[#fffff3] bg-[#222126]/50 border border-[#f3392c] rounded">
      <button
        onClick={() => handleCreateBook("favorite")}
        className="w-full py-1 bg-[#f3392c] hover:bg-red-700 rounded transform duration-500 ease-in-out"
      >
        Favorite
      </button>
      <button
        onClick={() => handleCreateBook("reading")}
        className="w-full py-1 bg-[#f3392c] hover:bg-red-700 rounded transform duration-500 ease-in-out "
      >
        Reading
      </button>
      <button
        onClick={() => handleCreateBook("want to read")}
        className="w-full py-1 bg-[#f3392c] hover:bg-red-700 rounded transform duration-500 ease-in-out"
      >
        Want to Read
      </button>
      <button
        onClick={() => handleCreateBook("read")}
        className="w-full py-1 bg-[#f3392c] hover:bg-red-700 rounded transform duration-500 ease-in-out"
      >
        Read
      </button>
    </div>
  );
};

export default BookAddOptions;
