import axios, { AxiosResponse } from "axios"

const baseurl = "http://localhost:9010"

const getMovies = async (): Promise<AxiosResponse<any, any>> => {
    const response = await axios.get(`${baseurl}/movie`)
    console.log(response);
    return response
}

const getMovieDetails = async (movieID: number): Promise<AxiosResponse<any, any>> => {
    const response = await axios.get(`${baseurl}/movie/${movieID}`)
    console.log(response);
    return response
}

const createMovie = async (): Promise<AxiosResponse<any, any>> => {
    const response = await axios.post(`${baseurl}/movie/`, {
        "title": "movie",
        "rating": 4.5,
        "plot": "th movie description",
        "type": "movie",
        "genre": "horror",
        "poster": "somethng",
        "released": "2021"
    })
    console.log(response);
    return response
}

const updateMovie = async (movieID: number): Promise<AxiosResponse<any, any>> => {
    const response = await axios.put(`${baseurl}/movie/${movieID}`, {
        "title": "updated movie",
        "rating": 9.5,
        "plot": "updated plot",
        "type": "movie",
        "genre": "horror",
        "poster": "somethng",
        "released": "2021"
    })
    console.log(response);
    return response
}

const deleteMovie = async (movieID: number): Promise<AxiosResponse<any, any>> => {
    const response = await axios.delete(`${baseurl}/movie/${movieID}`)
    return response
}

const signupUser = async () => {
    await axios.post(`${baseurl}/signup`,{
        "password": "password",
        "email": "priyanka@xyz.com",
        "username": "priyanka"
    })
}

const loginUser = async (email: string, password : string) => {
    const response = await axios.post(`${baseurl}/login`, {
        "email": `${email}`,
        "password": `${password}`
    })
    console.log(response.data)
    return response.data
}

const toggleFavorite = async (userId: string, movieId: string,token: string) => {
    const response = await axios.post(`auth/user/${userId}/movie/${movieId}`, {
        headers : {
            "x-access-token": token
        }
    })
    console.log(response)
    return response.data

}

const showFavorites = async(userId: string, token: string) => {
    const response   = await axios.get(`auth/user/${userId}/favorites`, {
        headers : {
            "x-access-token": token
        }
    })
    console.log(response)
    return response
}



export { getMovies, getMovieDetails, createMovie, updateMovie, deleteMovie, signupUser, loginUser, toggleFavorite, showFavorites }
