import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../styles/navbar.css'

const Navbar = ({size, setShow}) => {
  return (
    <>
<Container>
    <Row>
        <Col xs={12}>
        <nav>
            <div className="nav_box">
                <span className="my_shop" onClick={()=>setShow(true)}>My Shopping</span>
                <div className="cart" onClick={()=>setShow(false)}>
                    <span>
                    <i className="fas fa-cart-plus"></i>
                    </span>
                <span>{size}</span>

                </div>
            </div>
        </nav>
        </Col>
    </Row>
</Container>
    </>
  )
}

export default Navbar