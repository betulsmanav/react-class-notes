import { useEffect, useState } from "react";
//  ! useFech benim olusturdugum hook apiye istek atma isisni bir hook da toparladim ihtiyacim olan her yerde kullanicam

function useFetch(url,initialData) {
  const [data, setData] = useState(initialData=[]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(true);

  // ! backand e istek atmak icin useEffect kullanilir.
  useEffect(() => {
    fetch(url)
      .then((response) => {
        
        if (!response.ok) {
          setError('someting went wrong!')
        setLoading(false)
        setData(data)

        } else {
          
          return response.json()
        }
      })
      .then((data) => {
        setData(data)
        setLoading(false)
        setError('')
      });
    
  }, []);

  return { data, loading, error };
}
export default useFetch;
