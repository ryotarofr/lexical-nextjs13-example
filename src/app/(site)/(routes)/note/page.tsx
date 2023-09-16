"use client"

import { Note } from "@/app/components/Note"
import { Editor } from "../../text-editor"
import useRefreshStore from "@/app/hooks/useRefreshStore";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { MdKeyboardBackspace } from "react-icons/md";

const NotePage = () => {
  const [open, setOpen] = useState(false)
  const router = useRouter();
  const { refresh } = useRefreshStore();

  const handleBack = () => {
    // router.back()
    setOpen(false)
  }
  return (
    <>
      {open ?
        <>
          <div className="flex justify-start ml-4">
            <button
              className="border-none"
              onClick={handleBack}
            >
              <MdKeyboardBackspace size={24} />
            </button>
          </div >
          {!refresh ?
            <>
              <Editor />
            </>
            :
            <div></div>
          }

        </>
        :
        <>
          {/* <div>Note一覧</div> */}
          <div onClick={() => setOpen(true)}>
            <Note />
          </div>
        </>
      }


    </>
  )
}

export default NotePage