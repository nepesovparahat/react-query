import axios from 'axios';

export const Getpost = async () => {
    const {data} = await axios('http://swapi.dev/api/planets/');
    return data;
}