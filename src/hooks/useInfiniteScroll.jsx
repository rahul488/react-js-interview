import { useEffect, useState } from "react";

const useInifinityScroll = (isLast) => {
  const [page, setPage] = useState(0);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    if (!isLast) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLast]);

  const handleScroll = () => {
    if (
      Math.ceil(window.innerHeight + document.documentElement.scrollTop) >=
        document.documentElement.offsetHeight &&
      !isLast &&
      !isFetching
    ) {
      setIsFetching(true);
      setPage((prev) => prev + 1);
    }
  };

  return { page, isFetching, setIsFetching };
};
export default useInifinityScroll;
