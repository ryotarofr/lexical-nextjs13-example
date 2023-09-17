import { DataFetch } from "../components/DataFetch"
import NavBar from "../components/Navbar"
import "./styles.css"

const SiteLayout = async ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <div className="App">
      <NavBar />
      <DataFetch />
      {children}
    </div>
  )
}

export default SiteLayout