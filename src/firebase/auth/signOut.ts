import { signOut,getAuth } from "firebase/auth";
import firebase_app from "@/config";

const auth = getAuth(firebase_app);

export default async function handleSignOut(){
    const result = await signOut(auth);
    return result;
}