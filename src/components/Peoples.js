import React from 'react';
import {useQuery} from 'react-query';
import axios from 'axios';
import People from './People';
import { ReactQueryDevtools } from 'react-query-devtools';

const getaxios = async ()=>{
   const res = await axios.get('http://swapi.dev/api/people/');
   return res.data; 
}
const Peoples = () => {
    const {data, status} = useQuery('people', getaxios);
    console.log(data)
    return (
      <>
        <div className = "pepl-div">
            {status === 'loading' && (
        <div>Loading...</div>
      )}

      {status === 'error' && (
        <div>Error fetching data</div>
      )}

      {status === 'success' && (
        <div>
             <h2>People</h2>
          { data.results.map(person => <People key={person.name} person={person} /> ) }
        </div>
      )} 
        </div>
        <ReactQueryDevtools initialIsOpen = { false }/>
        </>
      );
}
export default Peoples;