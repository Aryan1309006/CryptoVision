import {
  Search,
  BarChart3,
  TrendingUp,
  Coins,
  ShieldCheck,
  Globe,
} from "lucide-react";

const features = [
  {
    icon: <Search size={32} />,
    title: "Smart Coin Search",
    description:
      "Quickly search thousands of cryptocurrencies and navigate directly to detailed information.",
  },
  {
    icon: <TrendingUp size={32} />,
    title: "Live Market Data",
    description:
      "Stay updated with real-time prices, market capitalization, trading volume, and 24-hour changes.",
  },
  {
    icon: <BarChart3 size={32} />,
    title: "Interactive Charts",
    description:
      "Visualize price history through clean and responsive charts to understand market trends.",
  },
  {
    icon: <Coins size={32} />,
    title: "Top Cryptocurrency Rankings",
    description:
      "Browse the top cryptocurrencies ranked by market capitalization and performance.",
  },
  {
    icon: <ShieldCheck size={32} />,
    title: "Reliable Data",
    description:
      "Powered by the CoinGecko API, providing trusted and frequently updated cryptocurrency information.",
  },
  {
    icon: <Globe size={32} />,
    title: "Responsive Dashboard",
    description:
      "Optimized for desktop, tablet, and mobile devices with a modern dashboard experience.",
  },
];

export default function Features() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors dark:bg-slate-950 dark:text-white">
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 py-20 text-center">
        <h1 className="mb-6 text-5xl font-bold">
          Powerful Features for Every Crypto Enthusiast
        </h1>

        <p className="mx-auto max-w-3xl text-lg text-slate-600 dark:text-gray-400">
          CryptoVision provides everything you need to explore cryptocurrency
          markets, monitor price movements, and discover detailed insights with
          a fast and intuitive interface.
        </p>
      </section>

      {/* Features Grid */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="mb-5 text-blue-500">{feature.icon}</div>

              <h3 className="mb-3 text-2xl font-semibold">{feature.title}</h3>

              <p className="leading-7 text-slate-600 dark:text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="bg-slate-100 py-20 dark:bg-slate-900">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-4xl font-bold">Why Choose CryptoVision?</h2>

            <p className="leading-8 text-slate-600 dark:text-gray-400">
              CryptoVision combines live cryptocurrency data, beautiful
              visualizations, and an intuitive interface into one modern
              dashboard. Whether you're a beginner exploring digital assets or
              an experienced investor monitoring market trends, CryptoVision
              makes crypto analytics simple and accessible.
            </p>
          </div>

          <div className="space-y-5">
            <div className="rounded-xl bg-white p-5 shadow-sm dark:bg-slate-800">
              ✅ Real-time cryptocurrency prices
            </div>

            <div className="rounded-xl bg-white p-5 shadow-sm dark:bg-slate-800">
              ✅ Detailed market statistics
            </div>

            <div className="rounded-xl bg-white p-5 shadow-sm dark:bg-slate-800">
              ✅ Interactive historical charts
            </div>

            <div className="rounded-xl bg-white p-5 shadow-sm dark:bg-slate-800">
              ✅ Fast search functionality
            </div>

            <div className="rounded-xl bg-white p-5 shadow-sm dark:bg-slate-800">
              ✅ Mobile-friendly responsive design
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 text-center">
        <h2 className="mb-5 text-4xl font-bold">
          Explore the Crypto Market Today
        </h2>

        <p className="mb-8 text-slate-600 dark:text-gray-400">
          Search, analyze, and track your favorite cryptocurrencies with
          CryptoVision.
        </p>

        <button className="rounded-xl bg-blue-600 px-8 py-3 font-semibold transition hover:bg-blue-700">
          Get Started
        </button>
      </section>
    </div>
  );
}