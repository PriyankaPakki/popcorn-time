import { HeartFilled } from '@ant-design/icons'
import { Card, Row, Col, Button } from 'antd'
import { useNavigate } from 'react-router-dom'
const { Meta } = Card
import * as React from 'react';
import { TMovieType } from '../types/TMovieType';


type MovieCardProps = {
    released?: string
    movie: TMovieType,
    setFavorite: (movie: TMovieType) => void

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
                    color: "black",
                }}
                cover={
                    <img
                        src={movie.poster}
                        alt="movie image"
                        style={{
                            height: 250,
                            objectFit: 'contain',
                        }}
                    ></img>
                }
                onClick={() => {
                    navigate(`/movie/${movie.ID}`)
                }}
            >
                <Meta
                    className="card-description"
                    title={
                        <div style={{ overflow: 'hidden'
                    }}>{movie.title}</div>
                    }
                    description={
                        <MovieCardDescription
                            movie={movie}
                            released={movie.released}
                            setFavorite={() => setFavorite(movie)}
                        />
                    }
                />
            </Card>
        </div>
    )
}

function MovieCardDescription({ released, setFavorite, movie }: MovieCardProps) {
    return (
        <div style={{color: "black"}}>
        <Row>
            <Col span={18}>{released}</Col>
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
