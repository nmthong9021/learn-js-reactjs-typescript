import React, { useContext } from 'react';
import { Col, Container, Row, Image, Button } from 'react-bootstrap';

import AppContext from '../contactAppContext';
import Info from './Info';

export default function ContactCard(props) {
    const { dispatch } = useContext(AppContext);
    const { card } = props;

    const handleOnClick = (e) => {
        dispatch({
            type: 'delete_card',
            payload: {
                id: card.id
            }
        });
    }

    return (
        <Container fluid>
            <Row>
                <Col sm={11} className="col-12 pl-2">
                    {/* <Info card={card}>
                    </Info> */}
                    <div>
                        <Row>
                            <div className="d-flex flex-column justify-content-center">
                                <Image
                                    src={`${card.image}`}
                                    alt={`${card.name}`}
                                    roundedCircle={true}
                                    height="40em"
                                    width="40em"
                                />
                            </div>
                            <div className="ml-1">
                                <div style={{ fontWeight: "bold", fontSize: "1.1rem" }}>{card.name}</div>
                                <div style={{ fontSize: "1rem" }}>{card.email}</div>
                            </div>
                        </Row>
                    </div>
                </Col>
                <Col sm={1}>
                    <Button variant="link" onClick={handleOnClick}>
                        <i className="fa fa-trash outline" aria-hidden="true" style={{ fontSize: "1.5rem", color: "red" }}></i>
                    </Button>
                </Col>
            </Row>
        </Container>
    )
}
