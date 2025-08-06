import React,{useState} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbardata from './components/Navbardata'
import Home from './pages/Home'
import Addjob from './pages/Addjob'
import Register from './pages/Register'
import Login from './pages/Login'
import Privateroute from './utils/Privateroute'
const App = () => {
  const [search,setSearch] = useState('');
  return <>
    <BrowserRouter>
      <Navbardata search={search} setSearch={setSearch} />
      <Routes>
       <Route path='/' element={<Register/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route element={<Privateroute/>}>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/add' element={<Addjob />}></Route>
        |</Route>
      </Routes>
    </BrowserRouter>

  </>
}

export default App