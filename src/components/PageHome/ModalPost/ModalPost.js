import React, { useState } from "react";
import './ModalPost.css';
import { Modal } from "antd";
function ModalPost() {
    const [isModalOpenThinking, setIsModalOpenThinking] = useState(false);
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
        <div div className="ModalPost" >
            <form action="" className="create-post">
                <div className="title-post" style={{ marginLeft: '15px' }}>
                    <h2 style={{userSelect:'none'}}>What are you thinking</h2>
                </div>
                <div className="input-form">
                    <input type="text" placeholder="What's on your mind?" id="create-post" onClick={showModal} />
                    {/* <input type="submit" value="Submit" className="btn btn-post" /> */}
                </div>
            </form>
            <div className="showModal" >
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
            </div >
        </div>
    );
}

export default ModalPost;