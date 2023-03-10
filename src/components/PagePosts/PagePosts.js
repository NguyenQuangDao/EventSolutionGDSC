import React from "react";
import './PagePosts.scss';
import NavBar from "../Share/NavBar/NavBar";
import ModalPost from "../PageHome/ModalPost/ModalPost";
import NewPosts from "./NewPosts/NewPosts";
function PagePosts() {
    return (
        <div className="PagePosts">
            <NavBar />
            <ModalPost/>
            <NewPosts/>

        </div>
    );
}

export default PagePosts;