from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .stock_service import (
    get_stock_data, get_stock_history, analyze_stock, chat_with_stock
)
from .news_service import (
    get_news
)
from pydantic import BaseModel

class ChatRequest(BaseModel):
    ticker: str
    question: str

app = FastAPI()
app.add_middleware(
    CORSMiddleware,

    allow_origins=[
        "http://localhost:5173"
    ],

    allow_credentials=True,

    allow_methods=["*"],

    allow_headers=["*"],
)

@app.get("/stock/{ticker}")
def stock_data(ticker: str):

    return get_stock_data(ticker)

@app.get("/history/{ticker}")
def stock_history(ticker: str):

    return get_stock_history(ticker)

@app.get("/analyze/{ticker}")
def stock_analysis(ticker: str):

    stock_data = get_stock_data(ticker)
    return analyze_stock(ticker)

@app.get("/news/{ticker}")
def stock_news(
    ticker: str
):
    return get_news(
        ticker
    )

@app.post("/chat")
def stock_chat(data: ChatRequest):

    return (
        chat_with_stock(
            data.ticker,
            data.question
        )
    )
