import React, { useEffect } from 'react';
import Weather from './components/Weather';
import SearchCity from './components/SearchCity';
import { useSelector } from 'react-redux';
import Error from './components/Error';

function App() {
  
  const state = useSelector(state => ({
      weather: state.weatherPage.weather,
      isLoaded: state.weatherPage.isLoaded,
      error: state.weatherPage.error
  }))
 

  return (
    <div className="wrapper">
        <div className="content">
        <SearchCity />
      {state.error ? <Error /> : <Weather isLoaded={state.isLoaded} weather={state.weather}/> }  
        </div>
        </div>
  );
}

export default App;
