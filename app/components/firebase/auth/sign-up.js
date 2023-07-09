import firebase_app from "../config";
import {createUserWithEmailAndPassword, getAuth, updateProfile} from 'firebase/auth'

const auth = getAuth(firebase_app)

export const  signUp = async (email, password, userName, img) => {
    let result = null, error = null;    
    try{
        result = await createUserWithEmailAndPassword(auth, email, password)
        updateProfile(auth.currentUser, {
            displayName: userName, photoURL: img
        })
    }
    catch(err){
        console.log(err)
    }
  return {result, error}
}
