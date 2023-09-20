import { checkSubscription } from "@/app/libs/subscription";
import { NoteItem } from "@/app/components/Note/NoteItem";

const NotePage = async () => {
  const isPro = await checkSubscription();
  return (
    <>
      <NoteItem isPro={isPro} />
    </>
  )
}

export default NotePage