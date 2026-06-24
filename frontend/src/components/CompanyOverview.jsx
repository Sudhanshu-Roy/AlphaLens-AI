function CompanyOverview({
  stockData
}) {

  return (

    <div
      className="
      bg-white
      rounded-3xl
      shadow-md
      p-8
      mt-8
      "
    >

      <div
        className="
        flex
        justify-between
        items-start
        "
      >

        <div>

          <h2
            className="
            text-4xl
            font-bold
            "
          >
            {stockData.name}
          </h2>

          <p
            className="
            text-gray-500
            mt-2
            "
          >
            {stockData.symbol}
          </p>

        </div>

      </div>

      <div
        className="
        grid
        md:grid-cols-4
        gap-6
        mt-8
        "
      >

        <div>

          <p
            className="
            text-gray-500
            "
          >
            Sector
          </p>

          <h3
            className="
            font-semibold
            "
          >
            {stockData.sector}
          </h3>

        </div>

        <div>

          <p
            className="
            text-gray-500
            "
          >
            Industry
          </p>

          <h3
            className="
            font-semibold
            "
          >
            {stockData.industry}
          </h3>

        </div>

        <div>

          <p
            className="
            text-gray-500
            "
          >
            Employees
          </p>

          <h3
            className="
            font-semibold
            "
          >
            {stockData.employees?.toLocaleString()}
          </h3>

        </div>

        <div>

          <p
            className="
            text-gray-500
            "
          >
            Website
          </p>

          <a
            href={stockData.website}
            target="_blank"
            className="
            text-sky-600
            font-semibold
            "
          >
            Visit Website
          </a>

        </div>

      </div>

    </div>

  )

}

export default CompanyOverview