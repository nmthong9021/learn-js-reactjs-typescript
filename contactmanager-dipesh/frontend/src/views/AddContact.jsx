// import React, { useReducer, useEffect } from 'react';
// import Header from '../components/Header';
// import AddContact from '../components/AddContact';
// import ContactList from '../components/ContactList';
// import NotFound from '../components/NotFound';
// import { Container, Row } from 'react-bootstrap';
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Redirect
// } from 'react-router-dom';

// import reducer from "../contactAppReducer";
// import { axiosInstance } from "../utils/contactAppUtil";
// import AppContext from "../contactAppContext.js";
// import Info from '../components/Info';

// export default function Home(props) {
//     const initialAppState = {
//         cards: [],
//     }
//     const [store, dispatch] = useReducer(reducer, initialAppState);

//     useEffect(function () {

//         function loadTasks() {
//             const res = {
//                 data: [
//                     {
//                         id: 0,
//                         isExist: true,
//                         name: "Nguyễn Minh Thông",
//                         email: "thong@gmail.com",
//                         image: "https://media.cdnandroid.com/5b/c8/e4/03/72/imagen-goku-wallpaper-dragon-ball-art-0thumb.jpeg"
//                     },
//                     {
//                         id: 1,
//                         isExist: true,
//                         name: "Nguyễn Minh Thanh",
//                         email: "thanh@gmail.com",
//                         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGCa_GyoWRJUl_zZm5ZeeFqY5dfG_WgP_SVA&usqp=CAU"
//                     },
//                     {
//                         id: 2,
//                         isExist: true,
//                         name: "Phạm Thị Trúc Lệ",
//                         email: "le@gmail.com",
//                         image: "https://avatarfiles.alphacoders.com/623/thumb-62373.jpg"
//                     },
//                     {
//                         id: 3,
//                         isExist: true,
//                         name: "Jiren",
//                         email: "jiren@gmail.com",
//                         image: ""
//                     },
//                 ]
//             }

//             dispatch({
//                 type: 'init',
//                 payload: {
//                     cards: res.data,
//                 }
//             });

//             // const LOCAL_STORAGE_KEY = "12345";
//             // localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(abcde));
//             // localStorage.getItem()
//         }

//         loadTasks();

//     }, []);

//     return (
//         <Router>
//             <Container fluid>
//                 <Row>
//                     <Header>
//                     </Header>
//                 </Row>
//                 <Switch>
//                     <AppContext.Provider value={{ store, dispatch }}>
//                         <Row>
//                             <Route exact path="/add" render={function () { return <AddContact /> }}></Route>
//                         </Row>
//                         <Row>
//                             <Route exact path="/" render={function () { return <ContactList /> }}></Route>
//                         </Row>
//                         <Row>
//                             {/* <Route exact path="/info/:id" 
//                               render={function () { 
//                                   return <Info/>
//                                }}>
//                             </Route> */}
//                             {/* <Route path="/info/:id" component={Info} /> */}
//                             <Route exact path="/info/:id">
//                                 <Info></Info>
//                             </Route>
//                             {/* <Route path="*">
//                                 <NotFound></NotFound>
//                             </Route> */}
//                         </Row>
//                     </AppContext.Provider>
//                 </Switch>
//             </Container>
//         </Router>
//     )
// }

import React from 'react';
import AddContact from '../components/AddContact';
import { Container, Row } from 'react-bootstrap';

export default function Home(props) {
    return (
        <Container fluid>
            <Row>
                <AddContact />
            </Row>
        </Container>
    )
}
