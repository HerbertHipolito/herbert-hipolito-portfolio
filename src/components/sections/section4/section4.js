import React,{useState} from "react";
import './section4.css';
import "../../../../node_modules/video-react/dist/video-react.css";
import { Player } from 'video-react';

export default function Section4(){

    const [videoNumber, setVideoNumber] = useState(true);

    const adjustWidth = () =>{

        const width = window.innerWidth
        let videoWidth = 0

        if(width>=1100){
            videoWidth = width/3 
        }
        else if(width >= 800){
            videoWidth = width/2.5
        }else{
            videoWidth = width/1.4
        }

        return videoWidth

    }

    return <section id="section4">

        <h1>Meus projetos mobile</h1>
        <link rel="stylesheet" href="/css/video-react.css" />

        <div>
            <div id="section4-button-div">
                <button onClick={e => setVideoNumber(true)}>Projeto 1</button>
                <button onClick={e => setVideoNumber(false)}>Projeto 2</button>
            </div>
            <div id="section4-video">
                {videoNumber?
                <Player
                    playsInline
                    fluid={false}
                    width={adjustWidth()}
                    height={window.innerHeight*0.7}
                    src="https://github.com/HerbertHipolito/flashcard-bb/assets/94997683/d8395c19-7b7c-49bf-9516-1161df331aef"

                />:
                <Player
                    fluid={false}
                    width={adjustWidth()}
                    height={window.innerHeight*0.7}
                    playsInline
                    src="https://user-images.githubusercontent.com/94997683/227032316-bc44a21e-56ad-4a55-afff-d20101db1548.mp4"
                />}
            </div>
        </div>
    </section>

}