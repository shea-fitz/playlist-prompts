import React from 'react';
import { useState } from 'react';
import { Fade } from 'react-reveal';

import tape from '../img/tape.svg'

const Intro = () => {

    const [visibility, setVisibility] = useState(false);

    function handleModal() {
        setVisibility(!visibility);
        console.log(visibility);
    }

return(
    <>
    <div className="header">
        <a href="#top" className="title">Playlist Prompts</a>
    </div>

    <div className="about" onClick={handleModal}>
        
        <img src={tape} className="illo"/>
        <span className="label">about</span></div>


        <Fade when={visibility}>
        <div className={visibility ? "intro-modal" : "hide"}>
            <p>
            Playlist Prompts is a collection of very specific playlist ideas started by <a href="https://www.are.na/shea" target="_blank">Shea</a> in 2020 and contributed to by many. 
            So far it has taken form as:
            </p>

            <div className="list">
                <div className="list-item"><div className="year">[ongoing]</div><div>An open channel on <a href="https://www.are.na/shea/playlist-prompts" target="_blank">Are.na</a></div></div>

                <div className="list-item"><div className="year">[2020]</div><div>A participatory newsletter (RIP TinyLetter)</div></div>

                <div className="list-item"><div className="year">[2021]</div><div>A poem published in the <a href="https://store.are.na/products/are-na-annual-2021?variant=38246218563735" target="_blank">Are.na Annual</a>, with an accompanying <a href="https://www.are.na/mad/a-channel-that-is-a-gift" target="_blank">channel and playlist</a></div></div>

                <div className="list-item"><div className="year">[2022]</div><div>This website (refactored in 2024)</div></div>
            </div>

            <p>Submissions and responses are welcomed on <a href="https://www.are.na/shea/playlist-prompts" target="_blank">Are.na</a>.</p>

            <div className="close-modal"><button onClick={handleModal}>CLOSE</button></div>


        </div>
        </Fade>
      
    </>
)
}

export default Intro;