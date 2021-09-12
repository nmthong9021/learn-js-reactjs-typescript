import React, { useReducer, useEffect } from 'react';
import '../App.css';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from '../components/ChatFeed';
import CodeThem from '../components/CodeThem';

import reducer from '../chatapp.reducer.js';
import AppContext from '../chatapp.context';
import { axiosInstance } from '../utils/chatapp-util.js';

export default function Home(props) {
    const initialAppState = {
        message_number: 0
    }
    const [store, dispatch] = useReducer(reducer, initialAppState);

    useEffect(function () {

        async function loadTasks() {
            const authObject = {
                'Project-ID': '133436d0-5763-4786-9b58-2648da368e38',
                'User-Name': "user",
                'User-Secret': "thanhthongle"
            };
            const res = await axiosInstance.get(`chats/56823/messages`,
                { headers: authObject }
            );
            //console.log(res);

            dispatch({
                type: 'init',
                payload: {
                    number: res.data.length
                }
            });
        }
        loadTasks();

    }, []);

    return (
        <div>
            <AppContext.Provider value={{ store, dispatch }}>
                <CodeThem />
                <div>
                    <ChatEngine
                        heigh="100vh"
                        projectID={'133436d0-5763-4786-9b58-2648da368e38'}
                        userName={localStorage.chatapp_javascriptmastery_username}
                        userSecret={localStorage.chatapp_javascriptmastery_password}
                        renderChatFeed={
                            function (chatAppProps) {
                                return <ChatFeed {...chatAppProps} />
                            }
                        }
                        onNewMessage={function () {
                            dispatch({
                                type: 'add_item'
                            });
                            return new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()
                        }}
                    />
                </div>
            </AppContext.Provider>
        </div>
    );
}
