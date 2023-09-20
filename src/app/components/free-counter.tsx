"use client"

import { useEffect, useState } from "react";
import { useProModal } from "../hooks/use-pro-modal";


export const FreeCounter = ({
  isPro = false,
  apiLimitCount = 0,
}: {
  isPro: boolean,
  apiLimitCount: number
}) => {
  const [mounted, setMounted] = useState(false);
  const proModal = useProModal();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }


  if (isPro) {
    return null;
  }

  return (
    <div className="px-3">
      {/* <Card className="bg-white/10 border-0"> */}
      {/* <CardContent className="py-6"> */}
      <div className="text-center text-sm text-white mb-4 space-y-2">
        <div>
          {/* {apiLimitCount} / {MAX_FREE_COUNTS} Free Generations */}
        </div>
        {/* <Progress className="h-3" value={(apiLimitCount / MAX_FREE_COUNTS) * 100} /> */}
      </div>
      <button onClick={proModal.onOpen} className='mx-4 mb-2 mt-2 text-md cursor-pointer rounded-lg border-none px-4 py-2 bg-lime-600 hover:bg-lime-700 text-white'>
        Upgrade
        {/* generate */}

        {/* <Zap className="w-4 h-4 ml-2 fill-white" /> */}
      </button>
      {/* </CardContent> */}
      {/* </Card> */}
    </div>
  )
}