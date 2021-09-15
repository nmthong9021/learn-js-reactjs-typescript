import React, { useContext } from 'react';
import { Card, Button, Container } from 'react-bootstrap';
import AppContext from '../contactAppContext';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { AiFillLike, AiFillDislike } from 'react-icons/ai'
import NotFound from './NotFound';

export default function Info(props) {
    let { store, dispatch } = useContext(AppContext);
    let { id } = useParams();

    let bien = localStorage.getItem("contactManagerApp_cards");
    let bien1 = JSON.parse(bien);
    let bien2 = bien1[id];
    let valueLike = bien2.like;
    // const valueLike = JSON.parse(localStorage.getItem("contactManagerApp_cards"))[2].like;
    //const [isLike, setIsLike] = useState(JSON.parse(localStorage.getItem("contactManagerApp_cards"))[id].like);
    //const [isDislike, setIsDislike] = useState(JSON.parse(localStorage.getItem("contactManagerApp_cards"))[id].dislike);

    const handleClickLike = () => {
        dispatch({
            type: 'like',
            payload: {
                id: parseInt(id, 10)
            }
        });

        // const obj = JSON.parse(localStorage.getItem("contactManagerApp_cards"))
        // obj[id].like = !obj[id].like;
        // const str = JSON.stringify(obj);
        // localStorage.setItem("contactManagerApp_cards", str);

        // var cards = [];
        // for (let i = 0; i <= 30; i++) {
        //     cards[i] = { like: false, dislike: false }
        // }
        // const str = JSON.stringify(cards);
        // localStorage.setItem("contactManagerApp_cards", str);
        // const obj = JSON.parse(str);
        // const obj = JSON.parse(localStorage.getItem("contactManagerApp_cards"))
        // localStorage.removeItem("contactManagerApp_cards");

    }
    const handleClickDislike = () => {
        dispatch({
            type: 'dislike',
            payload: {
                id: parseInt(id, 10)
            }
        });
        // const obj = JSON.parse(localStorage.getItem("contactManagerApp_cards"))
        // obj[id].dislike = !obj[id].dislike;
        // const str = JSON.stringify(obj);
        // localStorage.setItem("contactManagerApp_cards", str);
    }

    return (
        <div>
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
                                <div key={res.id}>
                                    <Card style={{ width: '18em', margin: "auto" }}>
                                        <Card.Img variant="top" src={res.image} />
                                        <Card.Body>
                                            <Card.Title style={{ textAlign: "left" }}>{res.name}</Card.Title>
                                            <Card.Text style={{ textAlign: "left" }}>
                                                {res.email}
                                            </Card.Text>
                                            <Card.Text style={{ textAlign: "right" }}>
                                                {res.like} {
                                                    valueLike ?
                                                        <AiFillLike onClick={handleClickLike} style={{ color: "blue" }} /> :
                                                        <AiFillLike onClick={handleClickLike} />
                                                }
                                                {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}
                                                {res.dislike} <AiFillDislike onClick={handleClickDislike} />
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            ))
                        }
                    </Container>
                )
            }
        </div>
    )
}
