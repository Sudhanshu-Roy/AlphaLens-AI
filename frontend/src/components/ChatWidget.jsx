import { useState } from "react";
import api from "../services/api";

function ChatWidget({ticker}) {

  const [open, setOpen] =
    useState(false);
   
  const [question, setQuestion] =
    useState("");

  const [answer, setAnswer] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  return (
    <>
      <button
        onClick={() =>
          setOpen(!open)
        }
        className="
        fixed
        bottom-6
        right-6

        w-16
        h-16

        rounded-full

        bg-sky-500
        text-white

        text-xl
        font-bold

        shadow-xl

        z-50
        "
      >
        AI
      </button>

      {
        open && (

          <div
            className="
            fixed

            bottom-24
            right-6

            w-[400px]
            h-[500px]

            bg-white

            rounded-3xl

            shadow-2xl

            z-50

            p-6
            "
          >

            <h2
              className="
              text-2xl
              font-bold
              "
            >
              Ask AlphaLens
            </h2>

          </div>

        )
      }

    </>
  );
}

export default ChatWidget;