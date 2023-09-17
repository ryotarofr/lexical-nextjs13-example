"use client"

import { format } from "date-fns"
import { useEffect, useState } from "react"
import { BiEdit } from "react-icons/bi"
import useGetAllNaisei from "@/app/hooks/useGetNaiseiAll"
import useNaiseiFrontEnd from "@/app/hooks/useNaiseiFrontEnd"
import useRefreshStore from "@/app/hooks/useRefreshStore"
import { useDateStore } from "@/app/hooks/SelectDateStore"
import { useNaiseiIdStore } from "@/app/hooks/useNaiseiIdStore"

export const Activity = () => {
  const [selectData, setSelectData] = useState([])
  const { data, loading }: any = useGetAllNaisei()
  const { allData, setAllData }: any = useNaiseiFrontEnd()
  const { toggleRefresh } = useRefreshStore();
  const selectedDay = useDateStore((state) => state.selectedDay);

  const footer = selectedDay ? (
    <div className='text-lg'>select : {format(selectedDay, 'yyyy-MM-dd')}.</div>
  ) : (
    <div>Please pick a day.</div>
  );
  const footerDate = footer.props.children[1]

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
      setAllData(newCreatedAt)
      // setAllData(replacedData)
    }
    processData();
  }, [data, setAllData])

  useEffect(() => {
    const filteredData = allData.filter((item: any) => item.created_at.includes(footerDate));
    if (filteredData.length > 0) {
      setSelectData(filteredData)
    } else {
      setSelectData([])
    }
  }, [footerDate, allData])

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
    <>
      <div className=" text-center text-2xl">
        <span className="border-b italic">Activity</span>
      </div>
      {!loading ?
        <>
          {selectData ?
            <div className="flex justify-center">
              <div className="">
                {
                  selectData.map((item: any) => (
                    <div
                      className="flex mr-6 cursor-pointer"
                      key={item.id}
                      onClick={() => handleItemClick(item.id)}
                    >
                      <div className="my-4 truncate">
                        {item.naisei}
                      </div>
                      <div className="text-slate-400 ml-4 my-4 text-md hidden md:block">
                        {item.created_at}
                      </div>
                    </div>
                  ))
                }
                {selectData.length <= 0 && <div className="">There was no activity on the date selected.</div>}
              </div>
            </div>
            : <div></div>
          }
        </>
        :
        <div>loading.......</div>
      }

    </>
  )
}