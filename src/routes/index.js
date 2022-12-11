import {Fragment} from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from '../pages/Home'
import Signin from '../pages/Signin'
import Signup from '../pages/Signup'
import useAuth from '../hooks/useAuth'
import Navbar from '../components/navbar'
import Movie from '../pages/Movie'
import Search from '../pages/Search'


const Private = ({ Item }) => {
    const { signed } = useAuth()
  
    return signed > 0 ? <Item /> : <Signin />
  }

const RoutesApp = () => {
  return (
    <BrowserRouter>
       
        <Fragment>
            <Navbar/>
            <Routes>
            <Route path="/" element={<Signin />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/home" element={<Private Item={Home} />} />
            <Route exact path="/Movie/:id" element={<Private Item={Movie} />} />
            <Route exact path="/search" element={<Search/>} />
            <Route path="*" element={<Signin />} />
            </Routes>
        </Fragment>
    </BrowserRouter>
  )
}

export default RoutesApp