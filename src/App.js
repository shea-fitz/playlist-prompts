import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

import Intro from './components/Intro';
import Prompt from './components/Prompt';
import Overlay from './components/Overlay';


function App() {
  let postsPerPage = 100;
  const [prompts, setPrompts] = useState(null);
  const [page, setPage] = useState(0);

  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const [choice, setChoice] = useState(false);

  const [total, setTotal] = useState(null);
  const [random, setRandom] = useState(null); 

  function handleChoice() {
    setChoice(!choice);
    console.log(choice);
  }

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
      if(!prompts) {
        setTotal(res.data.length)
        setPrompts(shuffle(res.data.contents));
      } else {
        shuffle(setPrompts((prompts) => [...prompts, ...res.data.contents]));
      }
        setErrorMsg('');
      } catch (error) {
        setErrorMsg('Having some loading trouble, please try again :)');
      } finally {
        setIsLoading(false);
      }
    };

    loadPrompts();
    console.log(prompts);
  }, [page]);

  const loadMore = () => {
    setPage((page) => page + 1);
  };

  const generateRandom = async () => {
    const random_index = Math.floor(Math.random() * total);
      try { 
      const res = await axios.get(
          `https://api.are.na/v2/channels/playlist-prompts`,
        { params: {
          per: 1,
          page: random_index
        }
      })  
      setRandom(res.data.contents); 
    } catch(error) {
      setErrorMsg('Having some loading trouble, please try again :)');
    }
  }

  return (
    <div className="wrapper">

      {/* Link to top for scrolling */}
      <div id="top"></div>

      {/* <Overlay/> */}

      {/* Prompt list – conditionally displays all prompts or single prompt */}
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
          {random && <Prompt prompt={random[0].content}/>}
      </div>

      {/* Header and modal content */}
      <Intro/>

      {/* Random prompt button */}
      <div className="choose" onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});  handleChoice(); generateRandom();
        }}>{choice ? 'choose myself' : 'choose for me'}</div>

    </div>


  );
}

export default App;
