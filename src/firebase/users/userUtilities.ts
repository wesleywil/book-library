import { doc, getDoc, getFirestore } from "firebase/firestore/lite";
import firebase_app from "@/config";

const db = getFirestore(firebase_app);

export async function getUserInfo(userDocId:string){
    try{
        const userRef = doc(db, "users", userDocId);
        const userDoc = await getDoc(userRef);

        if(userDoc.exists()){
            const userData = userDoc.data();
            return userData;
        }
    }catch(error:any){
        console.log('CODE: ', error.code, " MESSAGE: ", error.message);
        return error;
    }
}