import React from "react";
import NavBar from "../Share/NavBar/NavBar";
import SlideBanner from './SlideBanner/SlideBanner'
import ModalPost from './ModalPost/ModalPost'
import PostHeader from './PostHeader/PostHeader';
import Posts from './Posts/Posts';
import Footer from './Footer/Footer';
function PageHome() {
    return (
        <>
            <NavBar />
            <SlideBanner/>
            <ModalPost/>
            <PostHeader />
            <Posts />
            <Footer />
        </>
    );
}

export default PageHome;