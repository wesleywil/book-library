import { signOut,getAuth } from "firebase/auth";
import firebase_app from "@/config";

const auth = getAuth(firebase_app);

export default async function handleSignOut(){
    const result = await signOut(auth);
    localStorage.setItem("userLogged",JSON.stringify({
        logged_In:false,
        userId:0
    }));
    return result;
}