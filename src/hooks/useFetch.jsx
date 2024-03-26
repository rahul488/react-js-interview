import { useEffect, useRef, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const abortRef = useRef(null);
  useEffect(() => {
    abortRef.current = new AbortController();
    fetchData();
    return () => abortRef.current.abort("Request terminated");
  }, [url]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch(url, { signal: abortRef.current.signal });
      const data = await res.json();
      setData(data);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };
  return { data, loading };
};
export default useFetch;
