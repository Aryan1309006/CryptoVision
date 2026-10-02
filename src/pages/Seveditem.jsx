import React, { useEffect, useState } from "react";
import { Trash2, Bookmark } from "lucide-react";
import { useCryptoContext } from "../context/Cryptocontext";


const Seveditem = () => {
  const { allCoins, loading, error } = useCryptoContext();
  const [savedItems, setSavedItems] = useState([]);

  // Get saved coins from localStorage
  useEffect(() => {
    if (!allCoins) return;

    const wishlist = JSON.parse(
      localStorage.getItem("wishlist") || "[]"
    ).map(String);

    const items = allCoins.filter((coin) =>
      wishlist.includes(String(coin.id))
    );

    setSavedItems(items);
  }, [allCoins]);

  // Remove coin from wishlist
  const handleRemove = (coinId) => {
    const wishlist = JSON.parse(
      localStorage.getItem("wishlist") || "[]"
    ).map(String);
    const id = String(coinId);

    const updatedWishlist = wishlist.filter(
      (wishlistId) => wishlistId !== id
    );

    localStorage.setItem(
      "wishlist",
      JSON.stringify(updatedWishlist)
    );

    setSavedItems((prev) =>
      prev.filter((coin) => String(coin.id) !== id)
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Loading saved coins...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen p-4 sm:p-6">
      <div className="mb-6 flex items-center gap-3">
        <Bookmark size={26} className="text-blue-500" />
        <h1 className="text-2xl font-bold">Saved Coins</h1>
      </div>
<div className="w-full flex justify-center">
      {savedItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-gray-500">
          <Bookmark size={48} className="mb-4 opacity-40" />
          <h2 className="text-xl font-semibold">
            No saved coins
          </h2>
          <p className="mt-2 text-sm">
            Coins you bookmark will appear here.
          </p>
        </div>
      ) : (
       <div className="w-full max-w-4xl overflow-x-auto rounded-t-2xl">
  <table className="w-full min-w-[700px] text-left text-white">
    <thead className="bg-emerald-600">
      <tr>
        <th className="p-5 font-medium">#</th>
        <th className="p-5 font-medium">Coin</th>
        <th className="p-5 font-medium text-center">Price</th>
        <th className="p-5 font-medium text-center">24h Change</th>
        <th className="p-5 font-medium text-center">Market Cap</th>
        <th className="p-5 text-center font-medium">Action</th>
      </tr>
    </thead>

    <tbody className="bg-[#030817]">
      {savedItems.map((coin, index) => (
        <tr
          key={coin.id}
          className="border-b border-slate-800 transition hover:bg-slate-900"
        >
          <td className="p-5 text-slate-400">
            {index + 1}
          </td>

          <td className="p-5">
            <div className="flex items-center gap-4">
              <img
                src={coin.image}
                alt={coin.name}
                className="h-12 w-12 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-white">
                  {coin.name}
                </p>
                <p className="text-sm uppercase text-slate-400">
                  {coin.symbol}
                </p>
              </div>
            </div>
          </td>

          <td className="p-5 text-center font-medium whitespace-nowrap">
            $
            {Number(coin.current_price).toLocaleString("en-US", {
              maximumFractionDigits: 8,
            })}
          </td>

          <td
            className={`p-5 text-center font-medium whitespace-nowrap ${
              Number(coin.price_change_percentage_24h) >= 0
                ? "text-green-500"
                : "text-red-500"
            }`}
          >
            {Number(coin.price_change_percentage_24h).toFixed(2)}%
          </td>

          <td className="p-5 text-center whitespace-nowrap">
            $
            {Number(coin.market_cap).toLocaleString("en-US", {
              notation: "compact",
              maximumFractionDigits: 2,
            })}
          </td>

          <td className="p-5 text-center">
            <button
              onClick={() => handleRemove(coin.id)}
              className="rounded-lg p-2 text-red-500 transition hover:bg-red-500/10 hover:text-red-400"
              aria-label={`Remove ${coin.name} from wishlist`}
            >
              <Trash2 size={20} />
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
      )}
    </div></div>
  );
};

export default Seveditem;
