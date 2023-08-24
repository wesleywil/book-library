import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { FaTrashAlt, FaTimes } from "react-icons/fa";
import type { AppDispatch, RootState } from "@/redux/store";
import {
  updateUserBook,
  deleteUserBook,
  resetSelectedUserBook,
} from "@/redux/books/books";
import { handleHideBookOptions } from "@/redux/utils/utils";
import { useAuthContext } from "@/context/authContext";

const BookOptions = () => {
  const book = useSelector((state: RootState) => state.books.book);
  const dispatch = useDispatch<AppDispatch>();

  const { user } = useAuthContext();
  const defaultBackgroungImage = "https://dummyimage.com/220x250";

  const closeBookOptions = () => {
    dispatch(handleHideBookOptions());
    dispatch(resetSelectedUserBook());
  };

  const handleUpdate = async (status: string) => {
    const data = {
      userId: user.uid,
      bookId: book.id,
      status: status,
    };
    dispatch(updateUserBook(data));
    closeBookOptions();
  };

  const handleDelete = () => {
    const data = {
      userId: user.uid,
      bookId: book.id,
    };
    dispatch(deleteUserBook(data));
    closeBookOptions();
  };

  return (
    <div className="absolute w-11/12 h-5/6 p-2 flex flex-col items-center justify-center gap-2 bg-black z-10 border border-red-400 rounded">
      <button
        onClick={closeBookOptions}
        className="p-2 text-2xl bg-red-400 hover:bg-red-600 rounded-full"
      >
        <FaTimes />
      </button>
      <h1 className="mb-2 text-3xl font-semibold ">Menu Book</h1>
      <div className="p-8 flex gap-4 justify-center border border-yellow-400 rounded">
        <div className="flex flex-col gap-2 justify-center items-center">
          {book.volumeInfo.title.length > 30 ? (
            <h2 className="text-xs">{book.volumeInfo.title}</h2>
          ) : (
            <h2 className="text-xl">{book.volumeInfo.title}</h2>
          )}

          <Image
            src={
              book.volumeInfo.imageLinks?.thumbnail || defaultBackgroungImage
            }
            width={220}
            height={250}
            alt="books cover"
            className="rounded"
          />
        </div>
        <div className="flex flex-col gap-2 justify-center items-center">
          <h2 className="text-xl">Options</h2>
          <div className="w-[220px] h-[250px] flex flex-col gap-2 items-center justify-center">
            <button
              onClick={() => handleUpdate("favorites")}
              className="w-full px-1 font-semibold text-black hover:text-white  bg-purple-400 hover:bg-purple-600 rounded"
            >
              Favorite
            </button>
            <button
              onClick={() => handleUpdate("reading")}
              className="w-full px-1 font-semibold text-black hover:text-white bg-green-400 hover:bg-green-600 rounded"
            >
              Reading
            </button>
            <button
              onClick={() => handleUpdate("want to read")}
              className="w-full px-1 font-semibold text-black hover:text-white bg-yellow-400 hover:bg-yellow-600 rounded"
            >
              Want To Read
            </button>
            <button
              onClick={() => handleUpdate("read")}
              className="w-full px-1 font-semibold text-black hover:text-white bg-red-400 hover:bg-red-600 rounded"
            >
              Read
            </button>
            <button
              onClick={handleDelete}
              className="p-2 text-2xl bg-white hover:bg-slate-200 text-black rounded-full"
            >
              <FaTrashAlt />{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookOptions;
