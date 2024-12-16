/* eslint-disable react/react-in-jsx-scope */
import PropTypes from 'prop-types'

import { createContext, useContext, useEffect, useReducer } from "react"
import { URL } from '../config';
import { fetchData } from '../helper';

const initialReducer = {
  cities: [],
  city: {},
  currentActiveCity: null,
  isLoading: false,
  error: null,
}

function reducer(state, action) {
  switch(action.type){
    case 'loading': return {...state, isLoading: true};
    case 'GET_CITIES_SECCESS': return {...state, isLoading: false, cities: action.payload};
    case 'GET_CITY_SECCESS': return {...state, isLoading: false, city: action.payload};

    case 'POST_CITY_SECCESS': 
      return {
        ...state,
        isLoading: false,
        cities: action.payload,
        currentActiveCity: action.payload[0].id,
      };

    case 'acitivateCity': return {...state, currentActiveCity: action.payload}
    case 'error': return {...state, isLoading: false, error: action.payload};
  }
}

const ContextCities = createContext();
function ContextCitiesProvider({children}) {

    const [{cities,city, isLoading ,error,currentActiveCity},dispatch]= 
      useReducer(reducer,initialReducer);

    // getCities Data 
    useEffect(function(){
      async function fetchCitiesData(){
        dispatch({type: 'loading'});
        try {
          const data = await fetchData(URL);
          
          dispatch({type: "GET_CITIES_SECCESS", payload: data});
        } catch (error) {
          console.log(error);
        }
      }

      fetchCitiesData();
    },[]);
    
    
    // get city Data
    async function fetchCityData(id){
      dispatch({type: 'loading'});
      try {   
          const data = await fetchData(`${URL}/${id}`);
          
          dispatch({type: 'GET_CITY_SECCESS', payload: data});
      } catch (error) {
          console.log(error);
      }
  }

  // Post newCity

  async function postNewCity(newCity){
    try {
      const response = await fetch(`http://localhost:8000/cities`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newCity),
      })

      const data = await response.json();

      dispatch({type: 'POST_CITY_SECCESS', payload: [data, ...cities]})
    } catch (error) {
      console.log(error);
    }
  }
    

  function handleActiveCity(id){
    dispatch({type: "acitivateCity", payload: id})
  }



    return (
        <ContextCities.Provider
        value={{
            cities,
            city,
            isLoading,
            error,
            currentActiveCity,
            fetchCityData,
            postNewCity,
            handleActiveCity,
        }}
        >
            {children}
        </ContextCities.Provider>
    )
}

function useCities(){
  const context = useContext(ContextCities);
  
  if(context === undefined)
    throw new Error('useCities must be used within a ContextCitiesProvider');

  return context
}



export { ContextCitiesProvider , useCities};


ContextCitiesProvider.propTypes = {
  children: PropTypes.object
};