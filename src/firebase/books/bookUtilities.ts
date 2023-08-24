import { getFirestore, doc, collection, getDoc, updateDoc, arrayUnion, deleteDoc } from "firebase/firestore/lite";
import firebase_app from "@/config";
import { Book, UserBook } from "@/utils/interfaces";

const db = getFirestore(firebase_app);

export async function createUserBook(userDocID:string, bookData:UserBook){
    try{
    const userRef = collection(db, "users");
    const userDocRef = doc(userRef, userDocID);
    const userDocSnapshot = await getDoc(userDocRef);
    const userData = userDocSnapshot.data();

    const existingBooks = userData && userData.books ? userData.books : [];
    
    await updateDoc(userDocRef,{
        books: arrayUnion(bookData, ...existingBooks)
    });
    return userDocRef;
    }catch(error:any){
        console.log('CODE: ', error.code, " MESSAGE: ", error.message);
        return error;
    }
}

export async function getUserBooks(userDocID:string){
    try{
        const userRef = collection(db, "users");
        const userDocRef = doc(userRef, userDocID);
        const userDocSnapshot = await getDoc(userDocRef);
        const userData = userDocSnapshot.data();
        const books = userData && userData.books ? userData.books : [];

        return books;
    }catch(error:any){
        console.log('CODE: ', error.code, " MESSAGE: ", error.message);
        return error;
    }
}

export async function updateUserBookStatus(userDocID:string, bookId:string, newStatus:string){
    try{
        const userRef = doc(db, "users", userDocID);
        const userDoc = await getDoc(userRef);

        if(userDoc.exists()){
            const userData = userDoc.data();
            const updatedBooks = userData.books.map((book:any)=>{
                if(book.id === bookId){
                    return {...book, status:newStatus};
                }
                return book;
            });
            await updateDoc(userRef, {books:updatedBooks});
            console.log('Book updated successfully');
        }else{
            console.log('User Document not found')
        }
    }catch(error:any){
        console.log('CODE: ', error.code, " MESSAGE: ", error.message);
        return error;
    }
}

export async function deleteUserBook(userDocID:string, bookId:string){
    try{
       const userRef = doc(db, 'users', userDocID);
       const userDoc = await getDoc(userRef);

       if(userDoc.exists()){
        const userData = userDoc.data();
        const updatedBooks = userData.books.filter((book:UserBook) => book.id !== bookId);
        await updateDoc(userRef, {books:updatedBooks});
        console.log('Book deletion successfull')
        return updatedBooks;
       }
    }catch(error:any){
        console.log('CODE: ', error.code, " MESSAGE: ", error.message);
        return error;
    }    
}