"use client"

import StackedBarChart from "@/app/components/Chart/Barchart"
import { PercentAreaChart } from "@/app/components/Chart/PercentAreaChart"
import SimpleRadarChart from "@/app/components/Chart/SimpleRadarChart"
import useGetAllNaisei from "@/app/hooks/useGetNaiseiAll"
import { useEffect, useState } from "react"


const ChartPage = () => {
  const { data, loading, fetch }: any = useGetAllNaisei()
  const [allEmotion, setAllEmotion] = useState([])


  useEffect(() => {
    const newCreatedAt = data.map((item: any) => {
      return {
        id: item.id,
        // naisei: item.naisei,
        created_at: item.created_at.split('T')[0], // 日付部分だけを取得
        emotion: item.emotion
      };
    });
    newCreatedAt.sort((a: any, b: any) => a.id - b.id); //日付を昇順にならべ替え


    // const resEmotion = data.map((item) => item.emotion)
    // const filteredArray = resEmotion.filter(item => !Array.isArray(item) || item.length > 0);

    // // データ正規化2023/09/22
    // // filteredArrayそのまま.replace()使えないからslice(1)した
    // const sliceData = filteredArray.map((item) => item[0].slice(1))
    // // replace順番に改行削除・空白削除, {EmotionalAnalysis:・EmotionalAnalysis:に一致したら削除, '}]}'を'}]'に変換
    // const objectsArray2 = sliceData.map(jsonString => jsonString.replace(/\n|\s+/g, '').replace('{EmotionalAnalysis:', '').replace('}]}', '}]').replace('EmotionalAnalysis:', ''))
    // // parseできた(このデータを使い回す, 日付データも一緒に入れたい)
    // const parsedData = objectsArray2.map(item => JSON.parse(item));


    // データ正規化2023/09/21->わかりやすくまとめた2023/09/22
    // sortしたnewCreatedAtをmapしてるからidが昇順のデータ配列になってるはず
    // filteredArrayそのまま.replace()使えないからslice(1)した
    // replace順番に改行削除・空白削除, {EmotionalAnalysis:・EmotionalAnalysis:に一致したら削除, '}]}'を'}]'に変換
    // parseできた(このデータを使い回す, 日付データも一緒に入れたい)
    const parsedData2 = newCreatedAt
      .filter((item) => !Array.isArray(item.emotion) || item.emotion.length > 0) // nullのデータをフィルタリング
      .map((item) => {
        const jsonString = item.emotion[0].slice(1);
        const cleanedJsonString = jsonString.replace(/\n|\s+/g, '').replace('{EmotionalAnalysis:', '').replace('}]}', '}]').replace('EmotionalAnalysis:', '');
        return JSON.parse(cleanedJsonString);
      });
    console.log("2", parsedData2);
    setAllEmotion(parsedData2)
  }, [data])



  return (
    <>
      <div className="text-black">come soon（作成中....）</div>
      <div className="text-black">This is example data.</div>
      {/* <div className="text-black">{allEmotion}</div> */}


      <div className="p-3 mx-auto text-center mt-10 bg-amber-100/30 max-w-xs border border-white">
        <div className="text-2xl font-bold italic">~Status~</div>
        <div className="text-xl">Total of <span className=" text-indigo-600 font-bold text-2xl">10</span> days.</div>
      </div>

      <PercentAreaChart />
      <StackedBarChart />
      <SimpleRadarChart />
    </>
  )
}

export default ChartPage