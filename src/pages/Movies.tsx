import React, { useState, useEffect, useContext } from 'react'
import MoviesList from '../components/MoviesList'
import { useSearchParams } from 'react-router-dom'
import { TMovieType } from '../types/TMovieType'
import Navbar from 'components/Navbar'
import { RadioChangeEvent } from 'antd'
import { UserContext } from 'context/UserContext'
import { toggleFavorite } from 'api/api'


export type TfavoritesType = {
    UserID: string,
    Movie: TMovieType,
    MovieID: string
}

export default function Movies() {
    const [queryParams, setQueryParams] = useSearchParams()
    const { authToken, loggedInUserId } = useContext(UserContext)

    const [searchValue, setSearchValue] = useState(
        queryParams.get('searchValue') || 'toy'
    )
    const [year, setYear] = useState(queryParams.get('year') || '')
    const [type, setType] = useState(queryParams.get('type') || 'all')
    const [favorites, setFavorites] = useState<TfavoritesType[]>([])

    useEffect(() => {
        setQueryParams({ searchValue: searchValue, year: year, type: type })
    }, [searchValue, year, type, favorites])

    const handleTypeChange = (e :RadioChangeEvent) => {
        console.log(e.target.value);
        setType(e.target.value)
    }

    const handleYearChange = (value: null, dateString: string) => {
        setYear(dateString)
    }

    // passing this function down to searchbox and setting the value to the state inside searchbox
    const handleClick = (searchText : string | null | undefined) => {
        searchText && setSearchValue(searchText.trimEnd() || searchValue.trimEnd())
    }

    // let newFavs : TfavoritesType

    const addToFavorites = async (movie: TMovieType) => {
        const movieId = movie.ID
        const userId = loggedInUserId
        const token = authToken
        const result:TfavoritesType[] = await toggleFavorite(userId, movieId, token)
        setFavorites(result)
    }

    return (
        <>
            <Navbar
                searchValue={searchValue}
                handleSearchClick={handleClick}
                handleYearChange={handleYearChange}
                type={type}
                setType={handleTypeChange}
            ></Navbar>
            <MoviesList
                searchValue={searchValue}
                year={year}
                type={type}
                favorites={favorites}
                setFavorite={addToFavorites}
            />
        </>
    )
}
