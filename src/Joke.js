import {React,useState} from 'react'
import Button from './Button'
import './Joke.css'
function Joke() {
    const [joke, setJoke] = useState([]);
    const fetchJoke = async () => {
        try {
          const res = await fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single");
          const data = await res.json();
          setJoke(data.joke);
        } catch (error) {
          console.error('Error fetching joke:', error);
        }
      };
  return(
    <div className="joke">
            <Button fetchApi={fetchJoke} />
            <p>{joke}</p>    
        </div>
     )
   
}

export default Joke