import Image from "next/image";

export const LandingContent = () => {
  return (
    <div className="">
      <div className="font-bold text-center my-4 lg:text-2xl md:text-xl sm:text-lg underline">Lexical editor provides comfortable notes.</div>
      <div className="flex justify-center">
        <Image src="/a.png" alt="" className="sm:hidden" width={280} height={280} />
        <Image src="/a.png" alt="" className="hidden sm:block lg:hidden" width={400} height={400} />
        <Image src="/a.png" alt="" className="hidden lg:block" width={600} height={400} />
      </div>
    </div >
  )
}
