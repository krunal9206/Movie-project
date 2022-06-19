import React from 'react'
import { Row, Container, Col } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import { Link } from "react-router-dom";
import { useQuery } from 'react-query'

function Movie() {
    const { isLoading, error, data } = useQuery('movieData', () =>
        fetch('http://localhost:5000/movies').then(res =>
            res.json()
        )
    )

    if (error) return 'An error has occurred: ' + error.message

    return (
        <main className='movie-list'>
            {isLoading ? (<div data-testid="loading-text">Loading...</div>) : (<Container fluid>
                <Row>
                    {data.data.map((movie) => {
                        return (
                            <Col xs={6} className="p-0" key={movie.id}>
                                <Link to={`/movie-detail/${movie.id}`}><Image src={movie.m_image} fluid={true} alt={movie.title} /></Link>
                            </Col>
                        )
                    })}
                </Row>
            </Container>)}
        </main>
    )
}

export default Movie