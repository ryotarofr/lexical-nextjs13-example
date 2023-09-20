"use client"

import Image from "next/image";
import { useState } from "react";


export default function EditorPage() {
  const [text, setText] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  const [theme, setTheme] = useState<string[]>([]);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const text = "私は毎朝、7時に起きて、シャワーを浴びて、朝食を食べます。朝食はたいていトーストとコーヒーです。8時に家を出て、電車で会社に向かいます。電車の中では、音楽を聴いたり、本を読んだり、時々仮眠をとったりします。会社に着くと、まずメールをチェックして、仕事の予定を確認します。私はエンジニアとして働いていますが、プログラミングが得意ではありません。よくエラーやバグに悩まされます。同僚や上司に助けてもらうことも多いです。でも、仕事がうまくいったときは、とてもやりがいを感じます。昼休みは、同僚と一緒に近くのレストランでランチを食べます。私は和食が好きなので、よく寿司やうどんや丼物を注文します。ランチの後は、コーヒーを飲んでリフレッシュします。午後は、会議や打ち合わせが多いです。プロジェクトの進捗や課題について話し合います。時々、クライアントとのミーティングもあります。そのときは、スーツを着て、ビジネスマナーに気をつけます。仕事が終わるのは、だいたい18時ごろです。帰り道では、スーパーで買い物をしたり、友達と飲みに行ったりします。家に帰ると、夕食を作って食べます。夕食は簡単なものが多いです。カップラーメンや冷凍ピザなどです。夜は、テレビを見たり、インターネットをしたりします。最近は、Netflixでドラマを見るのにはまっています。特に海外のドラマが好きです。英語の勉強にもなります。寝る前には、日記を書きます。その日の出来事や感想や目標などを書きます。日記を書くことで、自分の気持ちや考え方を整理できます。日記は私の大切な友達です。私の一日はこんな感じです。平凡な日々ですが、楽しんでいます。毎日が新しい発見や挑戦です。これからも自分らしく生きていきたいと思います。"

    // if (text === "") return;
    setIsLoading(true);

    const API_KEY = "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";
    // const API_KEY = ""
    const model = "text-davinci-003";
    const URL = "https://api.openai.com/v1/engines/" + model + "/completions";

    const colors = ["メイン", "サブトーン", "アクセント"];

    // const questions = colors.map((color) => {
    //   return `前提条件：あなたはブログのデザインカラーを決める係です。
    //           ユーザーから渡される抽象的なテーマから、そのテーマに合う"${color}"の色を、backgroundColorと、textColorをそれぞれ1つずつのみ提案してください。
    //           色はrgba形式で、${color} : {"background": "提案する色", "color": "提案する色"}の形で提案します。

    //           テーマ："${text}"`;
    // });

    // const text =
    //   ' 私は毎朝、7時に起きて、シャワーを浴びて、朝食を食べます。朝食はたいていトーストとコーヒーです。8時に家を出て、電車で会社に向かいます。電車の中では、音楽を聴いたり、本を読んだり、時々仮眠をとったりします。会社に着くと、まずメールをチェックして、仕事の予定を確認します。私はエンジニアとして働いていますが、プログラミングが得意ではありません。よくエラーやバグに悩まされます。同僚や上司に助けてもらうことも多いです。でも、仕事がうまくいったときは、とてもやりがいを感じます。昼休みは、同僚と一緒に近くのレストランでランチを食べます。私は和食が好きなので、よく寿司やうどんや丼物を注文します。ランチの後は、コーヒーを飲んでリフレッシュします。午後は、会議や打ち合わせが多いです。プロジェクトの進捗や課題について話し合います。時々、クライアントとのミーティングもあります。そのときは、スーツを着て、ビジネスマナーに気をつけます。仕事が終わるのは、だいたい18時ごろです。帰り道では、スーパーで買い物をしたり、友達と飲みに行ったりします。家に帰ると、夕食を作って食べます。夕食は簡単なものが多いです。カップラーメンや冷凍ピザなどです。夜は、テレビを見たり、インターネットをしたりします。最近は、Netflixでドラマを見るのにはまっています。特に海外のドラマが好きです。英語の勉強にもなります。寝る前には、日記を書きます。その日の出来事や感想や目標などを書きます。日記を書くことで、自分の気持ちや考え方を整理できます。日記は私の大切な友達です。私の一日はこんな感じです。平凡な日々ですが、楽しんでいます。毎日が新しい発見や挑戦です。これからも自分らしく生きていきたいと思います。'

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

    *文章：${text}
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

    // const list = json.choices.map((value: { text: string }) => {
    //   const str = `{"background":`;
    //   const i = value.text.indexOf(str);
    //   return value.text.substring(i);
    // });

    const list = json.choices.map((value: { text: string }) => {
      const str = `{"EmotionalAnalysis":`
      const i = value.text.indexOf(str);
      return value.text.substring(i);
    });

    // listの値をprismaで保存
    setTheme(list);
    setIsLoading(false);
  };

  const parseJsonString = (value: string) => {
    try {
      const str = JSON.parse(value);
      return str;
    } catch (e) {
      console.log(e);
    }
    return {};
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">src/app/page.tsx</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      {/* "-z-10"を追加 */}
      <div className="-z-10 relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <form onSubmit={handleSubmit}>
        <input
          className="text-black p-1 text-lg w-60"
          type="text"
          placeholder="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          className={`mx-3 p-1.5 rounded-md font-medium bg-blue-500`}
          type="submit"
        >
          送信
        </button>
      </form>
      <p>{isLoading ? "ローディング中" : null}</p>
      <div>
        {theme.length > 0
          ? theme.map((value, index) => {
            return (
              <p
                key={index}
                className={`p-2 my-2 rounded-sm`}
                style={parseJsonString(value)}
              >
                {value}
              </p>
            );
          })
          : null}
      </div>
    </main>

  )
}

// [
//   { "joy": "" },
//   { "trust": "" },
//   { "fear": "" },
//   { "surprise": "" },
//   { "sadness": "" },
//   { "disgust": "" },
//   { "anger": "" },
//   { "anticipation": "" }
// ]


// joy: 0～10
// [joy]
// trust: 0～10
// [trust]
// fear: 0～10
// [fear]
// surprise: 0～10
// [surprise]
// sadness: 0～10
// [sadness]
// disgust: 0～10
// [disgust]
// anger: 0～10
// [anger]
// anticipation: 0～10
// [anticipation]
