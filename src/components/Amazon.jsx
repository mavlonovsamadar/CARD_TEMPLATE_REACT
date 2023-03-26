import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import list from '../data'
import Cards from './Cards'
const Amazon = ({ handleClick }) => {
    return (
        <>
            <Container>
                <Row className='justify-content-center mt-4 '>
                    {list?.map((item) => {
                        return (
                            <>
                                <Col xs={12} lg={3}>
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