import { HeartOutlined } from '@ant-design/icons'
import { Card, Row, Col, Button } from 'antd'

const { Meta } = Card

const MovieCard = ({ movie, favorites, setFavorites }) => {
    // const movieLink = `http://www.omdbapi.com/?s=${movie.imdbID}&apikey=16328196`
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
                    onClick={() => setFavorites(movie)}
                ></Button>
            </Col>
        </Row>
    )
}

export default MovieCard
