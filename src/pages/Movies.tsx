import React, { useState, useEffect } from 'react'
import MoviesList from '../components/MoviesList'
import { useSearchParams } from 'react-router-dom'
import { TMovieType } from '../types/TMovieType'
import Navbar from 'components/Navbar'
import { RadioChangeEvent } from 'antd'


export type TfavoritesType = {
    [key: string] : TMovieType
}

export default function Movies() {
    const [queryParams, setQueryParams] = useSearchParams()

    const [searchValue, setSearchValue] = useState(
        queryParams.get('searchValue') || 'toy'
    )
    const [year, setYear] = useState(queryParams.get('year') || '')
    const [type, setType] = useState(queryParams.get('type') || 'all')
    const [favorites, setFavorites] = useState<TfavoritesType>({})

    useEffect(() => {
        setQueryParams({ searchValue: searchValue, year: year, type: type })
    }, [searchValue, year, type])


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

    let newFavs : TfavoritesType

    const addToFavorites = (movie: TMovieType) => {
        const movieId = movie.imdbID
        if (movieId in favorites) {
            newFavs = { ...favorites }
            delete newFavs[movieId]
            setFavorites(newFavs)
        } else {
            setFavorites((favorites) => ({
                ...favorites,
                [movie.imdbID]: movie,
            }))
        }
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
