import { Navigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import React, { useContext } from 'react'

export const ProtectedRoute = ({ children }) => {
    const { loggedInUser } = useContext(UserContext)
    if (loggedInUser) {
        return children
    }
    return (
        <div>
            {alert(
                `You need to login to access movies page
                Redirecting to Login page`
            )}
            <Navigate to="/" />
        </div>
    )
}
