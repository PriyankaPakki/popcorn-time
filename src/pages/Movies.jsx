import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'

export default function Movies() {
    const { loggedInUser } = useContext(UserContext)
    console.log(loggedInUser, 'from movies')
    return <div>Movies</div>
}
