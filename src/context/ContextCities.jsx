/* eslint-disable react/react-in-jsx-scope */
import PropTypes from 'prop-types'

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

    return (
        <ContextCities.Provider
        value={{
            cities,
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