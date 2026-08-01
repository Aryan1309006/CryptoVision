import React, { useEffect, useState } from "react";
import { useCryptoContext } from "../context/Cryptocontext";
import { useNavigate } from "react-router-dom";
import { Topten } from "../components/Topten";
import ToptenSkeleton from "../components/ToptenSkeleton";
import { About } from "../components/About";

export const Heropage = () => {
  const { allCoins, coinData, loading, error } = useCryptoContext();
  const [selected, setSelected] = useState("");
  const [showCoin, SetShowCoin] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  useEffect(() => {
    SetShowCoin(allCoins?.slice(0, 10) || []);
  }, [allCoins]);

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-slate-100 px-4 pt-20 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white">
      <h1 className="max-w-4xl text-center text-4xl font-bold md:text-7xl">
        Explore the Future of <span className="text-emerald-500">Crypto</span>
      </h1>
      <p className="max-w-2xl py-5 text-center text-lg text-slate-600 md:text-xl dark:text-slate-300">
        Track live cryptocurrency prices, market trends, and real-time insights all in one fast, modern platform built for investors and enthusiasts.
      </p>

      <div className="mx-auto w-full max-w-3xl px-4 ">
        <div>
          <form className="max-w-2xl flex items-center gap-2 rounded-lg bg-white p-2 shadow-lg dark:bg-slate-900 mx-auto">
            <select
              value={selected}
              onChange={(e) => setSelected(e.target.value)}
              disabled={loading}
              className={`flex-1 min-w-0 h-12 px-4 outline-none bg-transparent text-sm sm:text-base md:text-lg ${
                selected ? "text-slate-800 dark:text-slate-100" : "text-slate-400"
              } ${loading ? "opacity-50" : ""}`}
            >
              <option value="" disabled>
                {loading ? "Loading coins..." : "Search crypto..."}
              </option>

              {allCoins.map((coin) => (
                <option key={coin.id} value={coin.id}>
                  {coin.name} ({coin.symbol?.toUpperCase()})
                </option>
              ))}
            </select>

            <button
              onClick={() => selected && navigate(`/coin/${selected}`)}
              disabled={!selected || loading}
              className="h-12 whitespace-nowrap rounded-md bg-emerald-500 px-4 font-semibold text-white sm:px-6 md:px-8"
            >
              Search
            </button>
          </form>
        </div>

        <div className="my-20 flex w-full flex-col items-center">
          <div className="w-full max-w-6xl rounded-t-xl bg-emerald-600">
            <div className="flex h-14 items-center px-4 text-white md:px-6">
              <div className="w-[8%]">#</div>
              <div className="w-[32%] md:w-[34%]">Coin</div>
              <div className="w-[18%] text-right md:w-[18%]">Price</div>
              <div className="w-[18%] text-right md:w-[20%]">24h Change</div>
              <div className="hidden text-right md:block md:w-[24%]">Market Cap</div>
            </div>
          </div>

          <div className="w-full max-w-5xl overflow-hidden rounded-b-xl bg-white shadow-sm dark:bg-slate-950">
            {loading ? (
              Array.from({ length: 10 }).map((_, index) => <ToptenSkeleton key={index} />)
            ) : error ? (
              <div className="flex flex-col items-center justify-center px-4 py-12 text-center text-red-400">
                <p className="text-lg font-semibold">Network issue detected</p>
                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Please check your connection and try again.</p>
              </div>
            ) : (
              coinData.slice(0, 10).map((item) => <Topten key={item.id} item={item} />)
            )}
          </div>
        </div>
      </div>
      <About/>
    </div>
  );
};
