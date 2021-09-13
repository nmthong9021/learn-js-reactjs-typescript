import React, { useContext } from 'react';
import { Card, Button, Container } from 'react-bootstrap';
import AppContext from '../contactAppContext';
import { useParams } from 'react-router-dom';
import { Link, useHistory, Redirect } from 'react-router-dom';
import NotFound from './NotFound';

export default function Info(props) {
    //console.log("info nè...");
    let { store } = useContext(AppContext);
    let { id } = useParams();
    const history = useHistory();

    /*
    const res = store.cards.filter(function (c) {
        const c_id = c.id + "";
        return (c_id === id);
    })

    if (res.length === 0) {
        history.push("/");
    }

    // //console.log(cards[id]);
    // let number = parseInt(id);

    const name = res[0].name;
    const email = res[0].email;
    const image = res[0].image;
    */

    // return (
    //     <Container fluid>
    //         <Link to="/">
    //             <Button variant="secondary" type="submit" className="pl-4 pr-4 ml-1" style={{ float: "left", fontSize: "1rem", fontWeight: "bold" }}>
    //                 Back To Home
    //             </Button>
    //         </Link>
    //         <br></br><br></br>
    //         {
    //             !store.cards.filter(c => c.id + "" === id).length ?
    //                 (<div>Không tồn tại người dùng</div>) :
    //                 (store.cards.filter(c => c.id + "" === id).map(res =>
    //                 (
    //                     <div style={{ margin: 'auto' }} key={res.id}>
    //                         <Card style={{ width: '18rem' }}>
    //                             <Card.Img variant="top" src={res.image} />
    //                             <Card.Body>
    //                                 <Card.Title>{res.name}</Card.Title>
    //                                 <Card.Text>
    //                                     {res.email}
    //                                 </Card.Text>
    //                             </Card.Body>
    //                         </Card>
    //                     </div>
    //                 )
    //                 ))
    //         }
    //     </Container>
    // )

    return (
        <>
            {!store.cards.filter(c => c.id + "" === id).length ?
                (
                    <NotFound></NotFound>
                ) :
                (
                    <Container fluid>
                        <Link to="/">
                            <Button variant="secondary" type="submit" className="pl-4 pr-4 ml-1" style={{ float: "left", fontSize: "1rem", fontWeight: "bold" }}>
                                Back To Home
                            </Button>
                        </Link>
                        <br></br><br></br>
                        {
                            store.cards.filter(c => c.id + "" === id).map(res =>
                            (
                                <div style={{ margin: 'auto' }} key={res.id}>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={res.image} />
                                        <Card.Body>
                                            <Card.Title>{res.name}</Card.Title>
                                            <Card.Text>
                                                {res.email}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            ))
                        }
                    </Container>
                )
            }
        </>
    )
}
