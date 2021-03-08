import React, { useEffect, useState } from 'react';
import {useQuery} from 'react-query';
import { Getpost } from '../Query';



const Planets = () => {
    
    const { data, isLoading } = useQuery('planets', Getpost)
    console.log(data)
    return ( 
        <div className="pln-div">
            <h2>Planets</h2>
            {/* {setplanet === 'loading' && (
                <div>loading data...</div>
            )}
            {setplanet === 'error' && (
                <div>Error data</div>
            )} */}
        </div>
     );
}
 
export default Planets;