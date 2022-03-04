import React from "react"
import { FaTwitter } from "react-icons/fa"
import { FaFacebook } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"

export default function Footer() {
    return <div className = "footerFlex">
        <div><FaTwitter size = {20}/></div>
        <div><FaFacebook size = {20}/></div>
        <div><FaInstagram size = {20}/></div>
        <div><FaGithub size = {20}/></div>
    </div>
}