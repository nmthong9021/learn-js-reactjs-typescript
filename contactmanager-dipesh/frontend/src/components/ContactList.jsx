import React, { useContext } from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";
import { Col, Container, Row, Button } from "react-bootstrap";

import AppContext from "../contactAppContext";
import NotFound from "./NotFound";


export default function ContactList({ number }) {
    const { store } = useContext(AppContext);
    const number1 = parseInt(number, 10);
    //const [pageIndex, setPageIndex] = useState(number1);

    return number1 < 1 || number1 > 10 ? (
        <NotFound></NotFound>
    ) : (
        (
            <Container fluid>
                <Row>
                    <Col className="col-12 col-sm-8">
                        <span style={{ fontSize: "1.6rem", fontWeight: "bold" }}>
                            Contact List
                        </span>
                    </Col>
                    <Col className="col-sm-4">
                        <Link to="/add">
                            <Button
                                variant="primary"
                                type="submit"
                                className="pl-4 pr-4"
                                style={{
                                    float: "right",
                                    fontSize: "1.1rem",
                                    fontWeight: "bold",
                                }}
                            >
                                Add Contact
                            </Button>
                        </Link>
                    </Col>
                </Row>
                <hr></hr>
                {store.cards
                    .filter((card) => card.isExist)
                    .slice(4 * number1 - 4, 4 * number1)
                    .map((card) => {
                        return (
                            <div key={card.id}>
                                <ContactCard card={card}></ContactCard>
                                <hr></hr>
                            </div>
                        );
                    })}
                <br></br>
                <Row>
                    <Col className="col-12">
                        <div className="d-flex justify-content-center">
                            <Link to="/"><Button variant="outline-primary" style={{fontSize: "1.1rem", fontWeight:"bold", marginRight: "1px"}}>{"<<"}</Button></Link>
                            <Link to={number1 > 1 ? `/page/${number1 - 1}` : "/"}><Button variant="outline-primary" style={{fontSize: "1.1rem", fontWeight:"bold", marginRight: "1px"}}>{"<"}</Button></Link>
                            {
                                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n =>
                                    <Link to={`/page/${n}`} key={n}>
                                        <Button variant={n === number1 ? "primary" : "outline-primary"} style={{fontSize: "1.1rem", fontWeight:"bold", marginRight:"1px"}}>{n}</Button>
                                    </Link>
                                )
                            }
                            <Link to={number1 < 10 ? `/page/${number1 + 1}` : "/page/10"}><Button variant="outline-primary" style={{fontSize: "1.1rem", fontWeight:"bold", marginRight: "1px"}}>{">"}</Button></Link>
                            <Link to="/page/10"><Button variant="outline-primary" style={{fontSize: "1.1rem", fontWeight:"bold"}}>{">>"}</Button></Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    );
}
