import { Routes, Route } from "react-router-dom"
import Header from "./header.jsx"
import Content from "./content.jsx"
import Contact from "./contact.jsx"

function App(){
  return(
  <>
    <Header/>
    <div className="flex">
      <Routes>
        <Route path="/" element={<Content/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </div>
  </>
  )
}
export default App