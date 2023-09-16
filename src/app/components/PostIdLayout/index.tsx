"use client"

import { Editor } from "@/app/(site)/text-editor";
import useRefreshStore from "@/app/hooks/useRefreshStore";
import { useRouter } from "next/navigation";
import { MdKeyboardBackspace } from "react-icons/md"

export const PostIdLayout = () => {
  const router = useRouter();
  const { refresh } = useRefreshStore();

  return (
    <>
      <div className="flex justify-start">
        <button
          className="border-none"
          onClick={() => router.back()}
        >
          <MdKeyboardBackspace size={24} />
        </button>
      </div>
      {!refresh ?
        <>
          <Editor />
        </>
        :
        <div></div>
      }
    </>
  )
}