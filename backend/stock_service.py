import yfinance as yf
import json
from .news_service import (
    get_news
)
from .llm import ask_llm

from .prompts import (
    build_analysis_prompt, build_chat_prompt
)

def get_stock_data(ticker):

    stock = yf.Ticker(ticker)

    info = stock.info

    return {
        "name": info.get("longName"),

        "symbol": info.get("symbol"),

        "sector": info.get("sector"),

        "industry": info.get("industry"),

        "employees": info.get("fullTimeEmployees"),

        "website": info.get("website"),

        "current_price": info.get("currentPrice"),

        "market_cap": info.get("marketCap"),

        "pe_ratio": info.get("trailingPE"),

        "high_52w": info.get("fiftyTwoWeekHigh"),

        "low_52w": info.get("fiftyTwoWeekLow")
    }

def get_stock_history(ticker):

    stock = yf.Ticker(ticker)

    history = stock.history(
        period="1y"
    )

    return [
        {
            "date": str(index.date()),
            "close": round(
                row["Close"],
                2
            )
        }

        for index, row
        in history.iterrows()
    ]

def analyze_stock(ticker):

    stock_data = (get_stock_data(ticker))
    news = (get_news(ticker))

    prompt = (build_analysis_prompt(stock_data, news))

    result = ask_llm(prompt)

    result = (
        result
        .replace("```json", "")
        .replace("```", "")
        .strip()
    )

    return json.loads(
        result
    )

def chat_with_stock(
    ticker,
    question
):

    stock_data = (
        get_stock_data(
            ticker
        )
    )

    news = (
        get_news(
            ticker
        )
    )

    analysis = (
        analyze_stock(
            ticker
        )
    )

    prompt = (
        build_chat_prompt(
            stock_data,
            news,
            analysis,
            question
        )
    )

    return {
        "answer":
        ask_llm(prompt)
    }
