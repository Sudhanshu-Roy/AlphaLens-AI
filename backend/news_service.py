from yahooquery import search


def get_news(ticker):

    results = search(
        ticker
    )

    news = (
        results
        .get("news", [])
    )

    articles = []

    for article in news[:5]:

        articles.append({

            "title":
            article.get("title"),

            "publisher":
            article.get(
                "publisher"
            )

        })

    return articles
