import React, { useState } from "react";
import './NavBar.scss'
import { Modal } from "antd";
function NavBar() {
    const [isModalOpenSignOuts, setIsModalOpenSignOut] = useState(false);
    // isModalOpenSignOut
    const isModalOpenSignOut = () => {
        setIsModalOpenSignOut(true)
    }
    const handleOkSignOut = () => {
        setIsModalOpenSignOut(false)
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
                    <a href="">Home</a>
                    <a href="">Posts</a>
                    <a href="">Camera</a>
                    <a href="">Contact</a>
                </div>
                <div className="logOut" onClick={isModalOpenSignOut}>
                    <p className="btn btn-logOut">Sign out</p>
                </div>
                <Modal title="Basic Modal" open={isModalOpenSignOuts} onCancel={handleCancelSignOut} onOk={handleOkSignOut} closable={false} >
                    <p>Bạn có chắc muốn đăng xuất?</p>
                </Modal>
            </div>
          

           



        </div>
    );
}

export default NavBar;