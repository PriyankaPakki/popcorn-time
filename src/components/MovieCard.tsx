import { HeartFilled } from '@ant-design/icons'
import { Card, Row, Col, Button } from 'antd'
import { useNavigate } from 'react-router-dom'
const { Meta } = Card
import * as React from 'react';
import { TMovieType } from '../types/TMovieType';
import { TfavoritesType } from '../pages/Movies';


type MovieCardProps = {
    year?: string
    movie: TMovieType,
    setFavorite: (type: TMovieType) => void

}

const MovieCard = ({ movie, setFavorite }: MovieCardProps) : React.ReactElement => {
    const navigate = useNavigate()
    return (
        <div>
            <Card
                hoverable
                style={{
                    width: 300,
                    height: 400,
                    margin: 20,
                    borderRadius: 20,
                    padding: '20px 10px',
                }}
                cover={
                    <img
                        src={movie.Poster}
                        alt="movie"
                        style={{
                            height: 250,
                            objectFit: 'contain',
                        }}
                    ></img>
                }
                onClick={() => {
                    navigate(`/movies/${movie.imdbID}`)
                }}
            >
                <Meta
                    className="card-description"
                    title={
                        <div style={{ overflow: 'hidden' }}>{movie.Title}</div>
                    }
                    description={
                        <MovieCardDescription
                            movie={movie}
                            year={movie.Year}
                            setFavorite={setFavorite}
                        />
                    }
                />
            </Card>
        </div>
    )
}

function MovieCardDescription({ year, setFavorite, movie }: MovieCardProps) {
    return (
        <div>
        <Row>
            <Col span={18}>{year}</Col>
            <Col span={6}>
                <Button
                    shape="circle"
                    ghost={true}
                    icon={
                        <HeartFilled
                            style={{ color: 'red', fontSize: '20px' }}
                        />
                    }
                    onClick={(e) => {
                        e.stopPropagation()
                        setFavorite(movie)
                    }}
                ></Button>
            </Col>
        </Row>
        </div>
    )
}

export default MovieCard
