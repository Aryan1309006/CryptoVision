import React, { useEffect, useMemo, useRef, useState } from "react";
import { useCryptoContext } from "../context/Cryptocontext";
import { Topten } from "../components/Topten";
import ToptenSkeleton from "../components/ToptenSkeleton";

export const Pricing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const {
    allCoins,
    loading,
    loadingMore,
    error,
    visibleCount,
    loadMoreCoins,
    hasMoreCoins,
  } = useCryptoContext();
  const sentinelRef = useRef(null);

  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("rank");
  const [changeFilter, setChangeFilter] = useState("all");

  const filteredCoins = useMemo(() => {
    if (!allCoins) return [];

    let coins = [...allCoins];

    coins = coins.filter(
      (coin) =>
        coin.name.toLowerCase().includes(search.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(search.toLowerCase()),
    );

    if (changeFilter === "positive") {
      coins = coins.filter((coin) => coin.price_change_percentage_24h >= 0);
    }

    if (changeFilter === "negative") {
      coins = coins.filter((coin) => coin.price_change_percentage_24h < 0);
    }

    switch (sortBy) {
      case "priceHigh":
        coins.sort((a, b) => b.current_price - a.current_price);
        break;

      case "priceLow":
        coins.sort((a, b) => a.current_price - b.current_price);
        break;

      case "marketCap":
        coins.sort((a, b) => b.market_cap - a.market_cap);
        break;

      case "change":
        coins.sort((a, b) => b.price_change_percentage_24h - a.price_change_percentage_24h);
        break;

      case "az":
        coins.sort((a, b) => a.name.localeCompare(b.name));
        break;

      case "za":
        coins.sort((a, b) => b.name.localeCompare(a.name));
        break;

      default:
        coins.sort((a, b) => a.market_cap_rank - b.market_cap_rank);
    }

    return coins;
  }, [allCoins, search, sortBy, changeFilter]);

  const visibleCoins = filteredCoins.slice(0, visibleCount);
  const hasMoreFilteredCoins = visibleCoins.length < filteredCoins.length;

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (
      !sentinel ||
      loading ||
      loadingMore ||
      error ||
      !hasMoreCoins ||
      !hasMoreFilteredCoins
    ) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          loadMoreCoins();
        }
      },
      { rootMargin: "500px 0px", threshold: 0 },
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [
    error,
    hasMoreCoins,
    hasMoreFilteredCoins,
    loadMoreCoins,
    loading,
    loadingMore,
  ]);

  return (
    <div className="flex min-h-screen justify-center bg-slate-100 px-4 py-10 transition-colors duration-300 dark:bg-[#181B20]">
      <div className="w-full max-w-6xl">
        <div className="mb-6 flex flex-col gap-4 md:flex-row">
          <input
            type="text"
            placeholder="Search Coin..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 rounded-lg border border-slate-300 bg-white px-4 py-2 text-slate-800 outline-none transition focus:border-emerald-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
          />

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-slate-800 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
          >
            <option value="rank">Rank</option>
            <option value="priceHigh">Price High → Low</option>
            <option value="priceLow">Price Low → High</option>
            <option value="marketCap">Market Cap</option>
            <option value="change">24h Change</option>
            <option value="az">A → Z</option>
            <option value="za">Z → A</option>
          </select>

          <select
            value={changeFilter}
            onChange={(e) => setChangeFilter(e.target.value)}
            className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-slate-800 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
          >
            <option value="all">All</option>
            <option value="positive">Positive</option>
            <option value="negative">Negative</option>
          </select>
        </div>

        <div className=" overflow-hidden rounded-xl border border-slate-200 dark:border-zinc-800">
          <div className="bg-emerald-700">
            <div className="flex h-14 items-center px-4 text-white md:px-6">
              <div className="w-[10%] md:w-[8%]">#</div>
              <div className="w-[45%] md:w-[34%]">Coin</div>
              <div className="w-[20%] text-right md:w-[18%]">Price</div>
              <div className="w-[25%] text-right md:w-[20%]">24h Change</div>
              <div className="hidden text-right md:block md:w-[20%]">Market Cap</div>
            </div>
          </div>

          <div className="bg-white dark:bg-black">
            {loading ? (
              Array.from({ length: 10 }).map((_, index) => <ToptenSkeleton key={index} />)
            ) : error ? (
              <div className="py-10 text-center text-red-500">{error}</div>
            ) : filteredCoins.length === 0 ? (
              <div className="flex flex-col items-center justify-center px-4 py-12 text-center text-red-400">
                <p className="text-lg font-semibold">Network issue detected</p>
                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                  Please check your connection and try again.
                </p>
              </div>
            ) : (
              visibleCoins.map((coin) => <Topten key={coin.id} item={coin} />)
            )}

            {!loading && !error && loadingMore && (
              <>
                {Array.from({ length: 10 }).map((_, index) => (
                  <ToptenSkeleton key={`pagination-skeleton-${index}`} />
                ))}
              </>
            )}
            <div ref={sentinelRef} aria-hidden="true" className="h-px" />
          </div>
        </div>
      </div>
    </div>
  );
};



