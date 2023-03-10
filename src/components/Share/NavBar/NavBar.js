import React, { useState } from "react";
import './NavBar.scss'
import { auth } from "../../../Firebase/Config";
import { Modal } from "antd";
import { Link, useNavigate } from "react-router-dom";
function NavBar() {
    const navigateSignout = useNavigate()
    const [isModalOpenSignOuts, setIsModalOpenSignOut] = useState(false);
    // isModalOpenSignOut
    const isModalOpenSignOut = () => {
        setIsModalOpenSignOut(true)
    }
    const handleOkSignOut = () => {
        auth.signOut()
        navigateSignout("/login")
    }
    const handleCancelSignOut = () => {
        setIsModalOpenSignOut(false)
    }

    return (
        <div className="warpper">
            <div id="top">
                <div className="logo">
                    <h3>Gateway</h3>
                </div>
                <div className="nav">
                    <Link to="/">Home</Link>
                    <Link to="/posts">Posts</Link>
                    <Link to='/camera'>Camera</Link>
                    <Link to="/contact">Contact</Link>
                </div>
                <div className="logOut" onClick={isModalOpenSignOut}>
                    <p className="btn btn-logOut">Sign out</p>
                </div>
                <Modal title="Sign out" open={isModalOpenSignOuts} onCancel={handleCancelSignOut} onOk={handleOkSignOut} closable={false} >
                    <p>Are you sure you want to sign out?</p>
                </Modal>
            </div>






        </div>
    );
}

export default NavBar;