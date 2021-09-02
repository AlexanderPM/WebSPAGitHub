import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import "./app.css"
import Main from './main/main';
import Card from './card/card';
import Error from './main/error';

const App = () => {


    return (
        <BrowserRouter>
            <div className="contener">
                <Switch>
                    <Route exact path="/" component={Main} />
                    <Route path="/card/:username/:reponame" component={Card} />
                    <Route path="error" component={Error }/>
                    <Redirect to="/"></Redirect>
                </Switch>
            </div>

        </BrowserRouter>
    );

};
export default App;