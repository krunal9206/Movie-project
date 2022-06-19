import React from 'react'
import { Row, Container, Col, Image } from 'react-bootstrap'
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'
import { useQuery } from 'react-query'

const MovieDetail = () => {
    let { movieId } = useParams();
    const { isLoading, error, data } = useQuery('movieSingle', () =>
        fetch('http://localhost:5000/movies/' + movieId).then(res =>
            res.json()
        )
    )

    if (isLoading) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message

    return (
        <main className='movie-detail'>
            <Container fluid>
                <Row>
                    <Col className="p-0"><h1 className='movie-title p-3'>{data.title}</h1></Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col xs={5}>
                        <div className='movie-poster'>
                            <Image src={data.m_image} fluid={true} alt={data.title} />
                        </div>
                    </Col>
                    <Col xs={7}>
                        <div className='movie-year'>
                            {new Date(data.release_date).getFullYear()}
                        </div>
                        <div className='movie-time fst-italic'>
                            {data.m_time} mins
                        </div>
                        <div className='movie-rating fw-bold mt-5'>
                            {data.m_rating} / 10
                        </div>
                        <div className='movie-favorite-btn mt-4'>
                            <button type='button'>Add to Favorite</button>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container>
                <div className='movie-description mt-2'>
                    <p>{data.description}</p>
                </div>
            </Container>
            <Container>
                <div className='movie-trailers mt-4'>
                    <div className='trailer-title'>
                        <h2>TRAILERS</h2>
                    </div>
                    <div className='trailers mt-3'>
                        <div className='single-trailer'>
                            <FontAwesomeIcon icon={faCirclePlay} /> <span className='ms-3'>Play trailer 1</span>
                        </div>
                        <div className='single-trailer'>
                            <FontAwesomeIcon icon={faCirclePlay} /> <span className='ms-3'>Play trailer 2</span>
                        </div>
                    </div>
                </div>
            </Container>
        </main>
    )
}

export default MovieDetail