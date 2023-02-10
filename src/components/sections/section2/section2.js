import './section2.css'
import React from 'react';


export default function Section2(){
    return <section id="section2">
        
        <p id='section2-title'>Um pouco sobre mim</p>

        <div id="section2-elements">
            <p id="section2-main-text">
            &nbsp;&nbsp;&nbsp; Amante de tecnologias, estou sempre procurando aprender e evoluir meus conhecimentos. 
            Gosto de desafios e de resolver problemas, tanto da área da matemática quanto de programação, procurando sempre a solução mais viável.<br/>
            &nbsp;&nbsp;&nbsp; Atualmente estou no Mestrado em Métodos Quantitativos com ênfase em Inteligência Computacional na Universidade Federal do Ceará (UFC), 
            tenho uma base bem forte em matemática, estatística e computação, o que me fez estudar sobre a área de Ciência de dados e Machine Learning, inclusive sendo tema para o meu TCC. Também 
            tenho uma grande afinidade para área de desenvolvimento web (FULL-STACK), mais especificamente com Node.js e MongoDB no BACK-END e ReactJS e CSS no FRONT-END.
            Alguns dos projetos que desenvolvi de ambas áreas estão disponíveis no meu Github!
            </p>
            <div id="buttons-div">
                <a href="pdfs\Herbert-Hípolito-Full-End.pdf" download="Herbert currículo Full-Stack"><button>Currículo - FULL-Stack</button></a>
                <a href="pdfs\Herbert-Hípolito-Ciencia-de-Dados.pdf" download="Herbert currículo CD"><button >Currículo - Ciência de dados</button></a>
            </div>
        </div>
    </section>
}