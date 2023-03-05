import React, { useRef, useState } from "react";
import './Register.scss';
import { Link, useNavigate } from 'react-router-dom'
import { FileImageOutlined } from "@ant-design/icons";
import { useUserContext } from "../../../Context/userContext";
// import { auth, db } from "../Firebase/Config";
function Register() {
    const { registerUser } = useUserContext()
    const navigate = useNavigate()
    const [checkPassword, setCheckPassword] = useState(false)
    const emailRef = useRef();
    const passwordRef = useRef();
    const PasswordConfirmRef = useRef();
    const nameRef = useRef();
    const birthdayRef = useRef()
    const onSubmitRegister = async (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const PasswordConfirm = PasswordConfirmRef.current.value;
        const name = nameRef.current.value;
        const birthday = birthdayRef.current.value;
        if(password != PasswordConfirm){
            setCheckPassword(true)
            return
        }
        if (email && password && name && birthday) await registerUser(email, password, name, birthday)
        navigate("/")
    }
    return (
        <div className="register">
            <div className="form_container">
                <div className="page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins">
                    <div className="wrapper wrapper--w680">
                        <div className="card card-4">
                            <div className="card-body">
                                <div className="logo_container">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSOmXbygKF-nLfSqarAFaUQ-Wo_Em-lGnv2hw8rfELiA&s" />
                                    <h2 className="title">Registration Form</h2>
                                </div>
                                <form onSubmit={e => onSubmitRegister(e)}>
                                    <div className="row row-space">
                                        <div className="col-2">
                                            <div className="input-group">
                                                <label className="label">Username</label>
                                                <input className="input--style-4" type="text" name="username" required ref={nameRef}/>
                                            </div>
                                        </div>
                                        <div className="col-2">
                                            <div className="input-group">
                                                <label className="label">Email</label>
                                                <input className="input--style-4" type="email" name="email" required ref={emailRef}/>
                                            </div>
                                        </div>
                                        <div className="col-2">
                                            <div className="input-group">
                                                <label className="label">Password </label>
                                                <input className="input--style-4" type="text" name="password" ref={passwordRef}/>
                                                {checkPassword ? <p style={{ fontSize: '0.8rem', color: "red", marginTop: '5px' }}>*Passwords are not the same</p> : ''}
                                            </div>
                                        </div>
                                        <div className="col-2">
                                            <div className="input-group">
                                                <label className="label">Password confirm</label>
                                                <input className="input--style-4" type="text" name="password" ref={PasswordConfirmRef}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row row-space">
                                        <div className="col-2">
                                            <div className="input-group">
                                                <label className="label">Birthday</label>
                                                <div className="input-group-icon">
                                                    <input className="input--style-4 js-datepicker" type="date" name="birthday" ref={birthdayRef}/>
                                                    <i className="zmdi zmdi-calendar-note input-icon js-btn-calendar"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-2">
                                            <div className="input-group">
                                                <label className="label">photoURL</label>
                                                <div className="p-t-10">
                                                    <FileImageOutlined style={{ fontSize: '40px', cursor: 'pointer' }} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-t-15">
                                        <button className="register_btn" type="submit">Register</button>
                                    </div>
                                    <div style={{ textAlign: 'center', marginTop: '30px' }}>
                                        <p style={{ fontSize: '0.8rem' }}>You already have an account? <Link to='/login'>Sign in</Link></p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <script src="vendor/jquery/jquery.min.js"></script>
                <script src="vendor/select2/select2.min.js"></script>
                <script src="vendor/datepicker/moment.min.js"></script>
                <script src="vendor/datepicker/daterangepicker.js"></script>
                <script src="js/global.js"></script>
            </div>
        </div>
    );
}

export default Register;