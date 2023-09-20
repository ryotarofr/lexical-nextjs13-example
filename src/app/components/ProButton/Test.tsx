// src/components/AsyncData.tsx
import NotePage from "@/app/(site)/(routes)/note/page";
import { checkSubscription } from "@/app/libs/subscription";



// 非同期データが必要なコンポーネント
const AsyncData = async () => {
  // useSSRフックで非同期定数を取得する

  const isPro = await checkSubscription();

  // dataプロパティをpropsとしてpage.tsxに渡す
  return (
    <>
      <div className="">{isPro ? <>isisPro</> : <>not</>}</div>
      {/* <NotePage isPro={isPro} /> */}
    </>
  );
};

export default AsyncData;
