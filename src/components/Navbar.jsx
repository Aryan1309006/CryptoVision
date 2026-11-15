import { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { FaBitcoin } from "react-icons/fa";
import { useCryptoContext } from "../context/Cryptocontext";
import { useTheme } from "../context/ThemeContext";
import logo from "../assets/cryptoVisionlogo.png"; 

const navItems = [
  { label: "Home", href: "/" },
  { label: "Pricing", href: "/pricing" },
  { label: "Features", href: "/features" },
  // { label: "Blog", href: "#" },
  { label: "Watchlist", href: "/watchlist" },
];

export default function Navbar() {
  const { currency, setCurrency } = useCryptoContext();
  const { isDark, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const selectClasses =
    "rounded-xl border border-slate-300 bg-white px-2 py-2 text-sm text-slate-800 outline-none transition dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100";
  const iconButtonClasses =
    "inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-300 bg-white text-slate-700 transition hover:border-emerald-400/40 hover:text-emerald-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:text-emerald-400";

  return (
    <header className="sticky top-0 z-50 border-b border-emerald-500/20 bg-white/90 shadow-[0_10px_30px_-20px_rgba(0,0,0,0.25)] backdrop-blur-xl dark:bg-[#181B20]/95 dark:shadow-[0_10px_30px_-20px_rgba(0,0,0,0.8)]">
      <div className="mx-auto flex max-w-4xl items-center justify-between gap-4 px-3 py-4 text-slate-700 md:max-w-7xl md:px-5 dark:text-slate-100">
        <a
  href="/"
  className="flex items-center gap-2 rounded-2xl bg-slate-100/80 px-3 py-2 transition hover:bg-slate-200 dark:bg-slate-900/70 dark:hover:bg-slate-900"
>
  <div className="flex items-center justify-center gap-2 font-bold tracking-tight">
    <img
      src={logo}
      alt="CryptoVision Logo"
      className="h-7 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10"
    />

    <span className="text-l sm:text-xl md:text-3xl">
      Crypto<span className="text-emerald-400">Vision</span>
    </span>
  </div>
</a>

        <nav className="hidden items-center gap-10 lg:flex">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="transition hover:text-emerald-400">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <select
            value={currency.name}
            onChange={(e) => {
              switch (e.target.value) {
                case "usd":
                  setCurrency({ name: "usd", symbol: "$" });
                  break;
                case "inr":
                  setCurrency({ name: "inr", symbol: "₹" });
                  break;
                case "eur":
                  setCurrency({ name: "eur", symbol: "€" });
                  break;
                default:
                  break;
              }
            }}
            className={selectClasses}
          >
            <option value="usd" className="bg-white text-slate-800 dark:bg-slate-900 dark:text-white">USD</option>
            <option value="inr" className="bg-white text-slate-800 dark:bg-slate-900 dark:text-white">INR</option>
            <option value="eur" className="bg-white text-slate-800 dark:bg-slate-900 dark:text-white">EUR</option>
          </select>

          <button type="button" onClick={toggleTheme} aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"} aria-pressed={isDark} className={iconButtonClasses}>
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <a href="#" className="rounded-2xl bg-emerald-500 px-5 py-2 text-sm font-semibold text-white transition hover:bg-emerald-400">Login</a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <select
            value={currency.name}
            onChange={(e) => {
              switch (e.target.value) {
                case "usd":
                  setCurrency({ name: "usd", symbol: "$" });
                  break;
                case "inr":
                  setCurrency({ name: "inr", symbol: "₹" });
                  break;
                case "eur":
                  setCurrency({ name: "eur", symbol: "€" });
                  break;
                default:
                  break;
              }
            }}
            className={`${selectClasses} px-3 py-2`}
          >
            <option value="usd" className="bg-white text-slate-800 dark:bg-slate-900 dark:text-white">USD</option>
            <option value="inr" className="bg-white text-slate-800 dark:bg-slate-900 dark:text-white">INR</option>
            <option value="eur" className="bg-white text-slate-800 dark:bg-slate-900 dark:text-white">EUR</option>
          </select>

          <button type="button" onClick={() => setMobileOpen((prev) => !prev)} aria-label={mobileOpen ? "Close navigation" : "Open navigation"} aria-expanded={mobileOpen} className={iconButtonClasses}>
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white/95 px-5 py-5 lg:hidden dark:border-slate-800 dark:bg-[#181B20]/95">
          <div className="space-y-3">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="block rounded-2xl px-4 py-3 text-slate-700 transition hover:bg-emerald-500/10 hover:text-emerald-500 dark:text-slate-200 dark:hover:text-emerald-300">
                {item.label}
              </a>
            ))}

            <button type="button" onClick={toggleTheme} aria-pressed={isDark} className="flex w-full items-center justify-center gap-2 rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-700 transition hover:border-emerald-400/40 hover:text-emerald-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100">
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
              {isDark ? "Light mode" : "Dark mode"}
            </button>

            <a href="#" className="inline-flex w-full items-center justify-center rounded-2xl bg-emerald-500 px-4 py-3 font-semibold text-slate-950 transition hover:bg-emerald-400">Login</a>
          </div>
        </div>
      )}
    </header>
  );
}
