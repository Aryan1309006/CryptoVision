import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCryptoContext } from "../context/Cryptocontext";
import CoinChart from "../components/CoinChart";

export const CoinDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { id } = useParams();
  const { allCoins, loading, currency } = useCryptoContext();
  const coin = allCoins.find((coin) => coin.id === id);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-black dark:text-white">
        <div className="text-center">
          <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-4 border-emerald-500 border-t-transparent"></div>
          <p className="text-lg font-medium">Loading coin data...</p>
        </div>
      </div>
    );
  }

  if (!coin) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-black dark:text-white">
        <div className="text-center">
          <h2 className="mb-2 text-2xl font-bold text-red-500">Coin Not Found</h2>
          <p className="text-slate-500 dark:text-slate-400">
            The requested cryptocurrency could not be found.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex w-full min-h-screen flex-col justify-center bg-slate-50 pt-20 text-slate-900 transition-colors duration-300 dark:bg-black dark:text-white">
      <img src={coin.image} alt={coin.name} className="mx-auto h-32 w-32" />
      <h1 className="py-4 text-center text-4xl font-bold">
        {coin.name} ({coin.symbol?.toUpperCase()})
      </h1>
      <p className="text-center text-2xl font-semibold text-slate-500 dark:text-slate-400">
        {coin.market_cap_rank <= 20 ? `Rank ${coin.market_cap_rank}` : ""}
      </p>

      <div className="m-auto h-xl w-full p-2 md:max-w-4xl">
        <CoinChart id={coin.id} />
      </div>
      <h1 className="m-auto mb-10 mt-4 border-b-4 border-transparent border-b-emerald-500 p-2 text-4xl font-bold">
        Coin Detail
      </h1>
     {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">

  <div className="bg-zinc-900 p-4 rounded-xl border border-zinc-800">
    <p className="text-gray-400 text-sm">Current Price</p>
    <h3 className="text-xl font-bold text-white">
      ${coin.current_price?.toLocaleString()}
    </h3>
  </div>

  <div className="bg-zinc-900 p-4 rounded-xl border border-zinc-800">
    <p className="text-gray-400 text-sm">24h High</p>
    <h3 className="text-xl font-bold text-green-500">
      ${coin.high_24h?.toLocaleString()}
    </h3>
  </div>

  <div className="bg-zinc-900 p-4 rounded-xl border border-zinc-800">
    <p className="text-gray-400 text-sm">24h Low</p>
    <h3 className="text-xl font-bold text-red-500">
      ${coin.low_24h?.toLocaleString()}
    </h3>
  </div>
  <div className="bg-zinc-900 p-4 rounded-xl border border-zinc-800 col-span-2 md:col-span-1">
    <p className="text-gray-400 text-sm">ATH Change Percentage</p>
    <h3
      className={`text-2xl font-bold ${
        coin.ath_change_percentage > 0
          ? "text-green-500"
          : "text-red-500"
      }`}
    >
      {coin.ath_change_percentage?.toFixed(2)}%
    </h3>
  </div>
  <div className="bg-zinc-900 p-4 rounded-xl border border-zinc-800">
    <p className="text-gray-400 text-sm">Market Cap</p>
    <h3 className="text-xl font-bold text-white">
      ${coin.market_cap?.toLocaleString()}
    </h3>
  </div>


</div> */}

