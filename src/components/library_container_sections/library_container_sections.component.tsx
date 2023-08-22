import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { SectionMapping } from "@/utils/interfaces";

import LibraryMenuSection from "../library_menu_section/library_menu_section.component";
import LibrarySection from "../library_section/library_section.component";
import BookOptions from "../book_options/book_options.component";

const LibraryContainerSections = () => {
  const librarySection = useSelector(
    (state: RootState) => state.library.section_status
  );
  const sectionMapping: SectionMapping = {
    Favorites: "Favorites",
    Reading: "Reading",
    "Want To Read": "Want to Read",
  };

  const sectionName = sectionMapping[librarySection] || "Read";
  return (
    <>
      <BookOptions />
      <LibraryMenuSection />
      <LibrarySection name={sectionName} />
    </>
  );
};

export default LibraryContainerSections;
