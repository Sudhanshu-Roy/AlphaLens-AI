import os
import requests

FINNHUB_API_KEY = os.getenv(
    "FINNHUB_API_KEY"
)


def get_news(
    ticker
):

    url = (
        f"https://finnhub.io/api/v1/company-news"
        f"?symbol={ticker}"
        f"&from=2025-01-01"
        f"&to=2026-12-31"
        f"&token={FINNHUB_API_KEY}"
    )

    data = (
        requests
        .get(url)
        .json()
    )

    articles = []

    for article in data[:5]:

        articles.append({

            "title":
            article.get(
                "headline"
            ),

            "publisher":
            article.get(
                "source"
            )

        })

    return articles
