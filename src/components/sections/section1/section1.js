import React from "react";
import './section1.css'

export default function Section1(){

    return <section id="section1">
        <div id="section1-child">
            <p id="welcome">BEM VINDO, EU SOU<br/></p>
            <p id="my-name-p">HERBERT HIPÓLITO</p>
            <p id="role">MACHINE LEARNING</p>
            <div id="btn-div">
                <a href="https://www.linkedin.com/in/herbert-hip%C3%B3lito-14aa86226/" id="linkedin-btn" className="btn-social-media">linkedin</a>
                <a href="https://github.com/HerbertHipolito" id="Github-btn" className="btn-social-media">Github</a>
            </div>
        </div>
    </section>

}