import React from 'react';
import { useState } from 'react';
import { Fade } from 'react-reveal';

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

    <div className="about" onClick={handleModal}>about</div>


        <Fade when={visibility}>
        <div className={visibility ? "intro-modal" : "hide"}>
            <p>
            Playlist Prompts was started by <a href="https://www.are.na/shea" target="_blank">Shea Fitzpatrick</a> in 2020 and so far has taken form as:
            </p>
               
            <ul className="list">
                <li><span className="year">[ ongoing ]</span>An ambient collaboration between <a href="https://www.are.na/shea/playlist-prompts" target="_blank">internet strangers</a></li>

                <li><span className="year">[ 2020 ]</span>A participatory <a href="https://tinyletter.com/playlistprompts" target="_blank">newsletter</a></li>

                <li><span className="year">[ 2021 ]</span>A poem co-written with Mad Hsia and published in the <a href="https://store.are.na/products/are-na-annual-2021?variant=38246218563735" target="_blank">Are.na Annual</a></li>
                <li><span className="year">[ 2022 ]</span>This website</li>
            </ul>

            <p>For now, submissions and responses are welcomed on <a href="https://www.are.na/shea/playlist-prompts" target="_blank">Are.na</a>, where it began.</p>

            <p className="credits">This site was designed and developed by Shea with support from <a href="https://www.jbell.life/" target="_blank">Julia Bell.</a>
            
            </p>


        </div>
        </Fade>
      
    </>
)
}

export default Intro;