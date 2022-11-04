import { useEffect, useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import Header from "./components/Header"
import UserContext from "./context/UserContext"
import InitialPage from "./pages/InitialPage"
import Login from "./pages/Login"
import RegisterForm from "./pages/RegisterForm"
import { getToken } from "./utils/checkAuthentication"

function App() {
  const [selectedVehicle, setSelectedVehicle] = useState<number>(0)
  const [logged, setLogged] = useState<boolean>(false)
  const userContextValues = {
    selectedVehicle,
    setSelectedVehicle,
    logged
  }

  useEffect(() => {
    if(getToken()){
      setLogged(true)
    }
  }, [])

  return (
    <UserContext.Provider value={userContextValues}>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<InitialPage/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register-car" element={<RegisterForm/>}/>
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  )
}

export default App
