import React from 'react';
import Fade from 'react-reveal/Fade';

import Prompt from './Prompt';

const ChosenPrompt = ({prompt, key}) => {
return(
    <div className="single-prompt">
        <Prompt key={key} prompt={prompt}/>
    </div>
)
}

export default ChosenPrompt;