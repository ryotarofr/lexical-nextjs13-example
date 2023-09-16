import StackedBarChart from "@/app/components/Chart/Barchart"
import { PercentAreaChart } from "@/app/components/Chart/PercentAreaChart"
import SimpleRadarChart from "@/app/components/Chart/SimpleRadarChart"

const ChartPage = () => {
  return (
    <>
      <div className="text-black">chart page</div>
      <div className="p-3 mx-auto text-center mt-10 bg-amber-100/30 max-w-xs border border-white">
        <div className="text-white text-2xl font-bold italic">~Status~</div>
        <div className="text-white text-xl">Total of <span className="text-emerald-200 font-bold text-2xl">10</span> days.</div>
      </div>

      <PercentAreaChart />
      <StackedBarChart />
      <SimpleRadarChart />
    </>
  )
}

export default ChartPage