{/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
  
  <div className="bg-zinc-900 p-4 rounded-xl border border-zinc-800">
    <p className="text-gray-400 text-sm">Current Price</p>
    <h3 className="text-2xl font-bold">{currency.symbol}{coin.current_price}</h3>
  </div>

  <div className="bg-zinc-900 p-4 rounded-xl border border-zinc-800">
    <p className="text-gray-400 text-sm">Market Cap</p>
    <h3 className="text-2xl font-bold">
    {currency.symbol}{coin.market_cap.toLocaleString()}
    </h3>
  </div>

  <div className="bg-zinc-900 p-4 rounded-xl border border-zinc-800">
    <p className="text-gray-400 text-sm">24h Volume</p>
    <h3 className="text-2xl font-bold">
      {currency.symbol}{coin.total_volume.toLocaleString()}
    </h3>
  </div>

  <div className="bg-zinc-900 p-4 rounded-xl border border-zinc-800">
    <p className="text-gray-400 text-sm">Rank</p>
    <h3 className="text-2xl font-bold">
      #{coin.market_cap_rank}
    </h3>
  </div>

  <div className="bg-zinc-900 p-4 rounded-xl border border-zinc-800">
    <p className="text-gray-400 text-sm">24h High</p>
    <h3 className="text-2xl font-bold">
      {currency.symbol}{coin.high_24h}
    </h3>
  </div>

  <div className="bg-zinc-900 p-4 rounded-xl border border-zinc-800">
    <p className="text-gray-400 text-sm">24h Low</p>
    <h3 className="text-2xl font-bold">
      {currency.symbol}{coin.low_24h}
    </h3>
  </div>

  <div className="bg-zinc-900 p-4 rounded-xl border border-zinc-800">
    <p className="text-gray-400 text-sm">24h Change</p>
    <h3
      className={`text-2xl font-bold ${
        coin.price_change_percentage_24h >= 0
          ? "text-green-500"
          : "text-red-500"
      }`}
    >
      {coin.price_change_percentage_24h.toFixed(2)}%
    </h3>
  </div>

  <div className="bg-zinc-900 p-4 rounded-xl border border-zinc-800">
    <p className="text-gray-400 text-sm">Circulating Supply</p>
    <h3 className="text-2xl font-bold">
      {coin.circulating_supply.toLocaleString()}
    </h3>
  </div>

</div> */}

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 p-4 md:p-10">

  <Card title="Current Price">
    {currency.symbol}{coin.current_price.toLocaleString()}
  </Card>

  <Card title="Market Cap">
    {currency.symbol}{coin.market_cap.toLocaleString()}
  </Card>

  <Card title="24H Volume">
    {currency.symbol}{coin.total_volume.toLocaleString()}
  </Card>

  <Card title="Rank">
    #{coin.market_cap_rank}
  </Card>

  <Card title="24H High">
    {currency.symbol}{coin.high_24h.toLocaleString()}
  </Card>

  <Card title="24H Low">
    {currency.symbol}{coin.low_24h.toLocaleString()}
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
    {currency.symbol}{coin.price_change_24h.toFixed(2)}
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
    {currency.symbol}{coin.ath.toLocaleString()}
  </Card>

  <Card title="ATH Date">
    {new Date(coin.ath_date).toLocaleDateString()}
  </Card>

  <Card
    title="ATH Change %"
    className={
      coin.ath_change_percentage >= 0
        ? "text-green-500"
        : "text-red-500"
    }
  >
    {coin.ath_change_percentage.toFixed(2)}%
  </Card>

  <Card title="All Time Low">
    {currency.symbol}{coin.atl.toLocaleString()}
  </Card>

  <Card title="ATL Date">
    {new Date(coin.atl_date).toLocaleDateString()}
  </Card>

  <Card
    title="ATL Change %"
    className={
      coin.atl_change_percentage >= 0
        ? "text-green-500"
        : "text-red-500"
    }
  >
    {coin.atl_change_percentage.toFixed(2)}%
  </Card>

  <Card title="Circulating Supply">
    {coin.circulating_supply.toLocaleString()}
  </Card>

  <Card title="Total Supply">
    {coin.total_supply
      ? coin.total_supply.toLocaleString()
      : "N/A"}
  </Card>

  <Card title="Max Supply">
    {coin.max_supply
      ? coin.max_supply.toLocaleString()
      : "Unlimited"}
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
    <h3 className={`break-words text-xl font-bold ${className}`}>
      {children}
    </h3>
  </div>
);