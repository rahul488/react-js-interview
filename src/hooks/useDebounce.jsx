import { useEffect, useState } from "react";

const useDebounce = (searchedVal = null, delay = 500) => {
  const [debounceVal, setDeboucneval] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDeboucneval(searchedVal);
    }, delay);

    return () => clearTimeout(timeout);
  }, [delay, searchedVal]);

  return {debounceVal};
};
export default useDebounce;
