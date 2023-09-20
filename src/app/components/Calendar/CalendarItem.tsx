"use client"

import { Editor } from "@/app/(site)/text-editor";
import useRefreshStore from "@/app/hooks/useRefreshStore";
import { useToggleEditor } from "@/app/hooks/useToggleEditor";
import { MdKeyboardBackspace } from "react-icons/md";
import { Calendar } from "./Calendar";
import { Activity } from "./Activity";

export const CalendarItem = ({
  isPro = false
}: {
  isPro: boolean;
}) => {
  const { refresh } = useRefreshStore();
  const { isOpen, onClose, onOpen } = useToggleEditor()
  return (
    <>
      {isOpen ?
        <div className="max-w-3xl mx-auto">
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
              <Editor isPro={isPro} />
            </>
            :
            <div></div>
          }
        </div>
        :
        <>
          <Calendar />
          <div onClick={() => onOpen()}>
            <Activity />
          </div>
        </>
      }
    </>
  )
}