import React, { useContext } from 'react';
import { SendOutlined, PictureOutlined } from '@ant-design/icons';
import { sendMessage, isTyping } from 'react-chat-engine';
import { useForm } from 'react-hook-form';
import AppContext from '../chatapp.context';


export default function Messageform(props) {
    const { dispatch } = useContext(AppContext);
    const { register, handleSubmit, formState: { errors }, setValue } = useForm();
    const { chatId, creds } = props;

    const frm_onSubmit = function (data) {
        const text = data.txt_message;
        if (text.length > 0) {
            sendMessage(creds, chatId, { text });
            setValue('txt_message', '');
            // dispatch({
            //     type: 'add_item'
            // });
        }
    }

    // const handleChange = (event) => {
    //     // isTyping(props, chatId);
    // };

    return (
        <form className="message-form" onSubmit={handleSubmit(frm_onSubmit)}>
            <input
                className="message-input"
                placeholder="Send a message..."
                defaultValue=""
                {...register('txt_message')}
            />
            <label htmlFor="upload-button">
                <span className="image-button">
                    <PictureOutlined className="picture-icon" />
                </span>
            </label>
            <input
                type="file"
                multiple={true}
                id="upload-button"
                style={{ display: 'none' }}
                {...register('txt_upload')}
                onChange={
                    function (e) {
                        sendMessage(creds, chatId, { files: e.target.files, text: '' });
                        // dispatch({
                        //     type: 'add_item'
                        // });
                    }}
            />
            <button type="submit" className="send-button">
                <SendOutlined className="send-icon" />
            </button>
        </form>
    )
}
