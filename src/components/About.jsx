import React from "react";
import { Link } from "react-router-dom";
import {
  TrendingUp,
  ShieldCheck,
  Zap,
  BarChart3,
  Globe2,
  Search,
} from "lucide-react";

export const About = () => {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 transition-colors duration-300 dark:bg-[#181B20] dark:text-white">

      {/* ================= HERO ================= */}
      <section className="px-4 pb-16 pt-24 md:pb-24 md:pt-32">
        <div className="mx-auto max-w-6xl text-center">

          <span className="inline-flex rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-500">
            About CryptoVision
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-7xl">
            Understand Crypto.
            <br />
            <span className="text-emerald-500">
              See the Future.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg md:text-xl dark:text-slate-300">
            CryptoVision is a modern cryptocurrency platform designed to
            help users track live crypto prices, understand market trends,
            and explore digital assets through a simple and intuitive
            interface.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/pricing"
              className="rounded-xl bg-emerald-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-emerald-400"
            >
              Explore Crypto Prices
            </Link>

            <Link
              to="/features"
              className="rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold transition hover:border-emerald-400 hover:text-emerald-500 dark:border-slate-700 dark:bg-slate-900"
            >
              Explore Features
            </Link>
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="border-y border-slate-200 bg-white px-4 py-16 dark:border-slate-800 dark:bg-slate-900/40">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">

          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-emerald-500">
              Who We Are
            </span>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              A smarter way to explore cryptocurrency
            </h2>

            <p className="mt-5 leading-7 text-slate-600 dark:text-slate-300">
              The cryptocurrency market moves quickly. Prices change every
              second, new projects appear constantly, and understanding
              market data can be difficult.
            </p>

            <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
              CryptoVision brings important cryptocurrency information
              together in one place, allowing users to quickly search for
              coins, monitor prices, compare market capitalization, and
              understand 24-hour market movements.
            </p>

            <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
              Our goal is to make cryptocurrency data easier to understand
              for both beginners and experienced enthusiasts.
            </p>
          </div>

          {/* Visual Card */}
          <div className="relative">
            <div className="rounded-3xl border border-emerald-500/20 bg-slate-100 p-6 shadow-xl dark:bg-slate-900">

              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Market Overview
                  </p>

                  <p className="mt-1 text-2xl font-bold">
                    Crypto Market
                  </p>
                </div>

                <div className="rounded-xl bg-emerald-500/10 p-3 text-emerald-500">
                  <TrendingUp size={25} />
                </div>
              </div>

              <div className="space-y-4">

                <div className="rounded-2xl bg-white p-4 dark:bg-slate-950">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">
                      Bitcoin
                    </span>

                    <span className="text-emerald-500">
                      +2.84%
                    </span>
                  </div>

                  <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
                    <div className="h-full w-[75%] rounded-full bg-emerald-500" />
                  </div>
                </div>

                <div className="rounded-2xl bg-white p-4 dark:bg-slate-950">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">
                      Ethereum
                    </span>

                    <span className="text-emerald-500">
                      +1.92%
                    </span>
                  </div>

                  <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
                    <div className="h-full w-[62%] rounded-full bg-emerald-500" />
                  </div>
                </div>

                <div className="rounded-2xl bg-white p-4 dark:bg-slate-950">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">
                      Solana
                    </span>

                    <span className="text-red-400">
                      -0.84%
                    </span>
                  </div>

                  <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
                    <div className="h-full w-[42%] rounded-full bg-red-400" />
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="px-4 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">

          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-emerald-500">
              What We Provide
            </span>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Everything you need to explore crypto
            </h2>

            <p className="mt-4 text-slate-600 dark:text-slate-300">
              CryptoVision combines useful market information with a clean,
              responsive experience.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {/* Card 1 */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-emerald-400/50 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500">
                <TrendingUp size={24} />
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Live Market Data
              </h3>

              <p className="mt-3 leading-6 text-slate-600 dark:text-slate-400">
                Track cryptocurrency prices and market movements with
                continuously updated market information.
              </p>
            </div>

            {/* Card 2 */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-emerald-400/50 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500">
                <Search size={24} />
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Easy Coin Search
              </h3>

              <p className="mt-3 leading-6 text-slate-600 dark:text-slate-400">
                Quickly find cryptocurrencies and explore their individual
                market information.
              </p>
            </div>

            {/* Card 3 */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-emerald-400/50 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500">
                <BarChart3 size={24} />
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Market Insights
              </h3>

              <p className="mt-3 leading-6 text-slate-600 dark:text-slate-400">
                Compare market capitalization, prices, rankings, and
                24-hour price changes.
              </p>
            </div>

            {/* Card 4 */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-emerald-400/50 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500">
                <Zap size={24} />
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Fast Experience
              </h3>

              <p className="mt-3 leading-6 text-slate-600 dark:text-slate-400">
                Designed with a lightweight interface that makes exploring
                cryptocurrency information quick and convenient.
              </p>
            </div>

            {/* Card 5 */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-emerald-400/50 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500">
                <Globe2 size={24} />
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Global Crypto Coverage
              </h3>

              <p className="mt-3 leading-6 text-slate-600 dark:text-slate-400">
                Explore a wide range of cryptocurrencies from markets around
                the world.
              </p>
            </div>

            {/* Card 6 */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-emerald-400/50 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500">
                <ShieldCheck size={24} />
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Simple & Reliable
              </h3>

              <p className="mt-3 leading-6 text-slate-600 dark:text-slate-400">
                A straightforward interface focused on presenting useful
                cryptocurrency information without unnecessary complexity.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= WHY CRYPTOVISION ================= */}
      <section className="border-y border-slate-200 bg-white px-4 py-16 dark:border-slate-800 dark:bg-slate-900/40 md:py-24">
        <div className="mx-auto max-w-6xl">

          <div className="grid gap-10 md:grid-cols-2">

            <div>
              <span className="text-sm font-bold uppercase tracking-widest text-emerald-500">
                Why CryptoVision?
              </span>

              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Built to make crypto data easier
              </h2>
            </div>

            <div className="space-y-5">

              <div className="flex gap-4">
                <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-sm font-bold text-slate-950">
                  1
                </div>

                <div>
                  <h3 className="font-bold">
                    Simple interface
                  </h3>

                  <p className="mt-1 text-slate-600 dark:text-slate-400">
                    Important market information is presented in a clean
                    and easy-to-understand format.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-sm font-bold text-slate-950">
                  2
                </div>

                <div>
                  <h3 className="font-bold">
                    Responsive experience
                  </h3>

                  <p className="mt-1 text-slate-600 dark:text-slate-400">
                    Access your cryptocurrency information comfortably
                    across mobile, tablet, and desktop devices.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-sm font-bold text-slate-950">
                  3
                </div>

                <div>
                  <h3 className="font-bold">
                    Designed for everyone
                  </h3>

                  <p className="mt-1 text-slate-600 dark:text-slate-400">
                    Whether you are discovering crypto for the first time
                    or regularly following markets, CryptoVision keeps the
                    experience simple.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-4xl rounded-3xl bg-emerald-400 px-6 py-12 text-center shadow-xl sm:px-10">

          <h2 className="text-3xl font-bold text-white dark:text-slate-950 sm:text-4xl">
            Ready to explore the crypto market?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-white dark:text-slate-900/80">
            Discover cryptocurrency prices, rankings, market
            capitalization, and 24-hour market movements with CryptoVision.
          </p>

          <Link
            to="/pricing"
            className="mt-7 inline-flex rounded-xl bg-slate-950 px-7 py-3 font-semibold text-white transition hover:bg-slate-800"
          >
            Explore Market
          </Link>

        </div>
      </section>

    </div>
  );
};

