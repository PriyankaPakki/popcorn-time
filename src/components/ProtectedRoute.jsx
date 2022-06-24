import { Navigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import React, { useContext, useEffect } from 'react'

export const ProtectedRoute = ({ children }) => {
    const { loggedInUser } = useContext(UserContext)

    useEffect(() => {
        if (!loggedInUser) {
            alert(
                `You need to login to access movies page
            Redirecting to Login page`
            )
        }
    }, [])

    if (loggedInUser) {
        return children
    }

    return (
        <div>
            <Navigate to="/" />
        </div>
    )
}
