import React, { useReducer, useEffect } from 'react';
import './App.css';
import Home from './views/Home';
import NotFound from './views/NotFound';
import AddContact from './views/AddContact';
import Info from './views/Info';

import reducer from "./contactAppReducer";
//import { axiosInstance } from "./utils/contactAppUtil";
import AppContext from "./contactAppContext.js";
import { data } from './data/datafetch'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Header from './components/Header';
import ScrollButton from './components/ScrollButton/ScrollButton';

function App() {
  const initialAppState = {
    cards: []
  }
  const [store, dispatch] = useReducer(reducer, initialAppState);

  useEffect(function () {

    function loadTasks() {
      const res = {
        data,
      }

      dispatch({
        type: 'init',
        payload: {
          cards: res.data,
        }
      });

      // const LOCAL_STORAGE_KEY = "12345";
      // localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(abcde));
      // localStorage.getItem()
    }

    loadTasks();

  }, []);

  return (
    // <div>
    //    <Home></Home>
    // </div>
    // <>
    <AppContext.Provider value={{ store, dispatch }}>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
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
          <Route path="*" component={NotFound} />
        </Switch>
        <ScrollButton></ScrollButton>
      </Router>
    </AppContext.Provider>
    //</>
  );
}


export default App;
