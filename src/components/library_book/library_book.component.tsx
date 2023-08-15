const LibraryBook = () => {
  return (
    <div
      style={{ backgroundImage: "url('https://dummyimage.com/220x250')" }}
      className="h-[250px] w-[220px] flex flex-col items-center justify-between border border-red-400 rounded overflow-hidden"
    >
      <h2 className="w-full text-center font-semibold bg-yellow-400">
        Book Name
      </h2>
      <button className="w-full font-semibold bg-red-400">Options</button>
    </div>
  );
};

export default LibraryBook;
