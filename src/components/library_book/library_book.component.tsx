import { RootState } from "@/redux/store";
import { Book } from "@/utils/interfaces";
import { MouseEventHandler } from "react";
import { useSelector } from "react-redux";
import BookAddOptions from "../book_add_options/book_add_options.component";

type LibraryBookProps = {
  book?: Book;
  book_img?: string;
  book_name: string;
  btnName: string;
  btnAction?: MouseEventHandler<HTMLButtonElement>;
};

const LibraryBook = ({
  book,
  book_img,
  book_name,
  btnName,
  btnAction,
}: LibraryBookProps) => {
  const defaultBackgroungImage = "https://dummyimage.com/220x250";

  const hideOptions = useSelector(
    (state: RootState) => state.utils.hide_add_book_options
  );

  return (
    <div
      style={{
        backgroundImage: `url('${book_img || defaultBackgroungImage}')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="h-[270px] w-[220px] flex flex-col items-center justify-between text-[#222126] border border-[#fffff3] rounded overflow-hidden"
    >
      <h2 className="w-full text-center font-semibold bg-[#fffff3] border-b border-[#fffff3]">
        {book_name.length >= 30
          ? book_name.slice(0, 29) + "..."
          : book_name || "Book Has No Name"}
      </h2>
      {btnName === "Add" ? (
        hideOptions ? (
          ""
        ) : (
          <BookAddOptions book={book!} />
        )
      ) : (
        ""
      )}

      <button
        onClick={btnAction}
        className="w-full font-semibold hover:text-[#fffff3] bg-[#fffff3] hover:bg-red-700 border-t border-[#fffff3] transform duration-500 ease-in-out"
      >
        {btnName}
      </button>
    </div>
  );
};

export default LibraryBook;
