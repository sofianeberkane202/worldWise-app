/* eslint-disable react/react-in-jsx-scope */
import PropTypes from 'prop-types'

import { createContext, useContext, useEffect, useReducer } from "react"
import { URL } from '../config';
import { fetchData } from '../helper';

const initialReducer = {
  cities: [],
  isLoading: false,
  error: null,
}

function reducer(state, action) {
  switch(action.type){
    case 'loading': return {...state, isLoading: true};
    case 'success': return {...state, isLoading: false, cities: action.payload};
    case 'error': return {...state, isLoading: false, error: action.payload};
  }
}

const ContextCities = createContext();
function ContextCitiesProvider({children}) {

    const [{cities, isLoading ,error},dispatch]= useReducer(reducer,initialReducer);


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
    
    return (
        <ContextCities.Provider
        value={{
            cities,
            isLoading,
            error
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