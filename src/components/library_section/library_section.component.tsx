import LibraryBook from "../library_book/library_book.component";

type LibrarySectionProps = {
  name: string;
};

const LibrarySection = ({ name }: LibrarySectionProps) => {
  return (
    <div className="w-full xl:w-2/3 xl:mx-auto mt-2 p-1  border border-yellow-400 rounded">
      <div className="px-2 mb-2 flex flex-col  md:flex-row-reverse justify-between">
        <h2 className="text-2xl font-semibold text-yellow-400">{name}</h2>
        <div className="md:w-1/3 flex flex-col md:flex-row">
          <input
            type="text"
            placeholder="search"
            className="w-full md:w-2/3 px-2 py-1 text-xl text-black outline-none rounded"
          />
          <button className="w-full md:w-1/3 mt-2 md:mt-0 md:ml-2 px-2 py-1 text-xl bg-red-400 hover:bg-red-600 rounded">
            search
          </button>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 justify-center md:justify-normal">
        <LibraryBook />
        <LibraryBook />
        <LibraryBook />
      </div>
    </div>
  );
};

export default LibrarySection;