import { HeartFilled } from '@ant-design/icons'
import { Card, Row, Col, Button } from 'antd'
import { useNavigate } from 'react-router-dom'
const { Meta } = Card

const MovieCard = ({ movie, favorites, setFavorites, link }) => {
    let navigate = useNavigate()
    return (
        <div>
            <Card
                hoverable
                style={{
                    width: 300,
                    height: 350,
                    margin: 20,
                    borderRadius: 20,
                    padding: 20,
                }}
                cover={
                    <img
                        src={movie.Poster}
                        alt="movie"
                        style={{ height: 200 }}
                    ></img>
                }
                onClick={() => {
                    navigate(`/home/${movie.imdbID}`)
                }}
            >
                <Meta
                    className="card-description"
                    title={
                        <div style={{ overflow: 'hidden' }}>{movie.Title}</div>
                    }
                    description={
                        <MovieCardDescription
                            style={{ width: 300 }}
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
                        <HeartFilled
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
