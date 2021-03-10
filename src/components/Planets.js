import React from 'react';
import {useQuery} from 'react-query';
import axios from 'axios';
import Planet from './Planet';
import { ReactQueryDevtools } from 'react-query-devtools';

const axiosget = async () =>{
    const res = await axios('http://swapi.dev/api/planets/');
    return res.data;
}
const Planets = () => {
 const {data,status} = useQuery('planets',axiosget);
 console.log(data)
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
        <div>
             <h2>Planets</h2>
          { data.results.map(planet => <Planet key={planet.name} planet={planet} /> ) }
        </div>
      )} 
    </div>
    <ReactQueryDevtools initialIsOpen = { false }/>
    </>
     );
}
export default Planets;