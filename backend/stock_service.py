import os
import requests
from datetime import datetime
from datetime import timedelta

FINNHUB_API_KEY = os.getenv(
    "FINNHUB_API_KEY"
)


def get_stock_data(
    ticker
):

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

    profile = (
        requests
        .get(profile_url)
        .json()
    )

    quote = (
        requests
        .get(quote_url)
        .json()
    )

    return {

        "name":
        profile.get("name"),

        "symbol":
        ticker,

        "sector":
        profile.get("finnhubIndustry"),

        "industry":
        profile.get("finnhubIndustry"),

        "employees":
        "N/A",

        "website":
        profile.get("weburl"),

        "current_price":
        quote.get("c"),

        "market_cap":
        profile.get("marketCapitalization"),

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

    data = (
        requests
        .get(url)
        .json()
    )

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
            close

        })

    return result
