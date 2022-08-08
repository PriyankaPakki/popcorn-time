import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import React, { useContext, useEffect } from 'react'



export const ProtectedRoute = ({children}: {children : React.ReactNode}) => {

    const { loggedInUser } = useContext(UserContext)
    const navigate = useNavigate()
    const location = useLocation()
    useEffect(() => {
        if (!loggedInUser) {
            navigate('/login')
        }
    }, [])

    if (loggedInUser) {
        return children
    }

    return (
        <div>
            <Navigate to="/" state={{ path: location.pathname }} />
        </div>
    )
}
