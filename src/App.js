import './App.css';
import './tachyons.css';
import { useEffect, useState } from 'react';
import axios from 'axios';


function App() {

  const [prompts, setPrompts] = useState(null);


  useEffect(() => {
    axios.get('https://api.are.na/v2/channels/playlist-prompts').then(res => {
      setPrompts(res.data.contents);
    }).catch(err => console.log(err));
  }, []);


  return (
    <div>
      <h1>playlist prompts</h1>

      <div>
        {prompts && prompts.map(el => {
          return (<p key={el.key}>
            {el.content}
            </p>)
        })}
      </div>
    </div>
  );
}

export default App;
