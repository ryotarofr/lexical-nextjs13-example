import { getApiLimitCount } from "@/app/libs/api-limit";
import { FreeCounter } from "../free-counter";
import { checkSubscription } from "@/app/libs/subscription";



export const ProButton = ({
  apiLimitCount = 0,
  isPro = false
}: {
  apiLimitCount: number;
  isPro: boolean;
}) => {
  return (
    <>
      <FreeCounter
        apiLimitCount={apiLimitCount}
        isPro={isPro}
      />
    </>
  )
}