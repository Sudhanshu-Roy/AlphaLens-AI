![Python](https://img.shields.io/badge/Python-3.11-blue)
![FastAPI](https://img.shields.io/badge/FastAPI-Backend-green)
![React](https://img.shields.io/badge/React-Frontend-blue)
![Groq](https://img.shields.io/badge/Groq-LLM-orange)
![License](https://img.shields.io/badge/License-MIT-yellow)

# AlphaLens AI

AI-Powered Investment Intelligence Platform that combines stock market data, financial metrics, news analysis, and Generative AI to help investors make informed decisions.

## Overview

AlphaLens AI is a full-stack AI application that analyzes publicly traded companies using market data, historical stock performance, recent news, and Large Language Models. The platform generates investment insights, market sentiment, risk assessments, growth potential evaluations, and allows users to interact with an AI-powered financial assistant.

The goal of AlphaLens AI is to provide a single dashboard where investors can understand a company's fundamentals, monitor recent developments, and receive AI-generated investment analysis.

---

## Features

### Company Overview

* Company profile and business information
* Sector and industry classification
* Employee count
* Official website links

### Financial Dashboard

* Current stock price
* Market capitalization
* PE Ratio
* 52-week high and low
* Historical stock performance visualization

### News Intelligence

* Real-time financial news aggregation
* Recent company-related news
* Market event monitoring

### AI Investment Analysis

* Investment recommendation (Buy / Hold / Sell)
* Market sentiment evaluation
* Confidence score
* Investment score
* Growth score
* Risk score
* Bull case scenario
* Base case scenario
* Bear case scenario

### AI Financial Assistant

* Ask questions about a company
* Explain investment recommendations
* Analyze risks and opportunities
* Interactive financial chatbot

---

## Tech Stack

### Frontend

* React.js
* JavaScript
* CSS
* Axios
* Recharts

### Backend

* FastAPI
* Python
* REST APIs

### AI Layer

* Groq LLM
* Prompt Engineering
* Structured JSON Output Generation

### Data Sources

* Yahoo Finance
* Financial News Sources

---

## System Architecture

User → React Frontend

↓

FastAPI Backend

↓

Market Data + Financial News

↓

LLM Analysis Engine

↓

Investment Insights + Chatbot Responses

---

## Screenshots

### Dashboard & Company Overview

<img width="851" height="500" alt="Screenshot 2026-06-25 085637" src="https://github.com/user-attachments/assets/7fb29c37-4742-48b8-9797-88ebdc396775" />

### Company Stock Performance Analysis

<img width="803" height="377" alt="Screenshot 2026-06-25 085654" src="https://github.com/user-attachments/assets/db66c26f-33fa-4c5d-bcff-08cee51c38a5" />

### News Intelligence

<img width="796" height="398" alt="Screenshot 2026-06-25 085709" src="https://github.com/user-attachments/assets/8b03b76c-08bc-425c-94e2-86757cd48fc3" />

### AI Investment Analysis & Financial Assistant

<img width="854" height="449" alt="Screenshot 2026-06-25 085725" src="https://github.com/user-attachments/assets/3a1e45fb-b3d9-4597-8928-bd139e130ad6" />

<img width="850" height="439" alt="Screenshot 2026-06-25 085744" src="https://github.com/user-attachments/assets/22495fde-b922-4da7-832f-798b486a0fd9" />

---

## Example AI Analysis Output

```json
{
  "recommendation": "BUY",
  "market_sentiment": "Bullish",
  "confidence": 85,
  "investment_score": 90,
  "growth_score": 95,
  "risk_score": 60
}
```

---

## Key Learning Outcomes

Through this project, I gained hands-on experience with:

* Full Stack AI Application Development
* FastAPI Backend Engineering
* React Frontend Development
* REST API Integration
* Financial Data Processing
* Prompt Engineering
* LLM-Based Structured Output Generation
* AI Chatbot Development
* Data Visualization
* Production Deployment Workflows

---

## Deployment Note

AlphaLens AI was originally developed using Yahoo Finance data through yfinance.

The application works correctly in local environments and all features were successfully implemented and tested. During cloud deployment, Yahoo Finance rate-limiting restrictions on shared cloud infrastructure created reliability challenges for live production hosting.

Rather than replacing the application with a reduced-feature version using lower-quality data providers, the complete implementation has been preserved and documented.

This project demonstrates the full architecture, AI workflow, financial analysis pipeline, and user experience of the platform.

---

## Installation & Setup

### 1. Clone Repository

```bash
git clone https://github.com/Sudhanshu-Roy/AlphaLens-AI.git
cd AlphaLens-AI
```

### 2. Backend Setup

Navigate to backend directory:

```bash
cd backend
```

Create virtual environment:

```bash
python -m venv venv
```

Activate virtual environment:

Windows:

```bash
venv\Scripts\activate
```

Mac/Linux:

```bash
source venv/bin/activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Create a `.env` file:

```env
GROQ_API_KEY=your_api_key_here
```

Start FastAPI server:

```bash
uvicorn main:app --reload
```

Backend will run at:

```text
http://localhost:8000
```

---

### 3. Frontend Setup

Open a new terminal.

Navigate to frontend directory:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start React application:

```bash
npm run dev
```

Frontend will run at:

```text
http://localhost:5173
```

---

### 4. Access Application

Open browser:

```text
http://localhost:5173
```

Select a company and start exploring AI-powered investment insights.

---

## Environment Variables

Create a `.env` file inside backend directory:

```env
GROQ_API_KEY=your_groq_api_key
```

---

## Supported Companies

Currently optimized for:

- NVIDIA (NVDA)
- Apple (AAPL)
- Microsoft (MSFT)
- Google (GOOGL)
- Amazon (AMZN)

---

## Future Improvements

* Portfolio Tracking
* Multi-Stock Comparison
* Analyst Target Price Integration
* Real-Time Alerts
* Watchlists
* Earnings Calendar Analysis
* Advanced Sentiment Analysis
* RAG-based Financial Knowledge System
* Personalized Investment Recommendations

---

## Author

Sudhanshu Roy
