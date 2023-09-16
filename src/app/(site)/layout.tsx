import NavBar from "../components/Navbar"
import { Editor } from "./text-editor"

import "./styles.css"
const SiteLayout = async ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <div className="App">
      <NavBar />
      {/* <Editor /> */}
      {children}
    </div>
  )
}

export default SiteLayout