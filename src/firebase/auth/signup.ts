import firebase_app from "@/config";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore/lite";

const auth = getAuth(firebase_app);
const db = getFirestore(firebase_app);

export default async function signUp(data:{username:string,email:string, password:string}){

    try{
        const result = await createUserWithEmailAndPassword(auth, data.email, data.password);
        const userRef = doc(db, `users/${result.user.uid}`);
        await setDoc(userRef,{
            displayName:data.username,
            email:result.user.email,
            uid:result.user.uid,
        });
        return result;

    }catch(error:any){
        console.log('CODE: ', error.code, " MESSAGE: ", error.message);
       return error;
    }
}