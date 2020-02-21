import { useEffect, useState } from 'react';
import axios from "axios"

const useRequest = (url) => {
  
 const [data, setData] = useState([])

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/${url}`)
    .then(({data}) => setData(data))
    .catch(err => console.log(err))
  }, [url])

  return  data
}

export default useRequest;
