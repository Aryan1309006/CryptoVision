import React, { useState, useContext, useEffect, useCallback, useRef, createContext } from "react";

const CryptoContext = createContext();

const CryptoContextProvider = ({ children }) => {
  const [coinData, setCoinData] = useState([]);
  const [allCoins, setAllCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState(null);
  const [visibleCount, setVisibleCount] = useState(10);
  const paginationTimeoutRef = useRef(null);
  const paginationLockRef = useRef(false);

  const [currency, setCurrency] = useState({
    name: "usd",
    symbol: "$",
  });

  const loadMoreCoins = useCallback(() => {
    if (
      paginationLockRef.current ||
      visibleCount >= allCoins.length
    ) {
      return;
    }

    paginationLockRef.current = true;
    setLoadingMore(true);
    paginationTimeoutRef.current = window.setTimeout(() => {
      setVisibleCount((prev) => Math.min(prev + 10, allCoins.length));
      setLoadingMore(false);
      paginationLockRef.current = false;
      paginationTimeoutRef.current = null;
    }, 200);
  }, [allCoins.length, visibleCount]);

  // Fetch coins
  const fetchCoins = useCallback(async () => {
    if (paginationTimeoutRef.current !== null) {
      window.clearTimeout(paginationTimeoutRef.current);
      paginationTimeoutRef.current = null;
    }
    paginationLockRef.current = false;
    setLoadingMore(false);
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}&order=market_cap_desc&per_page=100&page=1`
      );

      if (!res.ok) {
        throw new Error(`API Error: ${res.status}`);
      }

      const data = await res.json();

      setAllCoins(data);
      setVisibleCount(10);
    } catch (err) {
      console.error(err);
      setError(err.message || "Failed to fetch coins");
    } finally {
      setLoading(false);
    }
  }, [currency.name]);

  useEffect(
    () => () => {
      if (paginationTimeoutRef.current !== null) {
        window.clearTimeout(paginationTimeoutRef.current);
      }
    },
    [],
  );

  useEffect(() => {
    setCoinData(allCoins.slice(0, visibleCount));
  }, [allCoins, visibleCount]);

  // Refetch whenever currency changes
  useEffect(() => {
    fetchCoins();
  }, [fetchCoins]);

  return (
    <CryptoContext.Provider
      value={{
        coinData,
        allCoins,
        loading,
        loadingMore,
        error,
        currency,
        setCurrency,
        visibleCount,
        loadMoreCoins,
        hasMoreCoins: allCoins.length > visibleCount,
      }}
    >
      {children}
    </CryptoContext.Provider>
  );
};

export const useCryptoContext = () => useContext(CryptoContext);

export default CryptoContextProvider;