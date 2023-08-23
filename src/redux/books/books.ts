import  { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserBook } from "@/utils/interfaces";
import { getUserBooks, updateUserBookStatus, deleteUserBook as bookDelete } from "@/firebase/books/bookUtilities";


export interface BookState{
    book:UserBook,
    books:UserBook[],
    status:string,
    error:string,
}

const initialState:BookState = {
    book: {} as UserBook,
    books: [],
    status:"idle",
    error:""
};

export const fetchUserBooks = createAsyncThunk(
    "books/fetchUserBooks",
    async(userId:string)=>{
        const res = await getUserBooks(userId);
        const books:UserBook[] = res;
        return books;
    }
);

export const updateUserBook = createAsyncThunk(
    "books/updateUserBook",
    async({userId, bookId, status}:{userId:string, bookId:string, status:string})=>{
        const res = await updateUserBookStatus(userId, bookId, status);
        return res;
    }
);

export const deleteUserBook = createAsyncThunk(
    "books/deleteUserBook",
    async({userId, bookId}:{userId:string, bookId:string})=>{
        const res = await bookDelete(userId, bookId);
        return res;
    }
);

export const bookSlice = createSlice({
    name:"books",
    initialState,
    reducers:{
        selectUserBook:(state, action:PayloadAction<string>)=>{
            const selectedBook = state.books.find((item)=> item.id === action.payload);
            state.book = selectedBook!;
        },
        resetSelectedUserBook:(state)=>{
            state.book = {} as UserBook;
        }
    },
    extraReducers:(builder)=>{
        builder
            .addCase(fetchUserBooks.pending, (state)=>{
                state.status = "fetching";
            })
            .addCase(fetchUserBooks.fulfilled, (state, {payload})=>{
                state.status = "success";
                state.books = payload;
            })
            .addCase(fetchUserBooks.rejected, (state, {payload})=>{
                state.error = String(payload);
            })
            .addCase(updateUserBook.pending, (state)=>{
                state.status = "trying to update user book";
            })
            .addCase(updateUserBook.fulfilled, (state)=>{
                state.status = "success in updating the book status";
            })
            .addCase(updateUserBook.rejected, (state, {payload})=>{
                state.error = String(payload);
            })
            .addCase(deleteUserBook.pending, (state)=>{
                state.status = "trying to delete the user book";
            })
            .addCase(deleteUserBook.fulfilled, (state)=>{
                state.status = "success in deleting the user book";
            })
            .addCase(deleteUserBook.rejected, (state, {payload})=>{
                state.error = String(payload);
            })
    }
});

export const {selectUserBook, resetSelectedUserBook} = bookSlice.actions;

export default bookSlice.reducer;
