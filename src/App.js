import React from 'react'
import ReactDOM from 'react-dom'
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import HomeComponent from "./HomeComponent";
import AccountComponent from "./AccountComponent";
import CardsComponent from "./CardsComponent";
import ProtectedRoute from './ProtectedRoute';
import useAuth from "./useAuth";


function App() {
  const [isAuth, login, logout] = useAuth(false)

  return (
    <div className="ui container">
      <h2>Protected Routes Tutorial</h2>
      <Router>
        <ul>
          <li>
            <Link to="/">Home Page</Link>
          </li>
          <li>
            <Link to="/accounts">Account (Protected)</Link>
          </li>
          <li>
            <Link to="/cards">Cards (unprotected)</Link>
          </li>
        </ul>
        {isAuth ? (<><div className="ui message brown">You are logged in..</div><button className="ui button blue" onClick={logout}>logout</button></>) : (<><div className="ui message violet">You are logged out..</div><button className="ui button blue" onClick={login}>login</button></>)}
        <Switch>
          <Route path="/" exact component={HomeComponent} />
          <ProtectedRoute path="/accounts" exact component={AccountComponent} Auth={isAuth} />
          <Route path="/cards" component={CardsComponent} />
        </Switch>
      </Router>
    </div>
  );
}
export default App;