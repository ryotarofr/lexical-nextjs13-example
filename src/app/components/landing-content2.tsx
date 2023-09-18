export const LandingContent2 = () => {
  return (
    <div className="font-bold rounded-t-full bg-gradient-to-b from-purple-100 to-indigo-600 pb-10 :mt-20 mt-32">
      <div className="text-center lg:text-2xl md:text-xl sm:text-lg underline">Try the shortcut commands.</div>
      <div className="sm:hidden text-center">
        <video src="/i.mov" controls autoPlay width={280} height={200} />
        <div className="text-indigo-50 text-md">&quot;<span className="text-lg font-extrabold"> / </span>&quot; You can call up the Toolbar.</div>
        <div className="text-indigo-50 text-md">&quot;<span className="text-lg font-extrabold"> : </span>&quot; Emoji are also available.</div>

        <video src="/u.mov" controls autoPlay width={280} height={200} />
        <div className="text-indigo-50 text-md">Many other plug-ins are available</div>
      </div>
      <div className="hidden sm:block text-center">
        <video src="/i.mov" controls autoPlay width={400} height={200} />
        <div className="text-indigo-50 text-md">&quot;<span className="text-lg font-extrabold"> / </span>&quot; You can call up the Toolbar.</div>
        <div className="text-indigo-50 text-md">&quot;<span className="text-lg font-extrabold"> : </span>&quot; Emoji are also available.</div>

        <video src="/u.mov" controls autoPlay width={400} height={200} />
        <div className="text-indigo-50 text-md">Many other plug-ins are available</div>
      </div>
    </div>
  )
}
