import React, {useContext } from 'react';
import { useHistory} from 'react-router-dom';
import AppContext from '../chatapp.context';

export default function CodeThem(props) {
    const { store } = useContext(AppContext);

    const history = useHistory();

    const handleClick = (e) =>{
        delete localStorage.chatapp_javascriptmastery_islogin;
        delete localStorage.chatapp_javascriptmastery_username;
        delete localStorage.chatapp_javascriptmastery_password;
        
        history.push("/login");
    }
    return (
        <div>
            <button type="button" style={{marginRight: 0}} className="btn-logout" onClick={handleClick}>Log Out</button>
            &nbsp;&nbsp;&nbsp;
            <span>
                Có tất cả {store.message_number} tin nhắn
            </span>
        </div>
    )
}
