"use client"

import { Note } from "@/app/components/Note"
import { Editor } from "../../text-editor"
import useRefreshStore from "@/app/hooks/useRefreshStore";
import { useState } from "react";
import { MdKeyboardBackspace } from "react-icons/md";
import { CreateNaisei } from "@/app/components/PostContent/CreateNaisei";
import { useToggleEditor } from "@/app/hooks/useToggleEditor";

const NotePage = () => {
  const { refresh } = useRefreshStore();
  const { isOpen, onClose, onOpen } = useToggleEditor()
  return (
    <>
      {isOpen ?
        <div className="max-w-2xl mx-auto">
          <div className="flex justify-start ml-4">
            <button
              className="border-none cursor-pointer hover:text-blue-400"
              onClick={() => onClose()}
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

        </div>
        :
        <>
          {/* <div>Note一覧</div> */}
          <div onClick={() => onOpen()}>
            <Note />
          </div>
          <CreateNaisei />
        </>
      }
    </>
  )
}

export default NotePage