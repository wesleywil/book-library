import { UserBook } from "@/utils/interfaces";
import { getUserBooks } from "@/firebase/books/bookUtilities";
import  { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

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

export const bookSlice = createSlice({
    name:"books",
    initialState,
    reducers:{},
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
    }
});

export const {} = bookSlice.actions;

export default bookSlice.reducer;
