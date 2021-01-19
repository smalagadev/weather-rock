import React, { useState } from 'react';
import axios from 'axios';

export default function Search(props){
  const APIkey = '';
  const [query, setQuery] = useState();
  const [info, setInfo] = useState();

  const handleSubmit = e => {
    e.preventDefault();
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${APIkey}`)
      .then((response) =>{
        setInfo(response.data);
        forceUpdate();
      })
      .catch(error => {
        console.log(`Error: ${error}`);
      });
  }

  return(
    <>
      <h1>{ JSON.stringify(info) || "Weather" }</h1>
      <form onSubmit={ handleSubmit }>
        <input type="text" value={ query } onChange={ e => setQuery(e.target.value) } placeholder="Search zipcode or city..."/>
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}
