import { Navigate, useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import React, { useContext, useEffect } from 'react'

export const ProtectedRoute = ({ children }) => {
    const { loggedInUser } = useContext(UserContext)
    const navigate = useNavigate()
    useEffect(() => {
        if (!loggedInUser) {
            navigate('/')
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
