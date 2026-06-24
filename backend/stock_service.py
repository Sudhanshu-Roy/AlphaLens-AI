import yfinance as yf
import json
import time
from .news_service import (
    get_news
)
from .llm import ask_llm

from .prompts import (
    build_analysis_prompt, build_chat_prompt
)

CACHE_DURATION = 600

stock_cache = {}
history_cache = {}
analysis_cache = {}

def get_cached_data(
    cache,
    key
):

    if key in cache:

        data, timestamp = cache[key]

        if (
            time.time()
            - timestamp
            < CACHE_DURATION
        ):

            print(
                f"Cache HIT: {key}"
            )

            return data

    return None

def get_stock_data(
    ticker
):

    cached = get_cached_data(
        stock_cache,
        ticker
    )

    if cached:
        return cached

    print(
    f"Yahoo Request: {ticker}"
    )

    stock = yf.Ticker(
        ticker
    )

    info = stock.info

    data = {

        "name":
        info.get(
            "longName"
        ),

        "symbol":
        info.get(
            "symbol"
        ),

        "sector":
        info.get(
            "sector"
        ),

        "industry":
        info.get(
            "industry"
        ),

        "employees":
        info.get(
            "fullTimeEmployees"
        ),

        "website":
        info.get(
            "website"
        ),

        "current_price":
        info.get(
            "currentPrice"
        ),

        "market_cap":
        info.get(
            "marketCap"
        ),

        "pe_ratio":
        info.get(
            "trailingPE"
        ),

        "high_52w":
        info.get(
            "fiftyTwoWeekHigh"
        ),

        "low_52w":
        info.get(
            "fiftyTwoWeekLow"
        )
    }

    stock_cache[ticker] = (
        data,
        time.time()
    )

    return data

def get_stock_history(
    ticker
):

    cached = get_cached_data(
        history_cache,
        ticker
    )

    if cached:
        return cached

    print(
    f"Yahoo Request: {ticker}"
    )
    
    stock = yf.Ticker(
        ticker
    )

    history = stock.history(
        period="1y"
    )

    data = [

        {

            "date":
            str(
                index.date()
            ),

            "close":
            round(
                row["Close"],
                2
            )

        }

        for index, row
        in history.iterrows()

    ]

    history_cache[ticker] = (
        data,
        time.time()
    )

    return data

def analyze_stock(
    ticker
):

    cached = get_cached_data(
        analysis_cache,
        ticker
    )

    if cached:
        return cached

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

    prompt = (
        build_analysis_prompt(
            stock_data,
            news
        )
    )

    result = (
        ask_llm(
            prompt
        )
    )

    result = (
        result
        .replace(
            "```json",
            ""
        )
        .replace(
            "```",
            ""
        )
        .strip()
    )

    data = json.loads(
        result
    )

    analysis_cache[
        ticker
    ] = (

        data,
        time.time()

    )

    return data

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
