import firebase_app from "../firebase/config";
import {signInWithEmailAndPassword, getAuth} from 'firebase/auth'

const auth = getAuth(firebase_app)

export const  signIn = async (email, password) => {
    let result = null, error = null;
    try{
        result = await signInWithEmailAndPassword(auth, email, password)
    }
    catch(err){
        console.log(err)
    }
  return {result, error}
}
