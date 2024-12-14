/* eslint-disable react/react-in-jsx-scope */
import PropTypes from 'prop-types'

<<<<<<< Updated upstream
import { createContext, useContext, useEffect, useState } from "react"
import { URL } from '../config';
import { fetchData } from '../helper';

const ContextCities = createContext();
function ContextCitiesProvider({children}) {
  
    const [cities, setCities]= useState([]);


    useEffect(function(){
      async function fetchCitiesData(){
        try {
          
          const data = await fetchData(URL);
          
          setCities(data);
        } catch (error) {
          console.log(error);
        }
      }
  
      fetchCitiesData();
    },[]);

=======
import { createContext, useContext, useReducer } from "react"
import { URL } from '../config';
import { fetchData } from '../helper';

const initialReducer = {
  cities: [],
  city: {},
  isLoading: false,
  error: null,
}

function reducer(state, action) {
  switch(action.type){
    case 'loading': return {...state, isLoading: true};
    case 'GET_CITIES_SECCESS': return {...state, isLoading: false, cities: action.payload};
    case 'GET_CITY_SECCESS': return {...state, isLoading: false, city: action.payload};
    case 'error': return {...state, isLoading: false, error: action.payload};
  }
}

const ContextCities = createContext();
function ContextCitiesProvider({children}) {

    const [{cities,city, isLoading ,error},dispatch]= 
      useReducer(reducer,initialReducer);

    // getCities Data 
    async function fetchCitiesData(){
      dispatch({type: 'loading'});
      try {
        const data = await fetchData(URL);
        
        dispatch({type: "GET_CITIES_SECCESS", payload: data});
      } catch (error) {
        console.log(error);
      }
    }

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

    
>>>>>>> Stashed changes
    return (
        <ContextCities.Provider
        value={{
            cities,
<<<<<<< Updated upstream
=======
            city,
            isLoading,
            error,
            fetchCitiesData,
            fetchCityData
>>>>>>> Stashed changes
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