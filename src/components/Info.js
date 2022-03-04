import React from "react";
import Zuck from "../images/zuck.jpg"
import "../styles.css"
import {MdMailOutline} from "react-icons/md"
import {FaLinkedin} from "react-icons/fa"

export default function Info() {
    return <div className = "infoFlex">
        <img className = "zuckImg" src = {Zuck}></img>
        <div className = "title">
            <h2 className = "zuckName">Corporate Lizard</h2>
            <small className = "ceoTag">CEO at Facebook</small>
            <br/>
            <small className="ioTag"><b>lizardMan.io</b></small>
            <br></br>
            <div className = "buttonFlexBox">
                <button className="btn"><MdMailOutline size = {20} className="mdMailOut"/>Email</button>
                <button className="linkBtn"><FaLinkedin size = {20} className = "faLi"/>LinkedIn</button>
            </div>
        </div>
    </div>
}
