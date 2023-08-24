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
    <div className="grow w-11/12 m-2 p-2 text-xs flex flex-col items-center justify-center gap-2 bg-red-400/40 border border-red-400 rounded">
      <button
        onClick={() => handleCreateBook("favorite")}
        className="w-full py-1 bg-purple-400 hover:bg-purple-600 rounded"
      >
        Favorite
      </button>
      <button
        onClick={() => handleCreateBook("reading")}
        className="w-full py-1 bg-green-400 hover:bg-green-600 rounded"
      >
        Reading
      </button>
      <button
        onClick={() => handleCreateBook("want to read")}
        className="w-full py-1 bg-yellow-400 hover:bg-yellow-600 rounded"
      >
        Want to Read
      </button>
      <button
        onClick={() => handleCreateBook("read")}
        className="w-full py-1 bg-red-400 hover:bg-red-600 rounded"
      >
        Read
      </button>
    </div>
  );
};

export default BookAddOptions;
