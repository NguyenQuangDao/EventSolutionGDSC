import React, { createContext, useContext, useEffect, useState, useRef } from "react";
import { signInWithPopup, FacebookAuthProvider, GoogleAuthProvider, GithubAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { auth, db } from "../components/Firebase/Config";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
const UserContext = createContext({})
export const useUserContext = () => useContext(UserContext)
export const ContextProivider = ({ children }) => {
    const id = uuidv4();
    const navigate = useNavigate()
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        const unsubcribe = onAuthStateChanged(auth, res => {
            if (res) {
                setLoading(false)
                const { displayName, email, password, photoURL, uid } = user;
                setUser({ displayName, email, password, photoURL, uid })
                navigate('/')
            }
            else {
                setLoading(false)
                navigate("/login")
            }
        })
        return () => {
            unsubcribe()
        }
    }, [])
    // registerUser
    const registerUser = async (email, password, name, birthday) => {
        setLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                addDoc(collection(db, "user"), {
                    displayName: name,
                    email: email,
                    // photoURL: photoURL,
                    uid: id,
                    birthday: birthday,
                    timestamp: serverTimestamp(),
                })
            })
            .then((res) => {
                console.log(res);
            })
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }
    //signInWithPassword
    const signInWithPassword = async (email, password) => {
        setLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((res) => {
                console.log(res);
                setLoading(false)
            })
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }
    // signInWithGoogle
    const signInWithGoogle = async () => {
        const ggProvider = new GoogleAuthProvider();
        await signInWithPopup(auth, ggProvider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // IdP data available using getAdditionalUserInfo(result)
                // ...
                addDoc(collection(db, "user"), {
                    displayName: user.displayName,
                    email: user.email,
                    photoURL: user.photoURL,
                    uid: user.uid,
                    timestamp: serverTimestamp(),
                })
            }).catch((error) => {
                console.log('error:', error);
            });

    }
    // signInWithFaceBook
    const signInWithFaceBook = async () => {
        const fbProvider = new FacebookAuthProvider()
        await signInWithPopup(auth, fbProvider).then((res) => {
            const user = res.user;
            addDoc(collection(db, "users"), {
                displayName: user.displayName,
                email: user.email,
                photoURL: user.photoURL,
                uid: user.uid,
                timestamp: serverTimestamp(),
                // keyWord: generateKeywords(user.displayName.toLowerCase())
            });
        })

    }
    const signInWithGithub = async () => {
        const ghProvider = new GithubAuthProvider();
        signInWithPopup(auth, ghProvider)
            .then((result) => {

            }).catch((error) => {
                console.log('error: ', error);
            });
    }

    const contextValue = {
        user,
        loading,
        registerUser,
        signInWithPassword,
        signInWithGoogle,
        signInWithFaceBook,
        signInWithGithub
    }
    return (
        <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
    )
}