import React from 'react'
import './Posts.scss'
import { Col, Row, Tooltip, Avatar } from 'antd';
import { EyeOutlined } from '@ant-design/icons';
function Posts() {
    return (
        <div id='Posts' >
            <Col className='Layout_posts'>
                <Row className='Big_Post' >
                    <img className='Img_Big_Post' alt="example" src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp" />
                    <div className='ConTent_Post'>
                        <div className='View_post'>1120 <EyeOutlined style={{ color: 'black' }} /></div>
                        <div className='Post_Title'>
                            <Tooltip title='asdsd'>
                                <p>
                                Event Hoa hậu thế giới 
                                </p>
                            </Tooltip>
                        </div>
                        <div className='Post_Author'>
                            <div className='DataUser'>
                                <Avatar className='avtUser' >
                                    {/* {data.photoURL ? '' : data.displayName?.charAt(0).toUpperCase()} */}
                                    Đ
                                </Avatar>
                                <p className='displayNameUser'>
                                    <Tooltip >
                                        {/* {data.displayName} */}
                                        <div className='Name_Up_Post'>nguyen quang dao</div>
                                        <div className='Time_Post'>11:20</div>
                                    </Tooltip>
                                </p>
                            </div>
                        </div>
                    </div>
                </Row>
                <Row className='Small_Post' >
                    <Col className='Small_Post_child' >
                        <img src='https://tse1.mm.bing.net/th?id=OIP.aJ7E6Bom_PPdszyR2nhyWwHaEo&pid=Api&P=0' className='Img_Small_Post_child' />
                        <div className='ConTent_Small_Post'>
                            <div className='View_Small_Post'>
                                1100 <EyeOutlined style={{ color: 'black' }} />
                            </div>
                            <div className='Small_Post_Title'>
                                <Tooltip title='asdsd'>
                                    <p>
                                   Nội thất tinh tế, mới nhất 2023
                                    </p>
                                </Tooltip>
                            </div>
                            <div className='Post_Author_Small'>
                                <div className='Smaill_Post_DataUser'>
                                    <Avatar className='Smaill_Post_avtUser' >
                                        {/* {data.photoURL ? '' : data.displayName?.charAt(0).toUpperCase()} */}
                                        Đ
                                    </Avatar>
                                    <p className='Smaill_Post_displayNameUser'>
                                        <Tooltip >
                                            {/* {data.displayName} */}

                                            <div className='Name_Up_Post'>
                                                <Tooltip>
                                                    nguyen quang dao
                                                </Tooltip>
                                            </div>
                                            <div className='Time_Post'>11:20</div>
                                        </Tooltip>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col className='Small_Post_child' >
                        <img src='https://tse4.mm.bing.net/th?id=OIP.w1Du5VS0IVbeS98ZOhP2-wHaEo&pid=Api&P=0' className='Img_Small_Post_child' />
                        <div className='ConTent_Small_Post'>
                            <div className='View_Small_Post'>
                                1100 <EyeOutlined style={{ color: 'black' }} />
                            </div>
                            <div className='Small_Post_Title'>
                                <Tooltip title='asdsd'>
                                    <p>
                                    Deco đẹp, mới nhất 2023
                                    </p>
                                </Tooltip>
                            </div>
                            <div className='Post_Author_Small'>
                                <div className='Smaill_Post_DataUser'>
                                    <Avatar className='Smaill_Post_avtUser' >
                                        {/* {data.photoURL ? '' : data.displayName?.charAt(0).toUpperCase()} */}
                                        Đ
                                    </Avatar>
                                    <p className='Smaill_Post_displayNameUser'>
                                        <Tooltip >
                                            {/* {data.displayName} */}

                                            <div className='Name_Up_Post'>
                                                <Tooltip>
                                                    nguyen quang dao
                                                </Tooltip>
                                            </div>
                                            <div className='Time_Post'>11:20</div>
                                        </Tooltip>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col className='Small_Post_child' >
                        <img src='https://tse4.mm.bing.net/th?id=OIP._btTgCZ2jDkpSu5PHVtCGAHaKm&pid=Api&P=0' className='Img_Small_Post_child' />
                        <div className='ConTent_Small_Post'>
                            <div className='View_Small_Post'>
                                1100 <EyeOutlined style={{ color: 'black' }} />
                            </div>
                            <div className='Small_Post_Title'>
                                <Tooltip title='asdsd'>
                                    <p>
                                        Người yêu anh long 
                                    </p>
                                </Tooltip>
                            </div>
                            <div className='Post_Author_Small'>
                                <div className='Smaill_Post_DataUser'>
                                    <Avatar className='Smaill_Post_avtUser' >
                                        {/* {data.photoURL ? '' : data.displayName?.charAt(0).toUpperCase()} */}
                                        Đ
                                    </Avatar>
                                    <p className='Smaill_Post_displayNameUser'>
                                        <Tooltip >
                                            {/* {data.displayName} */}

                                            <div className='Name_Up_Post'>
                                                <Tooltip>
                                                    nguyen quang dao
                                                </Tooltip>
                                            </div>
                                            <div className='Time_Post'>11:20</div>
                                        </Tooltip>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Col>
        </div>
    );
}

export default Posts;