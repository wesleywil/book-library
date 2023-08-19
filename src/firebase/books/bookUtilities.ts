import { getFirestore, doc, collection, getDoc, updateDoc, arrayUnion } from "firebase/firestore/lite";
import firebase_app from "@/config";

const db = getFirestore(firebase_app);

export async function createUserBook(userDocID:string, bookData:any){
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