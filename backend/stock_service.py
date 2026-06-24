import os
import json
import requests

from news_service import get_news

from llm import ask_llm

from prompts import (
    build_analysis_prompt,
    build_chat_prompt
)

FINNHUB_API_KEY = os.getenv(
    "FINNHUB_API_KEY"
)


def get_stock_data(ticker):

    profile_url = (
        f"https://finnhub.io/api/v1/stock/profile2"
        f"?symbol={ticker}"
        f"&token={FINNHUB_API_KEY}"
    )

    quote_url = (
        f"https://finnhub.io/api/v1/quote"
        f"?symbol={ticker}"
        f"&token={FINNHUB_API_KEY}"
    )

    profile = requests.get(
        profile_url
    ).json()

    quote = requests.get(
        quote_url
    ).json()

    return {

        "name":
        profile.get("name"),

        "symbol":
        ticker,

        "sector":
        profile.get(
            "finnhubIndustry"
        ),

        "industry":
        profile.get(
            "finnhubIndustry"
        ),

        "employees":
        "N/A",

        "website":
        profile.get(
            "weburl"
        ),

        "current_price":
        quote.get("c"),

        "market_cap":
        profile.get(
            "marketCapitalization"
        ),

        "pe_ratio":
        "N/A",

        "high_52w":
        "N/A",

        "low_52w":
        "N/A"
    }


def get_stock_history(
    ticker
):

    from datetime import (
        datetime,
        timedelta
    )

    end_date = int(
        datetime.now().timestamp()
    )

    start_date = int(
        (
            datetime.now()
            - timedelta(days=365)
        ).timestamp()
    )

    url = (
        f"https://finnhub.io/api/v1/stock/candle"
        f"?symbol={ticker}"
        f"&resolution=D"
        f"&from={start_date}"
        f"&to={end_date}"
        f"&token={FINNHUB_API_KEY}"
    )

    data = requests.get(
        url
    ).json()

    result = []

    closes = data.get(
        "c",
        []
    )

    timestamps = data.get(
        "t",
        []
    )

    for ts, close in zip(
        timestamps,
        closes
    ):

        result.append({

            "date":
            datetime
            .fromtimestamp(ts)
            .strftime("%Y-%m-%d"),

            "close":
            round(
                close,
                2
            )

        })

    return result


def analyze_stock(
    ticker
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

    prompt = (
        build_analysis_prompt(
            stock_data,
            news
        )
    )

    result = ask_llm(
        prompt
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
        ask_llm(
            prompt
        )

    }
