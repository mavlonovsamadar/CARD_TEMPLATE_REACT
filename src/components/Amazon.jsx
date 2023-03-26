import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import list from '../data'
import Cards from './Cards'
const Amazon = ({ handleClick }) => {
    return (
        <>
            <Container>
                <Row className='justify-content-center'>
                    {list?.map((item) => {
                        return (
                            <>
                                <Col xs={3}>
                                    <Cards item={item} key={item.id} handleClick={handleClick} />
                                </Col>
                            </>
                        )
                    })}
                </Row>
            </Container>
        </>
    )
}

export default Amazon