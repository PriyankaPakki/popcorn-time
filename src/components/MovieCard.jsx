import { Card } from 'antd'
const { Meta } = Card

const MovieCard = ({ movie }) => {
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
                <Meta title={movie.Title} description={movie.Year} />
            </Card>
        </div>
    )
}

export default MovieCard
