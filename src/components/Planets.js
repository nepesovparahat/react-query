import React, { useState } from 'react';
import {usePaginatedQuery} from 'react-query';
import axios from 'axios';
import Planet from './Planet';
import { ReactQueryDevtools } from 'react-query-devtools';

const axiosget = async (key, next) =>{
    const res = await axios(`http://swapi.dev/api/planets/?page=${next}`);
    return res.data;
}
const Planets = () => {
  const [nextpage, setnextPage] = useState(1)
 const {resolvedData, latestData, status} = usePaginatedQuery(['planets',nextpage],axiosget);
    return ( 
       <>
        <div className="pln-div">

      {status === 'loading' && (
        <div>Loading...</div>
      )}

      {status === 'error' && (
        <div>Error fetching data</div>
      )}

      {status === 'success' && (
         <>
        <div> 
            <h2>Planets</h2>
             <div className="nextpage">
    <button onClick = {()=> setnextPage(old => Math.max(old-1, 1))}>Previous</button>
    <button onClick = {()=> setnextPage(1)}>1</button>
    <button onClick = {()=> setnextPage(2)}>2</button>
    <button onClick = {()=> setnextPage(3)}>3</button>
    <button onClick = {()=> setnextPage(old => (!latestData || !latestData.next ? old :old + 1))}>Next</button>
    </div>  
          { resolvedData.results.map(planet => <Planet key={planet.name} planet={planet} /> ) }
        </div> 
        </> 
      )} 
    </div>
    <ReactQueryDevtools initialIsOpen = { false }/>
    </>
     );
}
export default Planets;