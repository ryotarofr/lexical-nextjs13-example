"use client"

import useGetAllNaisei from "@/app/hooks/useGetNaiseiAll";
import { useEffect } from "react";

export const DataFetch = () => {
  const { fetch }: any = useGetAllNaisei()

  useEffect(() => {
    fetch()
    console.log("/editorでデータをフェッチ");
  }, [fetch])
  return (
    <>
    </>
  )
}