"use client"

import { Calendar } from "@/app/components/Calendar/Calendar"
import useRefreshStore from "@/app/hooks/useRefreshStore";
import { useToggleEditor } from "@/app/hooks/useToggleEditor"
import { MdKeyboardBackspace } from "react-icons/md"
import { Editor } from "../../text-editor";
import { Activity } from "@/app/components/Calendar/Activity";

const CalendarPage = () => {
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
          <Calendar />
          <div onClick={() => onOpen()}>
            {/* <Calendar /> */}
            <Activity />
          </div>
        </>
      }
      {/* 
      <div>calendar page</div>
      <Calendar /> */}
    </>
  )
}

export default CalendarPage