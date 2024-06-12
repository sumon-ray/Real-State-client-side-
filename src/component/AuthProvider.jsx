import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
// import { GoogleAuthProvider } from "firebase/auth/web-extension";
import useAxiosPublic from "../axios/useAxiosPublic";
import axios from "axios";
import { getToken } from "firebase/app-check";
import useAxiosCommon from "../hook/useAxiosCommon";
// import { GoogleAuthProvider } from "firebase/auth/web-extension";

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    console.log(user)
    const [loader,setLoader] = useState(true);
    const [reload,setReload] =useState(false)
const axiosCommon=useAxiosCommon()
    const provider = new GoogleAuthProvider();


    const axiosPublic = useAxiosPublic()
    const createUser = (email,password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const userUpdateProfile = (name,image)=>{
        
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: image
          })
    }

//    get token from server
  
//   const getToken = async email => {
//     const { data } = await axios.post(
//       `${import.meta.env.VITE_API_URL}/jwt`,
//       { email },
//       { withCredentials: true }
//     )
//     return data
//   }
// save user

const saveUser = async user => {
    const currentUser = {
        name:user?.displayName,
        email:user?.email,
        fraud:"fraud",
        role:"guest",
        status:"verified",
    }
    const {data} = await axios.put(`${import.meta.env.VITE_API_URL}/user`,currentUser)
    return data
}


    const login = (email, password) => {
        setLoader(true)
       return signInWithEmailAndPassword(auth, email, password)
    }

    const googlelogin = () => {
        setLoader(true)
         return signInWithPopup(auth, provider)
         
    }
    const logout = () => {
        setLoader(true)
        setUser(null)
        signOut(auth)
    }

    useEffect(()=>{
        const unsubscrive =onAuthStateChanged(auth, (user) => {
            // if (user) {
                getAuth()
                saveUser(user)
            if (user) {
                setUser(user)
               const userInfo ={email:user.email};
               axiosCommon.post('/jwt',userInfo)
               .then(res => {
                if(res.data.token){
                    localStorage.setItem('token',res.data.token);
                }
               })
            }else{
                localStorage.removeItem('token');
            }
            // console.log(user);
            setLoader(false)
             
            // }
          });
          return () => unsubscrive();
       },[axiosPublic])


    const allvalue = {user,loader,setReload,createUser,login,googlelogin,logout,userUpdateProfile}
    return (
        <div>
        <AuthContext.Provider value={allvalue}>
         {children}
        </AuthContext.Provider>
        {/* <ToastContainer></ToastContainer> */}
     </div>
    );
};

export default AuthProvider;