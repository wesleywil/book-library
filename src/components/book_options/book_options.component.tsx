import Image from "next/image";
import { FaTrashAlt, FaTimes } from "react-icons/fa";

const BookOptions = () => {
  return (
    <div className="absolute w-11/12 h-5/6 p-2 flex flex-col items-center justify-center gap-2 bg-black z-10 border border-red-400 rounded">
      <button className="p-2 text-2xl bg-red-400 hover:bg-red-600 rounded-full">
        <FaTimes />
      </button>
      <h1 className="mb-2 text-3xl font-semibold ">Menu Book</h1>
      <div className="p-8 flex gap-4 justify-center border border-yellow-400 rounded">
        <div className="flex flex-col gap-2 justify-center items-center">
          <h2 className="text-xl">Book Name</h2>
          <Image
            src="https://dummyimage.com/220x250"
            width={220}
            height={250}
            alt="books cover"
            className="rounded"
          />
        </div>
        <div className="flex flex-col gap-2 justify-center items-center">
          <h2 className="text-xl">Options</h2>
          <div className="w-[220px] h-[250px] flex flex-col gap-2 items-center justify-center">
            <button className="w-full px-1 font-semibold text-black hover:text-white  bg-purple-400 hover:bg-purple-600 rounded">
              Favorite
            </button>
            <button className="w-full px-1 font-semibold text-black hover:text-white bg-green-400 hover:bg-green-600 rounded">
              Reading
            </button>
            <button className="w-full px-1 font-semibold text-black hover:text-white bg-yellow-400 hover:bg-yellow-600 rounded">
              Want To Read
            </button>
            <button className="w-full px-1 font-semibold text-black hover:text-white bg-red-400 hover:bg-red-600 rounded">
              Read
            </button>
            <button className="p-2 text-2xl bg-white hover:bg-slate-200 text-black rounded-full">
              <FaTrashAlt />{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookOptions;
