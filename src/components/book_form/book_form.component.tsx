import { useState, ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";

import { handleHideBookForm } from "@/redux/utils/utils";
import { createUserBook } from "@/firebase/books/bookUtilities";

const BookForm = () => {
  const dispatch = useDispatch<AppDispatch>();

  const [data, setData] = useState<{
    name: string;
    img_url: string;
    description: string;
    status: string;
  }>(
    {} as {
      name: string;
      img_url: string;
      description: string;
      status: string;
    }
  );

  const handleForm = async (event: React.FormEvent) => {
    event.preventDefault();

    const userId = JSON.parse(localStorage.getItem("userLogged")!).userId;
    const { result, error } = await createUserBook(userId, data);

    if (error) {
      console.log("ERROR=> ", error);
    }
    console.log(result);
  };
  return (
    <div className="absolute min-w-screen min-h-screen w-full h-full flex flex-col items-center justify-center gap-2 bg-black/30 z-10">
      <div className="w-2/3 bg-black border border-red-400 rounded-xl">
        <form
          onSubmit={handleForm}
          className="p-4 flex flex-col gap-2 text-black font-semibold"
        >
          <input
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setData((prevdata) => ({ ...prevdata, name: e.target.value }))
            }
            type="text"
            name="name"
            id="name"
            placeholder="Book's Name"
            className="px-2 py-1 rounded"
          />
          <input
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setData((prevdata) => ({ ...prevdata, img_url: e.target.value }))
            }
            type="text"
            name="img_url"
            id="img_url"
            placeholder="Book's Image"
            className="px-2 py-1 rounded"
          />
          <textarea
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
              setData((prevdata) => ({
                ...prevdata,
                description: e.target.value,
              }))
            }
            name="description"
            id="description"
            placeholder="Book's Description"
            rows={5}
            className="px-2 py-1 rounded"
          ></textarea>
          <select
            onChange={(e: ChangeEvent<HTMLSelectElement>) =>
              setData((prevdata) => ({
                ...prevdata,
                status: e.target.value,
              }))
            }
            name="status"
            id="status"
            className="px-2 py-1 rounded"
          >
            <option value="favorite">Favorite</option>
            <option value="reading">Reading</option>
            <option value="want_to_read">Want To Read</option>
            <option value="read">Read</option>
          </select>
          <div className="flex justify-center gap-4">
            <button className="px-2 py-1 bg-white hover:bg-slate-200 text-black rounded">
              Submit
            </button>
            <button
              onClick={() => dispatch(handleHideBookForm())}
              type="button"
              className="px-2 py-1 bg-white hover:bg-slate-200 text-black rounded"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookForm;
