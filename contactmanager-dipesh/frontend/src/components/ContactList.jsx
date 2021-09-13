import React, { useContext } from 'react'
import ContactCard from './ContactCard';
import { Col, Container, Row } from 'react-bootstrap';

import AppContext from '../contactAppContext';

export default function ContactList(props) {
    const { store } = useContext(AppContext);

    return (
        <Container fluid>
            {
                store.cards
                .filter((card) => card.isExist)
                .map((card) =>
                {
                {/* console.log(card.id); */}
                return (<div key={card.id}>
                    <ContactCard card={card}></ContactCard>
                    <hr></hr>
                </div>)
            }
                )
            }
        </Container>
    )
}
