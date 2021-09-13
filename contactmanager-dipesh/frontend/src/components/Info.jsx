import React from 'react';
import { Image } from 'react-bootstrap';

export default function Info(props) {
    const { card } = props;
    return (
        <div>
            Info
            {/* <div>
                <Image
                    src={`${card.image}`}
                    alt={`${card.name}`}
                    roundedCircle={true}
                    height="40"
                    width="40"
                />
                <div style={{ fontWeight: "bold", fontSize: "1.1rem" }}>{card.name}</div>
                <div style={{ fontSize: "1rem" }}>{card.email}</div>
            </div> */}
        </div>
    )
}
