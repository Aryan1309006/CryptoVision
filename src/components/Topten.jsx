import React from "react";
import { useNavigate } from "react-router-dom";
import { useCryptoContext } from "../context/Cryptocontext";

export const Topten = ({ item }) => {
  const { currency } = useCryptoContext();
  const navigate = useNavigate();

  const price = typeof item?.current_price === "number" ? item.current_price : 0;
  const priceChange = typeof item?.price_change_percentage_24h === "number" ? item.price_change_percentage_24h : 0;
  const marketCap = typeof item?.market_cap === "number" ? item.market_cap : 0;

  return (
    <div className="border-b border-slate-200 transition duration-200 last:border-none hover:bg-slate-100 dark:border-gray-800 dark:hover:bg-gray-900" onClick={() => navigate(`/coin/${item.id}`)}>
      <div className="flex h-16 items-center px-4 text-slate-800 md:h-20 md:px-6 dark:text-white">
        <div className="w-[10%] font-semibold text-slate-400 md:w-[8%]">{item.market_cap_rank}</div>

        <div className="flex w-[45%] items-center gap-3 md:w-[34%]">
          <img src={item.image} alt={item.name} className="h-8 w-8 md:h-10 md:w-10" />

          <div>
            <h2 className="text-sm font-semibold md:text-lg">{item.name}</h2>
            <p className="text-xs uppercase text-slate-400">{item.symbol}</p>
          </div>
        </div>

        <div className="w-[20%] text-right text-sm font-medium md:w-[18%] md:text-base">
          {currency.symbol}{price.toLocaleString()}
        </div>

        <div className={`w-[25%] text-right text-sm font-semibold md:w-[20%] md:text-base ${priceChange >= 0 ? "text-green-500" : "text-red-500"}`}>
          {priceChange.toFixed(2)}%
        </div>

        <div className="hidden text-right text-base md:block md:w-[20%]">
          {currency.symbol}{(marketCap / 1e9).toFixed(2)}B
        </div>
      </div>
    </div>
  );
};