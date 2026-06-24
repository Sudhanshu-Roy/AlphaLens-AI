// src/App.jsx

import { useEffect, useState } from "react";
import NewsSection from "./components/NewsSection";
import api from "./services/api";
import CompanySelector from "./components/CompanySelector";
import StockCard from "./components/StockCard";
import PriceChart from "./components/PriceChart";
import AIAnalysis from "./components/AIAnalysis";
import CompanyOverview from "./components/CompanyOverview";
import ChatSection from "./components/ChatSection";

function App() {

  const [ticker, setTicker] =
    useState("NVDA");

  const [stockData, setStockData] =
    useState(null);

  const [historyData, setHistoryData] =
    useState([]);

  const [analysis, setAnalysis] =
    useState(null);

  const [news, setNews] =
    useState([]);

  useEffect(() => {

    fetchData();

  }, [ticker]);

  async function fetchData() {

    const stock =
      await api.get(
        `/stock/${ticker}`
      );

    const newsResponse =
      await api.get(
        `/news/${ticker}`
      );

    const history =
      await api.get(
        `/history/${ticker}`
      );

    const analysisResponse =
      await api.get(
      `/analyze/${ticker}`
    );


    setStockData(
      stock.data
    );

    setNews(
      newsResponse.data
    );

    setHistoryData(
      history.data
    );

    setAnalysis(
      analysisResponse.data
    );
  }

  return (
    <div
      className="
      min-h-screen
      bg-slate-50
      p-10
      "
    >

      <div
        className="
        max-w-7xl
        mx-auto
        "
      >

        <h1
          className="
          text-5xl
          font-bold
          "
        >
          AlphaLens AI
        </h1>

        <p
          className="
          text-gray-500
          mt-2
          mb-8
          "
        >
          AI Powered Investment Intelligence
        </p>

        <CompanySelector
          selected={ticker}
          setSelected={setTicker}
        />

        {stockData && (

          <CompanyOverview
            stockData={stockData}
          />

        )
        }

        {stockData && (

          <>
            <h2 className="text-3xl font-bold mt-8">
              {stockData.name}
            </h2>

            <div
              className="
              grid
              grid-cols-1
              md:grid-cols-5
              gap-6
              mt-8
              "
            >
              

              <StockCard
                title="Current Price"
                value={`$${stockData.current_price}`}
              />

              <StockCard
                title="Market Cap"
                value={`$${(stockData.market_cap / 1000000000000).toFixed(2)} T`}
              />

              <StockCard
                title="PE Ratio"
                value={Number(stockData.pe_ratio).toFixed(2)}
              />

              <StockCard
                title="52W High"
                value={`$${stockData.high_52w}`}
              />

              <StockCard
                title="52W Low"
                value={`$${stockData.low_52w}`}
              />

            </div>

            <div className="mt-10">

              <PriceChart
                data={historyData}
              />

              {
                news.length > 0 && (

                 <NewsSection
                   news={news}
                />

                )
              }

            </div>

            {
              analysis && (

                <AIAnalysis
                  analysis={analysis}
                />

              )
            }

            {
              analysis && (

                <ChatSection
                  
                />

              )
            }

          </>
        )}

      </div>

    </div>
  );
}

export default App;