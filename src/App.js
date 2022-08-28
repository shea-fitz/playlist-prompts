import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

import Intro from './components/Intro';
import Prompt from './components/Prompt';
import Paginate from './components/Paginate';


function App() {
  let postsPerPage = 100;
  const [prompts, setPrompts] = useState(null);
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [choice, setChoice] = useState(false);

  function handleChoice() {
    setChoice(!choice);
    console.log(choice);
  }
 

  useEffect(() => {
    const loadPrompts = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get(
          `https://api.are.na/v2/channels/playlist-prompts`,
        { params: {
          per: postsPerPage,
          page: page
        }
      })  
        setPrompts(shuffle(res.data.contents));
        setErrorMsg('');
      } catch (error) {
        setErrorMsg('Having some loading trouble, please try again :)');
      } finally {
        setIsLoading(false);
      }
    };

    loadPrompts();
  }, [page]);

  const loadMore = () => {
    setPage((page) => page + 1);
  };

   // shuffle prompts on refresh
   const shuffle = (contents) => {
    let currentIndex = contents.length, randomIndex;
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      // And swap it with the current element.
      [contents[currentIndex], contents[randomIndex]] = [
        contents[randomIndex], contents[currentIndex]];
    }
    return contents;
  }

  return (
    <div className="wrapper">
      <div id="top"></div>

      <div className={!choice ? "prompt-list" : "hide"}>
        {prompts && prompts.map(el => {
          return (<Prompt key={el.key} prompt={el.content}/>)
        })}

        <div>
          <button className={isLoading ? 'loading' : 'load-more'} onClick={loadMore}>
            {isLoading ? 'Playing the queue...' : 'Load more'}
          </button>
        </div>

      </div>

      <div className={choice ? "single-prompt" : "hide"}>
        <Prompt prompt={'this prompt has been chosen for you'}/>
      </div>

      <Intro/>

      <div className="choose" onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});  handleChoice();
        }}>{choice ? 'choose one myself' : 'choose one for me'}</div>


    </div>
  );
}

export default App;
