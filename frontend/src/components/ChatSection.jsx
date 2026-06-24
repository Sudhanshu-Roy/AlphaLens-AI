import { useState } from "react";

import api from "../services/api";

function ChatSection({
  ticker
}) {

  const [question,
    setQuestion] =
    useState("");

  const [answer,
    setAnswer] =
    useState("");

  const [loading,
    setLoading] =
    useState(false);

  async function askQuestion() {

    setLoading(true);

    const response =
      await api.post(
        "/chat",
        {
          ticker,
          question
        }
      );

    setAnswer(
      response.data.answer
    );

    setLoading(false);
  }

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
        Ask AlphaLens
      </h2>

      <input
        type="text"
        value={question}
        onChange={(e) =>
          setQuestion(
            e.target.value
          )
        }
        placeholder="Why is NVIDIA a buy?"
        className="
        w-full
        border
        rounded-xl
        p-4
        "
      />

      <button
        onClick={
          askQuestion
        }
        className="
        mt-4
        bg-sky-500
        text-white
        px-6
        py-3
        rounded-xl
        "
      >

        {
          loading
          ? "Thinking..."
          : "Ask"
        }

      </button>

      {
        answer && (

          <div
            className="
            mt-6
            p-5
            bg-slate-50
            rounded-xl
            "
          >

            {answer}

          </div>

        )
      }

    </div>

  )

}

export default ChatSection;