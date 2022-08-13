import React from 'react';
import Fade from 'react-reveal/Fade';

const Prompt = ({prompt}) => {
return(
    <>
    <Fade cascade>
        <div className="prompt">
            <p>{prompt}</p>
        </div>
    </Fade>
    
    </>
)
}

export default Prompt;