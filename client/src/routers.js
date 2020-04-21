import React from "react";
import {
    BrowserRouter as Router,
    Route, Redirect
} from "react-router-dom";
import Login from './pages/login';
import Register from './pages/register';
const RouterWrap = () => {
    return (
        <Router>
            <Route path="/">
                <Redirect to="/login" />
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/register">
                    <Register />
                </Route>
            </Route>
        </Router>
    )
}
export default RouterWrap;
