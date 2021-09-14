import React, { useContext, useState} from 'react';
import { Col, Container, Row, Image, Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import AppContext from '../contactAppContext';
//import Info from './Info';

export default function ContactCard(props) {
    const { dispatch } = useContext(AppContext);
    const { card } = props;

    // Modal 
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    const handleDelete = () => {
        dispatch({
            type: 'delete_card',
            payload: {
                id: card.id
            }
        });
        setShow(false);
    }

    const handleOnClick = () => {
        setShow(true);
    }

    return (
        <Container fluid>
            <Row>
                <Col sm={11} className="col-11 pl-2">
                    {/* <Info card={card}>
                    </Info> */}
                    <div>
                        <Row>
                            <Link to={`/info/${card.id}`}>
                                <div className="d-flex flex-column justify-content-center">
                                    <Button variant="link">
                                        <Image
                                            src={`${card.image}`}
                                            alt={`${card.name}`}
                                            roundedCircle={true}
                                            height="40em"
                                            width="40em"
                                        />
                                    </Button>
                                </div>
                            </Link>
                            <div className="ml-1">
                                <div style={{ fontWeight: "bold", fontSize: "1.1rem" }}>{card.name}</div>
                                <div style={{ fontSize: "1rem" }}>{card.email}</div>
                            </div>
                        </Row>
                    </div>
                </Col>
                <Col sm={1} style={{ float: "right", textAlign: "right" }}>
                    <Button variant="link" onClick={handleOnClick} style={{ textAlign: "right" }} className="pr-0">
                        <i className="fa fa-trash outline" aria-hidden="true" style={{ fontSize: "1.5rem", color: "red" }}></i>
                    </Button>
                </Col>
                <Modal show={show} onHide={handleClose} animation={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>Cảnh báo !</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Bạn muốn xóa {card.name} thật sao ?</Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={handleDelete}>
                            Vẫn xóa
                        </Button>
                        <Button variant="secondary" onClick={handleClose}>
                            Không
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Row>
        </Container>
    )
}
