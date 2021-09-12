// const authObject = { 'Project-ID': projectID, 'User-Name': username, 'User-Secret': password };
// try {
// await axios.get('https://api.chatengine.io/chats', { headers: authObject });

import React from 'react';
import './Login.css'
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

import { axiosInstance} from '../utils/chatapp-util';

export default function Login(props) {
    const history = useHistory();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const frmLogin_onSubmit = async function (data) {
        try {
            const authObject = {
                'Project-ID': '133436d0-5763-4786-9b58-2648da368e38',
                'User-Name': data.username,
                'User-Secret': data.password
            };

            await axiosInstance.get('chats', { headers: authObject });
            
            localStorage.chatapp_javascriptmastery_islogin = true;
            localStorage.chatapp_javascriptmastery_username = data.username;
            localStorage.chatapp_javascriptmastery_password = data.password;

            history.push("/");

        } catch (err) {
            if (err.response) {
                alert('Sai username hoặc password');
                console.log(err.response.data);
            } else if (err.requerst) {
                alert('Sai username hoặc password');
                console.log(err.requerst);
            } else {
                alert('Sai username hoặc password');
                console.log('Error', err.message);
            }
        }
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit(frmLogin_onSubmit)}>
                <div className="fg">
                    <input type="text" placeholder="username" autoFocus {...register('username', { required: true })} />
                    {errors.username && <span>*</span>}
                </div>
                <br/>
                <div className="fg">
                    <input type="password" placeholder="password" {...register('password', { required: true })} />
                    {errors.password && <span>*</span>}
                </div>
                <br/>
                <div className="fg mt-3">
                    <button type="submit" className="button-login">Login</button>
                </div>
            </form>
        </div>
    )
}