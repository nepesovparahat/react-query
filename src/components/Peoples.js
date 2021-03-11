import React, { useState } from 'react';
import {usePaginatedQuery} from 'react-query';
import axios from 'axios';
import People from './People';
import { ReactQueryDevtools } from 'react-query-devtools';

const getaxios = async (key,next)=>{
   const res = await axios.get(`http://swapi.dev/api/people/?page=${next}`);
   return res.data; 
}
const Peoples = () => {
  const[nextpage, setNextPage] = useState(1);
    const {resolvedData, latestData, status} = usePaginatedQuery(['people',nextpage], getaxios);
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
         <>
        <div> 
            <h2>Peoples</h2>
             <div className="nextpage">
    <button onClick = {()=> setNextPage(old => Math.max(old-1, 1))}>Previous</button>
    <button onClick = {()=> setNextPage(1)}>1</button>
    <button onClick = {()=> setNextPage(2)}>2</button>
    <button onClick = {()=> setNextPage(3)}>3</button>
    <button onClick = {()=> setNextPage(old => (!latestData || !latestData.next ? old :old + 1))}>Next</button>
    </div> 
          { resolvedData.results.map(person => <People key={person.name} person={person} /> ) }
        </div>
        </>
      )} 
        </div>
        <ReactQueryDevtools initialIsOpen = { false }/>
        </>
      );
}
export default Peoples;