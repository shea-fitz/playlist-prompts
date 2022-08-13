import React from 'react';
import { useState } from 'react';
import { Fade } from 'react-reveal';

const Intro = () => {

    const [visibility, setVisibility] = useState(false);

    function handleClick() {
        setVisibility(!visibility);
        console.log(visibility);
    }

return(
    <>
        <div className="intro" onClick={handleClick}>about</div>
        <Fade when={visibility}>
        <div className={visibility ? "intro-modal" : "hide"}>
            <div>
                Hello welcome to playlist prompts
            </div>
        </div>
        </Fade>
      
    </>
)
}

export default Intro;