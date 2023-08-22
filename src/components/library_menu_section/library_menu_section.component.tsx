import { useDispatch } from "react-redux";
import type { AppDispatch } from "@/redux/store";

import { switchLibrarySection } from "@/redux/library/library";

const LibraryMenuSection = () => {
  const dispatch = useDispatch<AppDispatch>();

  const switchSection = (section: string) => {
    dispatch(switchLibrarySection(section));
  };
  return (
    <div className="w-full xl:w-2/3 xl:mx-auto flex gap-2 justify-start">
      <button
        onClick={() => switchSection("Favorites")}
        className="px-1 font-semibold text-black hover:text-white  bg-purple-400 hover:bg-purple-600 rounded-t-xl"
      >
        Favorites
      </button>
      <button
        onClick={() => switchSection("Reading")}
        className="px-1 font-semibold text-black hover:text-white bg-green-400 hover:bg-green-600 rounded-t-xl"
      >
        Reading
      </button>
      <button
        onClick={() => switchSection("Want To Read")}
        className="px-1 font-semibold text-black hover:text-white bg-yellow-400 hover:bg-yellow-600 rounded-t-xl"
      >
        Want To Read
      </button>
      <button
        onClick={() => switchSection("Read")}
        className="px-1 font-semibold text-black hover:text-white bg-red-400 hover:bg-red-600 rounded-t-xl"
      >
        Read
      </button>
    </div>
  );
};

export default LibraryMenuSection;
