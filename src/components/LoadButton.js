import React from 'react';
import Fade from 'react-reveal/Fade';


const LoadButton = ({prompts}) => {
return(
    <div className="prompt-list">
        {prompts && prompts.map(el => {
          return (<Prompt key={el.key} prompt={el.content}/>)
        })}
    </div>
)
}

export default LoadButton;