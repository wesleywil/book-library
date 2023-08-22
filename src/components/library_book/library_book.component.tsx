import { MouseEventHandler } from "react";

type LibraryBookProps = {
  book_img?: string;
  book_name: string;
  btnName: string;
  btnAction?: MouseEventHandler<HTMLButtonElement>;
};

const LibraryBook = ({
  book_img,
  book_name,
  btnName,
  btnAction,
}: LibraryBookProps) => {
  const defaultBackgroungImage = "https://dummyimage.com/220x250";
  return (
    <div
      style={{
        backgroundImage: `url('${book_img || defaultBackgroungImage}')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="h-[250px] w-[220px] flex flex-col items-center justify-between border border-red-400 rounded overflow-hidden"
    >
      <h2 className="w-full text-center font-semibold bg-red-400">
        {book_name || "Book Has No Name"}
      </h2>
      <button
        onClick={btnAction}
        className="w-full font-semibold bg-red-400 hover:bg-red-600"
      >
        {btnName}
      </button>
    </div>
  );
};

export default LibraryBook;
