import React from 'react'

export default function MyMessage({ message }) {
    //const message_text = message.text.slice(3, message.text.length - 4);

    if (message?.attachments?.length > 0) {
        return (
            <img
                src={message.attachments[0].file}
                alt="message-attachment"
                className="message-image"
                style={{ float: 'right' }}
            />
        )
    }


    return (
        <div className="message" style={{ float: 'right', marginRight: '18px', color: 'white', backgroundColor: '#3B2A50' }}>
            {/* (message.text.includes("<p>") && message.text.includes("</p>")) 
                ? message.text.slice(3, message.text.length - 4)
                : message.text */}
            {
                message.text
            }
        </div>
    )
}
