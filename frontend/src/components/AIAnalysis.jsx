function AIAnalysis({
  analysis
}) {

  return (

    <div
      className="
      bg-white
      rounded-3xl
      shadow-md
      p-8
      mt-10
      "
    >

      <h2
        className="
        text-3xl
        font-bold
        mb-6
        "
      >
        AI Investment Analysis
      </h2>

      <div
        className="
        grid
        md:grid-cols-6
        gap-4
        "
      >

        <div className="bg-green-50 p-4 rounded-2xl">
          <p>Recommendation</p>

          <h3 className="text-2xl font-bold">
            {analysis.recommendation}
          </h3>
        </div>
         
        <div className="bg-yellow-50 p-4 rounded-2xl">
          <p>Market Sentiment</p>

          <h3 className="text-2xl font-bold">
            {analysis.market_sentiment} ({analysis.sentiment_score})
          </h3>
        </div>

        <div className="bg-pink-50 p-4 rounded-2xl">
          <p>Confidence</p>

          <h3 className="text-2xl font-bold">
            {analysis.confidence_score}
          </h3>
        </div>

        <div className="bg-sky-50 p-4 rounded-2xl">
          <p>Investment Score</p>

          <h3 className="text-2xl font-bold">
            {analysis.investment_score}
          </h3>
        </div>

        <div className="bg-purple-50 p-4 rounded-2xl">
          <p>Growth Score</p>

          <h3 className="text-2xl font-bold">
            {analysis.growth_score}
          </h3>
        </div>

        <div className="bg-red-50 p-4 rounded-2xl">
          <p>Risk Score</p>

          <h3 className="text-2xl font-bold">
            {analysis.risk_score}
          </h3>
        </div>

      </div>

      <div className="mt-8">

        <h3 className="font-bold text-xl">
          Summary
        </h3>

        <p className="mt-2">
          {analysis.summary}
        </p>

      </div>

      <div className="grid md:grid-cols-2 gap-6 mt-8">

        <div
          className="bg-green-50 p-5 rounded-2xl"
        >

          <h3 className="font-bold">
            Opportunities
          </h3>

          <ul className="mt-3">

          {
            analysis.opportunities?.map(
              (
                item,
                index
              ) => (

                <li
                  key={index}
                >
                  • {item}
                </li>

              )
            )
          }

        </ul>

      </div>

      <div
        className="
        bg-red-50
        p-5
        rounded-2xl
        "
      >

      <h3 className="font-bold">
        Risks
      </h3>

      <ul className="mt-3">

        {
          analysis.risks?.map(
            (
              item,
              index
            ) => (

              <li
                key={index}
              >
                • {item}
              </li>

            )
          )
        }

      </ul>

    </div>

  </div>

      <div className="grid md:grid-cols-3 gap-6 mt-8">

        <div className="bg-green-50 p-5 rounded-2xl">

          <h3 className="font-bold">
            Bull Case
          </h3>

          <p className="mt-2">
            {analysis.bull_case}
          </p>

        </div>

        <div className="bg-blue-50 p-5 rounded-2xl">

          <h3 className="font-bold">
            Base Case
          </h3>

          <p className="mt-2">
            {analysis.base_case}
          </p>

        </div>

        <div className="bg-red-50 p-5 rounded-2xl">

          <h3 className="font-bold">
            Bear Case
          </h3>

          <p className="mt-2">
            {analysis.bear_case}
          </p>

        </div>

      </div>

    </div>

  );
}

export default AIAnalysis;