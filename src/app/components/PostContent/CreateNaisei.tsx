import { MdPlaylistAdd } from "react-icons/md";
import { useEffect } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import useGetAllNaisei from "@/app/hooks/useGetNaiseiAll";


export const CreateNaisei = () => {
  const { fetch }: any = useGetAllNaisei()
  const defaultValue = '{"root":{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"example.","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}}'

  const onCreate = async (e: React.FormEvent) => {
    // e.preventDefault();
    const apiUrl = "/api/naisei";
    const createData = {
      // リクエストボディに送信するデータ
      naisei: defaultValue,
      evaluation_type: "A",
    };
    await axios.post(apiUrl, createData)
      .then(response => {
        // toast.success('Created Naisei!!')
        fetch()
        console.log("/editorでデータをフェッチ");
        return response
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }
  return (

    <>
      <div className="max-w-2xl mx-auto text-end focus:outline-none">
        <button onClick={onCreate} className="border-none mr-8 cursor-pointer rounded-full hover:text-blue-600">
          <MdPlaylistAdd size={48} color="" />
          {/* <div className="text-xl ml-2 font-mono">add naisei</div> */}
        </button>
      </div>
    </>
  )
}
