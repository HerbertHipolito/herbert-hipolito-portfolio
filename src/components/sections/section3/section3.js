import './section3.css'
import React from 'react'

export default function section3(){

    return <section id="section3">

        <p id="section3-title">Meus Projetos</p>

        
        <div className='section3-data-back-end'>    
            <div id="section3-buttons">
                <button type="text" id='back-end-button'> Back-end </button>
            </div>
            <div id="my-projects-back">

                <div className='project-class-back'>
                    <p className='project-title'>Flash-cards</p>
                    <p className='project-text'>Aplicação que auxilia o usuário no seu aprendizado de inglês por meio de Flash-cards.
                        O usuário pode cadastrar palavras por meio de link de youtube e selecionar as desejadas para poder revê-las.
                    </p>
                    <a href='https://github.com/HerbertHipolito/flash-card-MERN'>Link do Github</a>
                </div>    
                <div className='project-class-back'>
                    <p className='project-title'>Blog</p>
                    <p className='project-text'>Um simples blog para o compartilhamento de opiniões e notícias.
                        Cada usuário pode cadastrar, remover e comentar blogs de outras pessoas.
                    </p>
                    <a href='https://github.com/HerbertHipolito/my-blog'>Link do Github</a>
                </div>    
                <div className='project-class-back'>
                    <p className='project-title'>Registro de usuários</p>
                    <p className='project-text'>Aplicação simples feita com React e Node.js para simular um sistema de cadastro.</p>
                    <a href='https://github.com/HerbertHipolito/Users-registration-page-using-React'>Link do Github</a>
                </div>    
            </div>

        </div>

        <div className='section3-data-back-end'>    
            <div id="section3-buttons">
                <button>C. de dados</button>
            </div>
            <div id="my-projects-back">

                <div className='project-class-back'>
                    <p className='project-title-cc'>Classificação de nodulos Benignos e malignos</p>
                    <p className='project-text'>Construção e uso de Rede Neurais Convulasionais para a classificação de nódulos benignos e malígnos com base em
                    imagens de tumografias de pulmão.
                    </p>
                    <a href='https://github.com/HerbertHipolito/Classification-of-lung-nodules'>Link do Github</a>
                </div>    
                <div className='project-class-back'>
                    <p className='project-title-cc'>Predição da evapotranspiração de referência</p>
                    <p className='project-text'>Construção e uso de Rede Neurais multicamadas para estimação da Evapotranspiração de Referência para 16 
                    estações metereolôgicas do Ceará utilizando temperatura como variável climática.
                    </p>
                    <a href='https://github.com/HerbertHipolito/prediction-evapotranspiration-'>Link do Github</a>
                </div>    
                <div className='project-class-back'>
                    <p className='project-title-cc'>Uso de heurísticas para solução do Caixeiro viajante</p>
                    <p className='project-text'>Implementação das principais heuristicas para a solução do problema do Caixeiro-viajante, no caso, Greedy, Hill Climbing, VND, RMS e GRASP</p>
                    <a href='https://github.com/HerbertHipolito/Travelling-Salesman'>Link do Github</a>
                </div>  

            </div>
        </div>

    </section>

}