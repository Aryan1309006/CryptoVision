import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCryptoContext } from "../context/Cryptocontext";
import CoinChart from "../components/CoinChart";
import AddtoWishlis from "../components/AddtoWishlis";

export const CoinDetails = () => {
  const [showWatchlistHint, setShowWatchlistHint] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setShowWatchlistHint(false);
    }, 3000);

    return () => window.clearTimeout(timeoutId);
  }, []);

  const { id } = useParams();
  const { allCoins, loading, currency } = useCryptoContext();
  const coin = allCoins.find((coin) => coin.id === id);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-[#181B20] dark:text-white">
        <div className="text-center">
          <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-4 border-emerald-500 border-t-transparent"></div>
          <p className="text-lg font-medium">Loading coin data...</p>
        </div>
      </div>
    );
  }

  if (!coin) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-[#181B20] dark:text-white">
        <div className="text-center">
          <h2 className="mb-2 text-2xl font-bold text-red-500">
            Coin Not Found
          </h2>
          <p className="text-slate-500 dark:text-slate-400">
            The requested cryptocurrency could not be found.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex w-full min-h-screen flex-col justify-center bg-slate-50 pt-20 text-slate-900 transition-colors duration-300 dark:bg-[#181B20] dark:text-white">
      <img src={coin.image} alt={coin.name} className="mx-auto h-32 w-32" />
      <div className="flex flex-wrap items-center justify-center gap-3 px-4 py-4">
        <h1 className="text-center text-3xl font-bold sm:text-4xl">
          {coin.name} ({coin.symbol?.toUpperCase()})
        </h1>
        <span className="relative inline-flex">
          <AddtoWishlis productId={id} />
          {showWatchlistHint && (
            <span
              role="status"
              className="
      absolute left-1/2 top-full z-50 mt-2
      -translate-x-1/2
      whitespace-nowrap
      rounded-lg
      bg-gray-900
      px-3 py-2
      text-xs font-medium text-white
      shadow-lg
      transition-opacity duration-200
      before:absolute before:bottom-full before:left-1/2
      before:-translate-x-1/2
      before:border-8 before:border-transparent
      before:border-b-gray-900
    "
            >
              Add this coin to your watchlist
            </span>
          )}
        </span>
      </div>
      <p className="text-center text-2xl font-semibold text-slate-500 dark:text-slate-400">
        {coin.market_cap_rank <= 20 ? `Rank ${coin.market_cap_rank}` : ""}
      </p>

      <div className="m-auto h-xl w-full p-2 md:max-w-4xl">
        <CoinChart id={coin.id} />
      </div>
      <h1 className="m-auto mb-10 mt-4 border-b-4 border-transparent border-b-emerald-500 p-2 text-4xl font-bold">
        Coin Detail
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 p-4 md:p-10">
        <Card title="Current Price">
          {currency.symbol}
          {coin.current_price.toLocaleString()}
        </Card>

        <Card title="Market Cap">
          {currency.symbol}
          {coin.market_cap.toLocaleString()}
        </Card>

        <Card title="24H Volume">
          {currency.symbol}
          {coin.total_volume.toLocaleString()}
        </Card>

        <Card title="Rank">#{coin.market_cap_rank}</Card>

        <Card title="24H High">
          {currency.symbol}
          {coin.high_24h.toLocaleString()}
        </Card>

        <Card title="24H Low">
          {currency.symbol}
          {coin.low_24h.toLocaleString()}
        </Card>

        <Card
          title="24H Change"
          className={
            coin.price_change_percentage_24h >= 0
              ? "text-green-500"
              : "text-red-500"
          }
        >
          {coin.price_change_percentage_24h.toFixed(2)}%
        </Card>

        <Card title="Price Change (24H)">
          {currency.symbol}
          {coin.price_change_24h.toFixed(2)}
        </Card>

        <Card title="Market Cap Change">
          {currency.symbol}
          {coin.market_cap_change_24h.toLocaleString()}
        </Card>

        <Card
          title="Market Cap Change %"
          className={
            coin.market_cap_change_percentage_24h >= 0
              ? "text-green-500"
              : "text-red-500"
          }
        >
          {coin.market_cap_change_percentage_24h.toFixed(2)}%
        </Card>

        <Card title="All Time High">
          {currency.symbol}
          {coin.ath.toLocaleString()}
        </Card>

        <Card title="ATH Date">
          {new Date(coin.ath_date).toLocaleDateString()}
        </Card>

        <Card
          title="ATH Change %"
          className={
            coin.ath_change_percentage >= 0 ? "text-green-500" : "text-red-500"
          }
        >
          {coin.ath_change_percentage.toFixed(2)}%
        </Card>

        <Card title="All Time Low">
          {currency.symbol}
          {coin.atl.toLocaleString()}
        </Card>

        <Card title="ATL Date">
          {new Date(coin.atl_date).toLocaleDateString()}
        </Card>

        <Card
          title="ATL Change %"
          className={
            coin.atl_change_percentage >= 0 ? "text-green-500" : "text-red-500"
          }
        >
          {coin.atl_change_percentage.toFixed(2)}%
        </Card>

        <Card title="Circulating Supply">
          {coin.circulating_supply.toLocaleString()}
        </Card>

        <Card title="Total Supply">
          {coin.total_supply ? coin.total_supply.toLocaleString() : "N/A"}
        </Card>

        <Card title="Max Supply">
          {coin.max_supply ? coin.max_supply.toLocaleString() : "Unlimited"}
        </Card>

        <Card title="Fully Diluted Valuation">
          {coin.fully_diluted_valuation
            ? `${currency.symbol}${coin.fully_diluted_valuation.toLocaleString()}`
            : "N/A"}
        </Card>
      </div>
    </div>
  );
};
const Card = ({ title, children, className = "" }) => (
  <div className="rounded-xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:border-emerald-500 dark:border-zinc-800 dark:bg-zinc-900">
    <p className="mb-2 text-sm text-slate-500 dark:text-gray-400">{title}</p>
    <h3 className={`break-words text-xl font-bold ${className}`}>{children}</h3>
  </div>
);
