import React, { useState } from "react";
import './NavBar.scss'
import { Modal } from "antd";
import SlideBanner from "../SlideBanner/SlideBanner";
function NavBar() {
    const [isModalOpenThinking, setIsModalOpenThinking] = useState(false);
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
    // isModalOpenThinking
    const showModal = () => {
        setIsModalOpenThinking(true);
    };
    const handleOk = () => {
        setIsModalOpenThinking(false);
    };
    const handleCancel = () => {
        setIsModalOpenThinking(false);
    };
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
            </div>
                    {/* <SlideBanner/> */}
            <form action="" className="create-post">
                <div className="title-post" style={{ marginLeft: '15px' }}>
                    <h2>What are you thinking</h2>
                </div>
                <Modal title="Basic Modal" open={isModalOpenSignOuts} onCancel={handleCancelSignOut} onOk={handleOkSignOut} closable={false} >
                    <p>Bạn có chắc muốn đăng xuất?</p>
                </Modal>
                <div className="input-form">
                    <input type="text" placeholder="What's on your mind, Diana?" id="create-post" onClick={showModal} />
                    {/* <input type="submit" value="Submit" className="btn btn-post" /> */}
                </div>
            </form>

            {/* <!-- ================ MODAL POST HIDDEN ================== --> */}
            <div className="showModal">
                <Modal className="show-form" width={620} open={isModalOpenThinking} onOk={handleOk} onCancel={handleCancel}>
                    <h1 className="title-form-post">
                        {/* {name người dùng,} */}
                        Bạn đang nghĩ gì thế?
                    </h1>
                    <div className="content-form-post">
                        <label htmlFor="">Title post</label>
                        <input type="text" className="input-title" placeholder="Enter input title ..." required />
                        <label htmlFor="">Content post</label>
                        <textarea className="input-body" cols="10" rows="10" placeholder="Enter input body" required />
                        <input type="button" className="btn btn-post" value="Submit" />
                    </div>
                </Modal>
            </div>



        </div>
    );
}

export default NavBar;