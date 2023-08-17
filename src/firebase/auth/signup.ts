import firebase_app from "@/config";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

const auth = getAuth(firebase_app);

export default async function signUp(email:string, password:string){

    try{
        const result = await createUserWithEmailAndPassword(auth, email, password);
        return result;

    }catch(error:any){
        console.log('CODE: ', error.code, " MESSAGE: ", error.message);
       return error;
    }
}