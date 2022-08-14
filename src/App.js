import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

import Intro from './components/Intro';
import Prompt from './components/Prompt';
import Paginate from './components/Paginate';


function App() {
  const postsPerPage = 100;
  const [prompts, setPrompts] = useState(null);
  const [total, setTotal] = useState(1);
  const [page, setPage] = useState(1);

  function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

  useEffect(() => {
    axios.get('https://api.are.na/v2/channels/playlist-prompts', 
    { params: {
      per: postsPerPage,
      page: page}
    }).then(res => {
      setPrompts(shuffle(res.data.contents));
      setTotal(Math.ceil(res.data.length / postsPerPage));
    }).catch(err => console.log(err));
  }, [page]);

  

  return (
    <div className="wrapper">
      <div className="prompt-list">
        {prompts && prompts.map(el => {
          return (<Prompt key={el.key} prompt={el.content}/>)
        })}
      </div>
      <Intro/>

      <Paginate page={page} total={total} setPage={setPage}/>

    </div>
  );
}

export default App;
