import React from 'react';
import Fade from 'react-reveal/Fade';

import Prompt from './Prompt';

const PromptList = ({prompts}) => {
return(
    <div className="prompt-list">
        {prompts && prompts.map(el => {
          return (<Prompt key={el.key} prompt={el.content}/>)
        })}
    </div>
)
}

export default PromptList;