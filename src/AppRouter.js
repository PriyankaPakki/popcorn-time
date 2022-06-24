import 'antd/dist/antd.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Movies from './pages/Movies'
import { ProtectedRoute } from './components/ProtectedRoute'
import React from 'react'



const AppRouter = () => {
    
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login></Login>}></Route>
                <Route path='/movies' element={
                    <ProtectedRoute>
                        <Movies/>
                    </ProtectedRoute>
                } />
            </Routes>
        </Router>
    )
}

export default AppRouter
