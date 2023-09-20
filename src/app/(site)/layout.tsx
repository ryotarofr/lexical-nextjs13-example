import { DataFetch } from "../components/DataFetch"
import NavBar from "../components/Navbar"
import { getApiLimitCount } from "../libs/api-limit"
import { checkSubscription } from "../libs/subscription"
import "./styles.css"


const SiteLayout = async ({
  children,
}: {
  children: React.ReactNode
}) => {
  const apiLimitCount = await getApiLimitCount();
  const isPro = await checkSubscription();

  return (
    <div className="App">
      <NavBar isPro={isPro} apiLimitCount={apiLimitCount} />
      <DataFetch />
      <div className="">
      </div>
      {children}
    </div>
  )
}

export default SiteLayout