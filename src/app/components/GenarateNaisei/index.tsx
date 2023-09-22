"use client"

import { useNaiseiIdStore } from "@/app/hooks/useNaiseiIdStore";
// import { checkSubscription } from "@/app/libs/subscription";
import axios from "axios";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";



export function GenarateNaisei({
  textData,
  isPro = false,
  emotion,
}: {
  textData: any
  isPro: boolean;
  emotion: string
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [theme, setTheme] = useState<string[]>([]);
  const selectedId = useNaiseiIdStore((state) => state.selectedId)


  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (textData === "") return;
    setIsLoading(true);
    // const API_KEY = process.env.OPENAI_API_KEY
    const API_KEY = "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"
    const model = "text-davinci-003";
    const URL = "https://api.openai.com/v1/engines/" + model + "/completions";

    const questions = `前提条件：あなたは、世界でも有数の精神分析家です。
    文章から、著者の心理状態を分析することに長けています。
    次の文章をもとに心理分析してください。
    *文章の返答形式はそれぞれの感情属性に1~10までの点数で評価してください。
    {EmotionalAnalysis:[
      {"negative":""},
      {"positive":""},
      {"neutral":""},
      {"joy":""},
      {"trust":""},
      {"fear":""},
      {"surprise":""},
      {"sadness":""},
      {"disgust":""},
      {"anger":""},
      {"anticipation":""}
    ]}
    の形式で精神分析をします。

    文章：${textData}
    `
    const res = await fetch(URL, {
      method: "POST",
      body: JSON.stringify({
        prompt: questions,
        max_tokens: 200,
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
    });

    const json = await res.json();

    const list = json.choices ? json.choices.map((value: { text: string }) => {
      const str = `{"EmotionalAnalysis":`
      const i = value.text.indexOf(str);
      return value.text.substring(i);
    }) : [];


    // listの値をprismaで保存
    setTheme(list);
    setIsLoading(false);

    const apiUrl = `/api/openai/${selectedId}`;
    const updatedData = {
      emotion: list,
    };

    axios.put(apiUrl, updatedData)
      .then(response => {
        toast.success('Generated!!!!', { duration: 2000 })
        // fetchIsNaisei()
        return response
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };


  const handleGenerated = () => {
    toast.error('Already Generated.', { duration: 2000 })
  }

  return (
    <>
      {/* {emotion.length < 1 ? */}
      <>
        {isPro &&
          <>
            <button
              onClick={handleSubmit}
              className="mx-4 mb-2 mt-2 text-md cursor-pointer rounded-lg border-none px-4 py-2 bg-lime-600 hover:bg-lime-700 text-white"
            >
              Generate
            </button>
            <Toaster
              position="top-center"
              reverseOrder={false}
            />
          </>
        }
        <p>{isLoading ? "ローディング中" : null}</p>
      </>
      {/* : */}
      {/* <>
          <button onClick={handleGenerated} className="mx-4 mb-2 mt-2 text-md cursor-pointer rounded-lg border-none px-4 py-2 bg-slate-500 text-white">
            Generated
          </button>
          <Toaster
            position="top-center"
            reverseOrder={false}
          />
        </>
      } */}
    </ >

  )
}

