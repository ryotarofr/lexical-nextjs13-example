"use client"

import { useNaiseiIdStore } from "@/app/hooks/useNaiseiIdStore";
// import { checkSubscription } from "@/app/libs/subscription";
import axios from "axios";
import { useEffect, useState } from "react";



export function GenarateNaisei({
  textData,
  isPro = false
}: {
  textData: any
  isPro: boolean;
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [theme, setTheme] = useState<string[]>([]);
  const selectedId = useNaiseiIdStore((state) => state.selectedId)

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (textData === "") return;
    setIsLoading(true);
    const API_KEY = process.env.OPENAI_API_KEY
    const model = "text-davinci-003";
    const URL = "https://api.openai.com/v1/engines/" + model + "/completions";

    const questions = `前提条件：あなたは、世界でも有数の精神分析家です。
    *文章から、著者の心理状態を分析することに長けています。
    次の*文章をもとに心理分析してください。
    *文章の返答形式はそれぞれの感情属性に1~10までの点数で評価してください。
    {"EmotionalAnalysis":[
      {"negative:""},
      {"positive": ""},
      {"Neutral": ""},
      { "joy": "" },
      { "trust": "" },
      { "fear": "" },
      { "surprise": "" },
      { "sadness": "" },
      { "disgust": "" },
      { "anger": "" },
      { "anticipation": "" }
      }
    ]}
    の形式で精神分析をします。

    *文章：${textData}
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

    const list = json.choices.map((value: { text: string }) => {
      const str = `{"EmotionalAnalysis":`
      const i = value.text.indexOf(str);
      return value.text.substring(i);
    });

    // listの値をprismaで保存
    setTheme(list);
    setIsLoading(false);

    const apiUrl = `/api/openai/${selectedId}`;
    const updatedData = {
      emotion: list,
    };

    axios.put(apiUrl, updatedData)
      .then(response => {
        // toast.success('Updated Naisei!!!!', { duration: 5000 })
        // fetchIsNaisei()
        return response
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  return (
    <div>
      {isPro ?
        <form onSubmit={handleSubmit}>
          <button
            className={`mx-3 p-1.5 rounded-md font-medium bg-blue-500`}
            type="submit"
          >
            Generate
          </button>
        </form>
        :
        <div>not Pro</div>
      }
      <p>{isLoading ? "ローディング中" : null}</p>
    </div>
  )
}
