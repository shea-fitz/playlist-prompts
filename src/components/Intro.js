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
        about</div>


        <Fade when={visibility}>
        <div className={visibility ? "intro-modal" : "hide"}>
            <p>
            Playlist Prompts was started by <a href="https://www.are.na/shea" target="_blank">Shea Fitzpatrick</a> in 2020 and so far has taken form as:
            </p>

            <div className="list">
                <div className="list-item"><div className="year">[ongoing]</div><div>A collaborative collection on <a href="https://www.are.na/shea/playlist-prompts" target="_blank">Are.na</a></div></div>

                <div className="list-item"><div className="year">[2020]</div><div>A participatory <a href="https://tinyletter.com/playlistprompts" target="_blank">newsletter</a></div></div>

                <div className="list-item"><div className="year">[2021]</div><div>A poem co-written with <a href="https://www.are.na/mad">Mad</a> that was published in the <a href="https://store.are.na/products/are-na-annual-2021?variant=38246218563735" target="_blank">Are.na Annual</a>, with an accompanying <a href="https://www.are.na/mad/a-channel-that-is-a-gift" target="_blank">channel and playlist</a></div></div>

                <div className="list-item"><div className="year">[2022]</div><div>This website</div></div>
            </div>

            <p>Submissions and responses are welcomed on <a href="https://www.are.na/shea/playlist-prompts" target="_blank">Are.na</a>, where it began.</p>
{/* 
            <p className="credits">This site was designed and developed by Shea with support from <a href="https://www.jbell.life/" target="_blank">Julia Bell.</a>
            
            </p> */}


        </div>
        </Fade>
      
    </>
)
}

export default Intro;