import React, {useState, useEffect, useRef} from 'react';
import SearchIcon from '@material-ui/icons/Search';
import './App.css';
import axios from 'axios';
import useDebounce from './debounce.js';
import {ReactComponent as MovieIcon} from './moviephoto.svg';

/* My personal API KEY, which lets me get data from API */
const API_KEY = '872b80fff59ffcffc95a9069a0a35cee';

const App = () =>{

  /* Given information from a TEXTBOX <input></input> */
  const [inputValue, setInputValue] = useState('');
  /* All the information about the films from the API URL */
  const [films, setFilms] = useState([]);
  /* Loading constant to check if the information is loading in the Web */
  const [isLoading, setIsLoading] = useState(false);
  /* Shows the error, if there is any error loaded */
  const [isError, setIsError] = useState(false);
  /* Checks if input is clicked */
  const [isClicked, setIsClicked] = useState(false);
  /* Same value as inputValue, but is triggers after given time ms */
  const debouncedSearch = useDebounce(inputValue, 250);


  /*Every time, when INPUTVALUE changes it will trigger this function and re-renders the URL to get new API information */
  useEffect(() => {

   /*This function checks, if anything is written in the TEXTBOX. This is a must function,
   because if the input is clear it will trigger an error in the URL ending 
   If nothing is written, then returns null 
   If something is written, the information from the TEXTBOX will be added to an URL */
    const urlCheck = () =>{
      if(inputValue.length !== 0){
        return inputValue;
        
      }
      else{
        return null;
      };
    };

    /* This function gets the data from the API URL */
    const getData = async () =>{
      setIsLoading(true);
      setIsError(false);
      try{
        const data =  await axios('https://api.themoviedb.org/3/search/movie?api_key='+API_KEY+'&language=en-US&query='+urlCheck());
        setFilms(data.data.results)
      }
      catch (error){
        setIsError(true);
      };
      setIsLoading(false);
     };
    
     if(inputValue.length >= 3){
       getData();
     }


  }, [debouncedSearch])
  

  /* Checks if in input is written at least 3 letters 
     If there are more than 2 letters, then the infomation is shown */
  const suggestionList = () =>{
    if(inputValue.length >= 3){
      return(
        <ul className='all-suggestions'>
          {films.slice(0,8).map(item =>
          <li className='suggestion-item' onClick={() => {
            setInputValue(item.original_title);
            setIsClicked(false)
          }} key={item.id}>
            <span>{item.original_title}</span>
            {/* Sometimes Films does not have realease date, so if they don't, just return empty string */}
            <div>{item.vote_average} Rating{item.release_date === "" || typeof(item.release_date) === 'undefined' ? "" : ", " + item.release_date.substring(0,4)}</div>
          </li>
            )}
        </ul>
      )
    }

    /* I want to display the information, that person should write at least 3 letters to see results below the TextBox */
    else if(inputValue.length !== 0 && inputValue.length < 3){
      return(
        <div className='loading'>
          Write at least 3 letters
        </div>
      )
    }
    /* This case only exists, when nothing is written in the TextBox, so none of the information is displayed */ 
    else{
      return null;
    }
  }

  const Output = () =>{
    return(
      <div className='input-container'>
        <MovieIcon className='movie-svg-input' />
        <input autoFocus={true} type='text' value={inputValue} onChange={value => setInputValue(value.target.value)}/>
        <label>Enter a movie name</label>
        {isError && <div> Something went wrong.. Error</div>}
        {isLoading ? <div className='loading'>Loading...</div> : <div className='movies-list'>{(suggestionList())}</div>}
      </div>
    )
  }




  return(
    /* Fragment lets me return more than 1 element */
    <React.Fragment>
      <form >
        <div className='search-line'>
          <MovieIcon className='movie-svg' />
          <div className="click-on-input" onClick = { () => setIsClicked(true)} >
                {inputValue ? inputValue : "Enter movie name"}
          </div>    
          <button className='search-icon'>
            <SearchIcon style={{fontSize: 35}} />
          </button>
        </div>
        </form>
      {isClicked ? Output() : null}
      <div className='outclick' onClick={() => setIsClicked(false)}></div>
    </React.Fragment>
  )
}
export default App;
