import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import SearchBar from "./components/SearchBar"

import InitialPage from "./pages/InitialPage"

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <SearchBar/>
      <Routes>
        <Route path="/" element={<InitialPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
