import React from "react";
import './NewPosts.scss';
import { Avatar, Col, Row } from 'antd'
import { EyeOutlined, LikeOutlined, DislikeOutlined } from '@ant-design/icons'
import ImgLike from '../../Share/Img/like.png'
import Imgdislike from '../../Share/Img/dislike.png'
function NewPosts() {
    return (
        <div id="NewPosts">
            <div className="NewPosts">
                <div id="header_NewPosts">

                    <Row className="header_NewPosts">
                        <Avatar>
                            {/* {data.photoURL ? '' : data.displayName?.charAt(0).toUpperCase()} */}
                            Đ
                        </Avatar>
                        <Col className="NameUserNewPosts_TimeNewPosts">
                            <p className="NameUserNewPosts">
                                nguyen quang dao nguyen quang dao nguyen quang dao nguyen quang dao
                            </p>
                            <p className="TimeNewPosts">
                                10:44
                            </p>
                        </Col>
                    </Row>
                    <span className="View_NewPosts"><EyeOutlined className="EyeOutlined_NewPosts" /> 11303</span>
                </div>
                <div className="articleTitle_NewPosts">
                    <p>Đẳng cấp dân chơi</p>
                </div>
                <img className="Img_NewPosts" src="http://1.bp.blogspot.com/-eLMXThfTUAY/VFZGaSF--KI/AAAAAAAAAnQ/mswkj1KIVic/s1600/hinh-anh-3d-dep-sang-tao-cho-pc-13.jpg" />
                <div className="Seen_Like_NewPosts">
                    <span className="Like_NewPosts"><img className="img_Like_NewPosts" src={ImgLike} /> <p>112</p></span>
                    <span className="Count_dislike"><img className="img_DisLike_NewPosts" src={Imgdislike} /> <p>456</p></span>
                </div>
                <div className="handle_emoticon_NewPosts">
                    <button className="handle_Like_NewPosts"><LikeOutlined /> Like</button>
                    <button className="handle_Dislike_NewPosts"><DislikeOutlined /> Dislike</button>
                </div>
                <div className="form_input">
                    {/* <form>
                        <input type="text" name="text" class="input_NewPosts" placeholder="Type here!" />
                        <button>submit</button>
                    </form> */}
                </div>
            </div>
        </div>
    )
}
export default NewPosts