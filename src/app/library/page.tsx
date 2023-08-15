import LibrarySection from "@/components/library_section/library_section.component";

export default function Library() {
  return (
    <main className="min-w-screen min-h-screen p-4">
      <h1 className="text-center text-5xl font-bold">Library</h1>
      <LibrarySection name="Favorites" />
      <LibrarySection name="Reading" />
      <LibrarySection name="Want to Read" />
      <LibrarySection name="Read" />
    </main>
  );
}
