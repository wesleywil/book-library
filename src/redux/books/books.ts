import  { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserBook } from "@/utils/interfaces";
import { getUserBooks, createUserBook as bookCreate, updateUserBookStatus, deleteUserBook as bookDelete } from "@/firebase/books/bookUtilities";
import { BookStatusCode } from "@/utils/statusCodes";


export interface BookState{
    book:UserBook,
    books:UserBook[],
    status:BookStatusCode,
    error:string,
}

const initialState:BookState = {
    book: {} as UserBook,
    books: [],
    status:BookStatusCode.Idle,
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

export const createUserBook = createAsyncThunk(
    "books/createUserBook",
    async({userId, userBookData}:{userId:string, userBookData:UserBook})=>{
        const res = await bookCreate(userId, userBookData);
        return res;
    }
)

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
                state.status = BookStatusCode.InProgress;
            })
            .addCase(fetchUserBooks.fulfilled, (state, {payload})=>{
                state.status = BookStatusCode.Fetched;
                state.books = payload;
            })
            .addCase(fetchUserBooks.rejected, (state, {payload})=>{
                state.status = BookStatusCode.Error;
                state.error = String(payload);
            })
            .addCase(createUserBook.pending, (state)=>{
                state.status = BookStatusCode.InProgress
            })
            .addCase(createUserBook.fulfilled, (state)=>{
                state.status = BookStatusCode.SuccessCreate
            })
            .addCase(createUserBook.rejected, (state, {payload})=>{
                state.status = BookStatusCode.Error;
                state.error = String(payload);
            })
            .addCase(updateUserBook.pending, (state)=>{
                state.status = BookStatusCode.InProgress
            })
            .addCase(updateUserBook.fulfilled, (state)=>{
                state.status = BookStatusCode.SuccessUpdate
            })
            .addCase(updateUserBook.rejected, (state, {payload})=>{
                state.status = BookStatusCode.Error;
                state.error = String(payload);
            })
            .addCase(deleteUserBook.pending, (state)=>{
                state.status = BookStatusCode.Idle;
            })
            .addCase(deleteUserBook.fulfilled, (state)=>{
                state.status = BookStatusCode.SuccessDelete
            })
            .addCase(deleteUserBook.rejected, (state, {payload})=>{
                state.status = BookStatusCode.Error;
                state.error = String(payload);
            })
    }
});

export const {selectUserBook, resetSelectedUserBook} = bookSlice.actions;

export default bookSlice.reducer;
