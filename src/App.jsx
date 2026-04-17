import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { Behavior, GoogleGenAI } from "@google/genai";

const App = () => {
  const [prompt, setPrompt] = useState("");
  const [savePrompt, setSavePrompt] = useState([]);
  const [loading, setLoading] = useState(false);
  const focusScroll = useRef(null);

  // const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY });
  const gemini = async (fieldPrompt) => {
    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: `${fieldPrompt}`,
      });
      setSavePrompt((prev) => [
        ...prev,
        { role: "model", modelRes: `${response.text}` },
      ]);
    } catch (err) {
      setSavePrompt((prev) => [
        ...prev,
        { role: "model", modelRes: `Data Not Found...` },
      ]);
      console.log(savePrompt);
    } finally {
      setLoading(false);
    }
  };

  const formHandle = (e) => {
    e.preventDefault();
    const userPrompt = [
      ...savePrompt,
      { role: "user", userPrompt: prompt.trim() },
    ];
    setSavePrompt(userPrompt);
    setPrompt("");
    setLoading(true);
    gemini(prompt);
  };

  useEffect(() => {
    focusScroll.current?.scrollIntoView({ Behavior: "smooth" });
  }, [formHandle]);

  return (
    <>
      <div className="flex flex-col justify-between w-screen h-screen  bg-gray-900 text-white fixed">
        <div className="bg-gray-800/40 p-5 shadow-md border-b border-gray-800">
          <span className="bg-blue-500 py-1.5 px-2.5  rounded-full text-sm font-bold">
            G
          </span>
          <span className="mx-2 font-semibold text-blue-400 text-lg">
            .T Chatbot
          </span>
        </div>
        <div className="overflow-y-auto scrollbar-custom h-full flex flex-col-reverse">
          <div ref={focusScroll}></div>
          <div className="flex flex-col gap-4 p-5">
            {savePrompt.map((element, idx) => {
              return (
                <>
                  <div
                    className={`flex flex-row ${element.role === "user" ? "justify-end" : "hidden"} `}
                  >
                    <div
                      className={`flex flex-row justify-end items-end gap-2`}
                    >
                      <span className="shadow-md bg-blue-700 text-md rounded-t-lg rounded-l-lg py-1.5 px-2 max-w-3xl">
                        {element.userPrompt}
                      </span>
                      <span className="bg-blue-500 py-1.5 px-2.5  rounded-full text-sm font-bold">
                        G
                      </span>
                    </div>
                  </div>

                  <div
                    className={`flex flex-row ${element.role === "model" ? "justify-start" : "hidden"} `}
                  >
                    <div
                      className={`flex flex-row justify-end items-end gap-2`}
                    >
                      <span className="bg-blue-500 py-1.5 px-2.5  rounded-full text-sm font-bold">
                        G
                      </span>
                      <span className="shadow-md border border-gray-600 bg-gray-700 rounded-t-lg rounded-r-lg py-1.5 px-2 max-w-3xl">
                        {element.modelRes}
                      </span>
                    </div>
                  </div>
                </>
              );
            })}
            {loading && (
              <div className="flex items-end gap-2 justify-start">
                <div className="shrink-0 w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center text-xs font-bold">
                  G
                </div>
                <div className="bg-gray-800 px-4 py-3 rounded-2xl rounded-bl-none flex gap-1 items-center">
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0ms]" />
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:150ms]" />
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:300ms]" />
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="border-t border-gray-800 p-5 bg-gray-950/10">
          <form
            onSubmit={formHandle}
            className="flex flex-row justify-center gap-2"
          >
            <input
              value={prompt}
              onChange={(e) => {
                setPrompt(e.target.value);
              }}
              placeholder="Ask me anything..."
              type="text"
              className="text-gray-300 rounded-xl w-120 bg-gray-800 text-sm px-4 focus:outline-none"
            />
            <button
              disabled={loading}
              className={`bg-blue-600 active:bg-blue-800 text- py-2 px-4 rounded-xl ${loading ? `cursor-not-allowed  opacity-75` : "cursor-pointer opacity-100"}`}
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default App;
