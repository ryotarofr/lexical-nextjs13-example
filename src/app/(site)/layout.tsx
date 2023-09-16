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
      {children}
    </div>
  )
}

export default SiteLayout