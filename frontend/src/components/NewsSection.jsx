function NewsSection({
  news
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
        Recent News
      </h2>

      <div className="space-y-4">

        {
          news.map(
            (
              article,
              index
            ) => (

              <div
                key={index}
                className="
                border-b
                pb-4
                "
              >

                <h3
                  className="
                  font-semibold
                  "
                >
                  {article.title}
                </h3>

                <p
                  className="
                  text-sm
                  text-gray-500
                  mt-1
                  "
                >
                  {article.publisher}
                </p>

              </div>

            )
          )
        }

      </div>

    </div>

  )

}

export default NewsSection