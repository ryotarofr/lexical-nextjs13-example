"use client"

import { useEffect, useState } from "react";
import useRefreshStore from "@/app/hooks/useRefreshStore";
import useGetAllNaisei from "@/app/hooks/useGetNaiseiAll";
import { useNaiseiIdStore } from "@/app/hooks/useNaiseiIdStore";

export const Note = () => {
  const [naisei, setNaisei] = useState([])
  const { toggleRefresh } = useRefreshStore()
  const { data, loading }: any = useGetAllNaisei()

  // useEffect内はGetしたnaiseiのデータを即時反映させるために必要(もっといい方法ありそう)
  useEffect(() => {
    const resNaisei = data.map((item: any) => item.naisei)
    const newArray = resNaisei.map((item: any) => {
      const parsedItem = JSON.parse(item); // JSON文字列をJavaScriptオブジェクトに変換
      return parsedItem.root.children[0].children[0].text; // textの値を抽出
    });

    async function processData() {
      const replacedData: any = [];
      for (let i = 0; i < data.length; i++) {
        const item = { ...data[i] };
        try {
          const naiseiObj = JSON.parse(item.naisei);
          if (naiseiObj.root && naiseiObj.root.children && naiseiObj.root.children[0] && naiseiObj.root.children[0].children) {
            const textValue = naiseiObj.root.children[0].children[0].text;
            if (textValue === newArray[i]) {
              item.naisei = newArray[i];
            }
          }
        } catch (error) {
          console.error("Error parsing JSON:", error);
        }
        replacedData.push(item);
      }
      const newCreatedAt = replacedData.map((item: any) => {
        return {
          id: item.id,
          naisei: item.naisei,
          created_at: item.created_at.split('T')[0] // 日付部分だけを取得
        };
      });
      newCreatedAt.sort((a: any, b: any) => b.id - a.id);
      setNaisei(newCreatedAt)
    }
    processData();
  }, [data, setNaisei])

  const handleItemClick = (naiseiId: number) => {
    useNaiseiIdStore.getState().setSelectedId(naiseiId);
    toggleRefresh();
    let timeoutId = setTimeout(() => {
      // Editorのstateをrefreshしないと値が更新されないから追加してる
      toggleRefresh();
    }, 100)
    return () => {
      clearTimeout(timeoutId)
    }
  };

  return (
    <div className="flex justify-center mx-4">
      <div className="max-w-2xl">
        {/* <div className="text-center pt-4">
          <span className="mt-8 px-2 text-indigo-200 text-2xl font-bold italic border-b">Note</span>
        </div> */}
        {/* <CreateNaisei /> */}
        {!loading
          ?
          <>
            {naisei.map((item: any) => (
              <div
                // href={`/${item.id}`}
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                className="my-2 rounded-md cursor-pointer px-2"
              >
                <div className="text-start text-3xl break-words whitespace-pre-wrap">{item.naisei}</div>
                <div className="text-slate-400 text-end">{item.created_at}</div>
              </div>
            )
            )}
            {naisei.length <= 0 && <div className="text-lg">Make a post now!</div>}
          </>
          :
          <div>loading.....</div>
        }
      </div>
    </div>
  )
}