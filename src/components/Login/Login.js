import React from "react";
import './Login.scss';
import { GoogleOutlined, FacebookOutlined, GithubOutlined } from '@ant-design/icons';
import { auth, db } from "../Firebase/Config";
import { signInWithPopup, FacebookAuthProvider } from 'firebase/auth';
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
function Login() {

    const signInWithFaceBook = async () => {
        const fbProvider = new FacebookAuthProvider()
        const { operationType, providerId, user } = await signInWithPopup(auth, fbProvider)
        if (operationType === 'signIn') {
            try {
                addDoc(collection(db, "users"), {
                    providerId: providerId,
                    displayName: user.displayName,
                    email: user.email,
                    photoURL: user.photoURL,
                    uid: user.uid,
                    timestamp: serverTimestamp(),
                    // keyWord: generateKeywords(user.displayName.toLowerCase())
                });
            } catch (e) {
                console.error("Error adding document: ", e);
            }
        }
    }

    return (
        <div className="Login">
            <div class="form_container">
                <div class="logo_container">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSOmXbygKF-nLfSqarAFaUQ-Wo_Em-lGnv2hw8rfELiA&s" />
                </div>
                <div class="title_container">
                    <p class="title">Login to your Account</p>
                    <span class="subtitle">Get started with our app, just create an account and enjoy the experience.</span>
                </div>
                <div class="input_container">
                    <label class="input_label" for="email_field">Email</label>
                    <input placeholder="name@mail.com" title="Inpit title" name="input-name" type="text" class="input_field" id="email_field" />
                </div>
                <div class="input_container">
                    <label class="input_label" for="password_field">Password</label>
                    <input placeholder="Password" title="Inpit title" name="input-name" type="password" class="input_field" id="password_field" />
                </div>
                <button class="sign-in_btn">
                    <span>Sign In</span>
                </button>

                <div class="separator">
                    <hr class="line" />
                    <span>Or</span>
                    <hr class="line" />
                </div>
                <div className="sign_in">
                    <button title="Sign in with Google" class="sign-in_ggl">
                        <span><GoogleOutlined /></span>
                    </button>
                    <button title="Sign in with Facebook" class="sign-in_fbl" onClick={signInWithFaceBook}>
                        <span><FacebookOutlined /></span>
                    </button>
                    <button title="Sign in with Github" class="sign-in_ghl">
                        <span><GithubOutlined /></span>
                    </button>
                </div>
                <p class="note">Terms of use &amp; Conditions</p>
            </div>
        </div>
    );
}

export default Login;