import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import MoviesList from '../components/MoviesList'

export default function Movies() {
    // const [queryParams, setQueryParams] = useState({
    //     searchValue: 'god',
    //     year: null,
    //     type: null,
    //     plot: "full"

    // })
    const [searchValue, setSearchValue] = useState('god')
    // const [year, setYear] = useState(2000)

    const handleInputChange = (event) => {
        setSearchValue(event.target.value || 'god')
    }

    // const handleYear

    return (
        <div>
            <Navbar
                searchValue={searchValue}
                setSearchValue={handleInputChange}
            ></Navbar>
            <MoviesList searchValue={searchValue} />
        </div>
    )
}
