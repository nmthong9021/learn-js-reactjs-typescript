import React, { useReducer, useEffect } from 'react';
import './App.css';
// import Home from './views/Home';
// import NotFound from './views/NotFound';
// import AddContact from './views/AddContact';
// import Info from './views/Info';

import reducer from "./app-reducer";
//import { axiosInstance } from "./utils/contactAppUtil";
import AppContext from "./app-context";
// import { data } from './data/datafetch'

import Login from './views/Login/Login'
import HomeEng from './views/Home/HomeEng'
import HomeViet from './views/Home/HomeViet'
import Thu from './views/Thu/Thu'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Header from './components/_Header/Header';
import Footer from './components/_Footer/Footer';
//import Header from './components/Header';
//import ScrollButton from './components/ScrollButton/ScrollButton';

function App() {
  const initialAppState = {
    isAuthenticated: false
  }
  const [store, dispatch] = useReducer(reducer, initialAppState);

  // useEffect(function () {

  //   function loadTasks() {
  //     const res = {
  //       data,
  //     }

  //     dispatch({
  //       type: 'init',
  //       payload: {
  //         cards: res.data,
  //       }
  //     });
      
  //     localStorage.removeItem("contactManagerApp_cards");
  //     // console.log("qwer");
  //     var cards = [];
  //       for (let i = 0; i <= 30; i++) {
  //           cards[i] = { like: false, dislike: false }
  //       }
  //       const str = JSON.stringify(cards);
  //       localStorage.setItem("contactManagerApp_cards", str);

  //     // const LOCAL_STORAGE_KEY = "12345";
  //     // localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(abcde));
  //     // localStorage.getItem()
  //   }

  //   loadTasks();

  // }, []);
  
    
    
   
  

  return (
    <AppContext.Provider value={{ store, dispatch }}>
      <Router>
        <Header></Header>
        <Switch>
          {/* <Route exact path="/">
            <Home number={1}></Home>
          </Route>
          <Route exact path="/page/1">
            <Redirect to={{ pathname: '/' }} />
          </Route>
          <Route exact path="/page/:number" render={(props) =>
            <Home number={props.match.params.number} />
          } />
          <Route exact path="/add" component={AddContact} />
          <Route exact path="/info/:id" component={Info} />
          <Route path="*" component={NotFound} /> */}


          {/* Tham khảo theo :
          https://www.youtube.com/watch?v=VzWBLj_CfpE */}
          <Route exact path='/login'><Login/></Route>
          <Route exact path='/' component={true?HomeEng:Login} />
          <Route exact path='/thu' component={true?Thu:Login} />
          <Route exact path='/home-vi' component={true?HomeViet:Login} />
          {/* <PrivateRoute path='/'>
            <Home />
          </PrivateRoute> */}
        </Switch>
        <Footer></Footer>
        {/* <ScrollButton></ScrollButton> */}
      </Router>
    </AppContext.Provider>
    //</>
  );
}

//const bieuthuc = (() => Math.floor(Math.random()*10) >= 6 ? true : false)();



// function PrivateRoute({ children, ...rest }) {
//   return (
//     <Route {...rest} render={function () {
//       return true ?
//         children :
//         <Redirect to={{ pathname: '/login' }} />;
//     }} />
//   );
//}


export default App;
