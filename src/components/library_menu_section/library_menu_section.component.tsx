import { useDispatch } from "react-redux";
import type { AppDispatch } from "@/redux/store";

import { switchLibrarySection } from "@/redux/library/library";

const LibraryMenuSection = () => {
  const dispatch = useDispatch<AppDispatch>();

  const switchSection = (section: string) => {
    dispatch(switchLibrarySection(section));
  };
  return (
    <div className="w-full xl:w-2/3 xl:mx-auto flex gap-2 justify-start text-[#222126]">
      <button
        onClick={() => switchSection("Favorites")}
        className="px-1 font-semibold bg-[#fffff3] hover:bg-[#fffff3]/70 rounded-t-xl transform duration-500 ease-in-out"
      >
        Favorites
      </button>
      <button
        onClick={() => switchSection("Reading")}
        className="px-1 font-semibold bg-[#fffff3] hover:bg-[#fffff3]/70 rounded-t-xl transform duration-500 ease-in-out"
      >
        Reading
      </button>
      <button
        onClick={() => switchSection("Want To Read")}
        className="px-1 font-semibold bg-[#fffff3] hover:bg-[#fffff3]/70 rounded-t-xl transform duration-500 ease-in-out"
      >
        Want To Read
      </button>
      <button
        onClick={() => switchSection("Read")}
        className="px-1 font-semibold bg-[#fffff3] hover:bg-[#fffff3]/70 rounded-t-xl transform duration-500 ease-in-out"
      >
        Read
      </button>
    </div>
  );
};

export default LibraryMenuSection;
