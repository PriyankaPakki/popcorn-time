import { HeartOutlined } from '@ant-design/icons'
import { Card, Row, Col, Button } from 'antd'
import { Link, Navigate, useNavigate } from 'react-router-dom'
const { Meta } = Card

const MovieCard = ({ movie, favorites, setFavorites, link }) => {
    // const movieLink = `http://www.omdbapi.com/?s=${movie.imdbID}&apikey=16328196`
    let navigate = useNavigate()
    return (
        <div>
            <Card
                hoverable
                style={{
                    width: 240,
                    miHight: 300,
                    margin: 20,
                }}
                cover={
                    <img
                        src={movie.Poster}
                        alt="movie"
                        style={{ height: 200 }}
                    ></img>
                }
                onClick={() => {
                    navigate(`/movies/${movie.imdbID}`)
                }}
            >
                <Meta
                    className="card-description"
                    title={movie.Title}
                    description={
                        <MovieCardDescription
                            movie={movie}
                            year={movie.Year}
                            favorites={favorites}
                            setFavorites={setFavorites}
                            link={link}
                        />
                    }
                />
            </Card>
        </div>
    )
}

function MovieCardDescription({ year, setFavorites, favorites, movie }) {
    return (
        <Row>
            <Col span={18}>{year}</Col>
            <Col span={6}>
                <Button
                    shape="circle"
                    ghost={true}
                    icon={
                        <HeartOutlined
                            style={{ color: 'red', fontSize: '20px' }}
                        />
                    }
                    onClick={(e) => {
                        e.stopPropagation()
                        setFavorites(movie)
                    }}
                ></Button>
            </Col>
        </Row>
    )
}

export default MovieCard
