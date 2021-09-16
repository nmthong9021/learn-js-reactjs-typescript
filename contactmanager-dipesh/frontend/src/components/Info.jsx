import React, { useContext, useState } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import AppContext from "../contactAppContext";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import NotFound from "./NotFound";

import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

export default function Info(props) {
  let { store, dispatch } = useContext(AppContext);
  let { id } = useParams();

  // let bien = localStorage.getItem("contactManagerApp_cards");
  // let bien1 = JSON.parse(bien);
  // let bien2 = bien1[id];
  // let valueLike = bien2.like;
  const [valueLike, setSetValueLike] = useState(false);
  const [valueDisLike, setSetValueDisLike] = useState(false);
  // const valueLike = JSON.parse(localStorage.getItem("contactManagerApp_cards"))[2].like;
  //const [isLike, setIsLike] = useState(JSON.parse(localStorage.getItem("contactManagerApp_cards"))[id].like);
  //const [isDislike, setIsDislike] = useState(JSON.parse(localStorage.getItem("contactManagerApp_cards"))[id].dislike);

  const handleClickLike = () => {
    if (valueLike === true) {
      dispatch({
        type: "decrease_like",
        payload: {
          id: parseInt(id, 10),
        },
      });
    } else {
      dispatch({
        type: "increase_like",
        payload: {
          id: parseInt(id, 10),
        },
      });
    }
    setSetValueLike(!valueLike);

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
  };
  const handleClickDislike = () => {
    if (valueDisLike === true) {
      dispatch({
        type: "decrease_dislike",
        payload: {
          id: parseInt(id, 10),
        },
      });
    } else {
      dispatch({
        type: "increase_dislike",
        payload: {
          id: parseInt(id, 10),
        },
      });
    }
    setSetValueDisLike(!valueDisLike);
  };
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty());
  const onEditorStateChange = (e) => {
    setEditorState(e.target.value);
  };

  return (
    <div>
      {!store.cards.filter((c) => c.id + "" === id).length ? (
        <NotFound></NotFound>
      ) : (
        <Container fluid>
          <Link to="/">
            <Button
              variant="secondary"
              type="submit"
              className="pl-4 pr-4 ml-1"
              style={{ float: "left", fontSize: "1rem", fontWeight: "bold" }}
            >
              Back To Home
            </Button>
          </Link>
          <br></br>
          <br></br>
          <Row>
            <Col className="col-12 col-md-4" style={{zIndex: "2"}}>
              {store.cards
                .filter((c) => c.id + "" === id)
                .map((res) => (
                  <div key={res.id}>
                    <Card style={{ width: "18em", margin: "auto" }}>
                      <Card.Img variant="top" src={res.image} />
                      <Card.Body>
                        <Card.Title style={{ textAlign: "left" }}>
                          {res.name}
                        </Card.Title>
                        <Card.Text style={{ textAlign: "left" }}>
                          {res.email}
                        </Card.Text>
                        <Card.Text style={{ textAlign: "right" }}>
                          {res.like}{" "}
                          {valueLike ? (
                            <AiFillLike
                              onClick={handleClickLike}
                              style={{ color: "blue" }}
                            />
                          ) : (
                            <AiFillLike onClick={handleClickLike} />
                          )}
                          {"\u00A0"}
                          {"\u00A0"}
                          {"\u00A0"}
                          {"\u00A0"}
                          {res.dislike}
                          {valueDisLike ? (
                            <AiFillDislike
                              onClick={handleClickDislike}
                              style={{ color: "red" }}
                            />
                          ) : (
                            <AiFillDislike onClick={handleClickDislike} />
                          )}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                ))}
            </Col>
            <Col className="col-12 col-md-8">
              <Container fluid style={{borderStyle: "solid", height: "100%"}}>
                <Editor
                  editorState={editorState}
                  placeholder="Add Description"
                  toolbarClassName="toolbarClassName"
                  wrapperClassName="demo-wrapper"
                  editorClassName="demo-editor"
                  onEditorStateChange={onEditorStateChange}
                />
              </Container>
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
}
