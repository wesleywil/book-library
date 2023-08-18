export default function Home() {
  return (
    <main className="min-h-screen flex  flex-col items-center justify-center p-24">
      <div className="w-2/3 flex flex-col gap-2 justify-center items-center">
        <h1 className="text-6xl">Book Library</h1>
        <h2 className="text-xl text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quae
          laudantium similique quos nihil nostrum mollitia doloremque incidunt
          adipisci sed voluptates, ex vel ad officia veritatis. Soluta in velit
          nemo.
        </h2>
        <div className="mt-4 flex flex-col gap-4 justify-center text-2xl">
          <button className="px-2 py-1 bg-red-500 hover:bg-red-700 rounded">
            Login
          </button>
          <button className="px-2 py-1 bg-red-500 hover:bg-red-700 rounded">
            Create Account
          </button>
        </div>
      </div>
    </main>
  );
}