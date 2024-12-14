/* eslint-disable react/react-in-jsx-scope */
import PropTypes from 'prop-types'

<<<<<<< HEAD
import { createContext, useContext, useReducer } from "react"
=======
import { createContext, useContext, useEffect, useReducer } from "react"
>>>>>>> loading
import { URL } from '../config';
import { fetchData } from '../helper';

const initialReducer = {
  cities: [],
<<<<<<< HEAD
  city: {},
=======
>>>>>>> loading
  isLoading: false,
  error: null,
}

function reducer(state, action) {
  switch(action.type){
    case 'loading': return {...state, isLoading: true};
<<<<<<< HEAD
    case 'GET_CITIES_SECCESS': return {...state, isLoading: false, cities: action.payload};
    case 'GET_CITY_SECCESS': return {...state, isLoading: false, city: action.payload};
=======
    case 'success': return {...state, isLoading: false, cities: action.payload};
>>>>>>> loading
    case 'error': return {...state, isLoading: false, error: action.payload};
  }
}

const ContextCities = createContext();
function ContextCitiesProvider({children}) {
<<<<<<< HEAD
=======

    const [{cities, isLoading ,error},dispatch]= useReducer(reducer,initialReducer);
>>>>>>> loading

    const [{cities,city, isLoading ,error},dispatch]= 
      useReducer(reducer,initialReducer);

<<<<<<< HEAD
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

=======
    useEffect(function(){
      async function fetchCitiesData(){
        try {
          dispatch({type: 'loading'});
          const data = await fetchData(URL);
          
          dispatch({type: "success", payload: data});
        } catch (error) {
          console.log(error);
        }
      }
  
      fetchCitiesData();
    },[]);
>>>>>>> loading
    
    return (
        <ContextCities.Provider
        value={{
            cities,
<<<<<<< HEAD
            city,
            isLoading,
            error,
            fetchCitiesData,
            fetchCityData
=======
            isLoading,
            error
>>>>>>> loading
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