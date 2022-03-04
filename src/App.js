import React from "react"
import Info from "./components/Info"
import Interests from "./components/Interests"
import About from "./components/About"
import Footer from "./components/Footer"
import "./styles.css"

export default function App() {
    return <div className="bigFlex">
        <div className = "appFlex">
            <Info/>
            <About/>
            <Interests/>
            <Footer/>
        </div>
    </div>
}
