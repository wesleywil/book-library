type LibraryBookProps = {
  book_img?: string;
  book_name: string;
};

const LibraryBook = ({ book_img, book_name }: LibraryBookProps) => {
  const defaultBackgroungImage = "https://dummyimage.com/220x250";
  return (
    <div
      style={{
        backgroundImage: `url('${book_img || defaultBackgroungImage}')`,
      }}
      className="h-[250px] w-[220px] flex flex-col items-center justify-between border border-red-400 rounded overflow-hidden"
    >
      <h2 className="w-full text-center font-semibold bg-yellow-400">
        {book_name || "Book Has No Name"}
      </h2>
      <button className="w-full font-semibold bg-red-400">Options</button>
    </div>
  );
};

export default LibraryBook;
