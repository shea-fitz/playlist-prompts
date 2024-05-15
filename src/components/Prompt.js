import React from 'react';
import Fade from 'react-reveal/Fade';

const Prompt = ({prompt, key}) => {
return(
    <>
    <Fade cascade>
        <div className="prompt">
            <p className="prompt-text">{prompt}</p>
        </div>
    </Fade>
    
    </>
)
}

export default Prompt;