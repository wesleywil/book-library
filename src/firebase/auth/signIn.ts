import firebase_app from "@/config";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";

const auth = getAuth(firebase_app);

export default async function signIn(email:string, password:string){
    try{
        const result = await signInWithEmailAndPassword(auth, email, password);
        localStorage.setItem("userLogged",JSON.stringify({
            logged_In:true,
            userId:result.user.uid
        }))
        return result;
    }catch(error:any){
        console.log('CODE: ', error.code, " MESSAGE: ", error.message);
        return error;
    }
}