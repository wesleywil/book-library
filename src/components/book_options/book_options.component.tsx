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
    <div className="absolute w-11/12 h-5/6 p-2 flex flex-col items-center justify-center gap-2 bg-[#222126]/90 z-10 border border-[#f3392c] rounded">
      <button
        onClick={closeBookOptions}
        className="p-2 text-2xl bg-[#f3392c] hover:bg-[#f3392c]/70 rounded-full transform duration-700 ease-in-out"
      >
        <FaTimes />
      </button>
      <h1 className="mb-2 text-3xl font-semibold ">Menu Book</h1>
      <div className="p-8 flex gap-4 justify-center bg-[#222126] border border-[#f3392c] rounded">
        <div className="flex flex-col gap-2 justify-center items-center">
          {book.volumeInfo.title.length > 30 ? (
            <h2 className="text-xs">{book.volumeInfo.title}</h2>
          ) : (
            <h2 className="text-xl">{book.volumeInfo.title}</h2>
          )}
          <div style={{ width: "220px", height: "250px" }} className="relative">
            <Image
              src={
                book.volumeInfo.imageLinks?.thumbnail || defaultBackgroungImage
              }
              layout="fill"
              alt="books cover"
              className="border border-[#fffff3] rounded"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-xl">Options</h2>
          <div className="w-[220px] h-[250px] flex flex-col gap-2 items-center justify-center text-[#fffff3]">
            <button
              onClick={() => handleUpdate("favorites")}
              className="w-full px-1 font-semibold text-[#222126] bg-[#fffff3] hover:bg-[#fffff3]/70 rounded transform duration-500 ease-in-out"
            >
              Favorite
            </button>
            <button
              onClick={() => handleUpdate("reading")}
              className="w-full px-1 font-semibold text-[#222126] bg-[#fffff3] hover:bg-[#fffff3]/70 rounded transform duration-500 ease-in-out"
            >
              Reading
            </button>
            <button
              onClick={() => handleUpdate("want to read")}
              className="w-full px-1 font-semibold text-[#222126] bg-[#fffff3] hover:bg-[#fffff3]/70 rounded transform duration-500 ease-in-out"
            >
              Want To Read
            </button>
            <button
              onClick={() => handleUpdate("read")}
              className="w-full px-1 font-semibold text-[#222126] bg-[#fffff3] hover:bg-[#fffff3]/70 rounded transform duration-500 ease-in-out"
            >
              Read
            </button>
            <button
              onClick={handleDelete}
              className="p-2 text-2xl bg-[#f3392c] hover:bg-[#f3392c]/70 rounded-full"
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
