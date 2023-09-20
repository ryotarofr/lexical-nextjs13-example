import { CalendarItem } from "@/app/components/Calendar/CalendarItem";
import { checkSubscription } from "@/app/libs/subscription";

const CalendarPage = async () => {
  const isPro = await checkSubscription();
  return (
    <>
      <CalendarItem isPro={isPro} />
    </>
  )
}

export default CalendarPage