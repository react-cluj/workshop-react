import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

import Ex01 from './ex01/Ex01';
import Ex02 from './ex02/Ex02';
import Ex03 from './ex03/Ex03';
import Ex04 from './ex04/Ex04';
import Ex05 from './ex05/Ex05';
import CurrentUserContext from './ex05/CurrentUserContext';
import Ex06 from './ex06/Ex06';
import Ex01solved from './ex01/Ex01solved';
import Ex02solved from './ex02/Ex02solved';
import Ex03solved from './ex03/Ex03solved';
import Ex04solved from './ex04/Ex04solved';
import Ex05solved from './ex05/Ex05solved';
import Ex06solved from './ex06/Ex06solved';

function App() {

    return (
        <Router>
            <div className="App-header">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/ex01">Ex01</Link>
                    </li>
                    <li>
                        <Link to="/ex01solved">Ex01solved</Link>
                    </li>
                    <li>
                        <Link to="/ex02">Ex02</Link>
                    </li>
                    <li>
                        <Link to="/ex02solved">Ex02solved</Link>
                    </li>
                    <li>
                        <Link to="/ex03">Ex03</Link>
                    </li>
                    <li>
                        <Link to="/ex03solved">Ex03solved</Link>
                    </li>
                    <li>
                        <Link to="/ex04">Ex04</Link>
                    </li>
                    <li>
                        <Link to="/ex04solved">Ex04solved</Link>
                    </li>
                    <li>
                        <Link to="/ex05">Ex05</Link>
                    </li>
                    <li>
                        <Link to="/ex05solved">Ex05solved</Link>
                    </li>
                    <li>
                        <Link to="/ex06">Ex06</Link>
                    </li>
                    <li>
                        <Link to="/ex06solved">Ex06solved</Link>
                    </li>
                </ul>

                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/ex01">
                        <Ex01 />
                    </Route>
                    <Route path="/ex01solved">
                        <Ex01solved />
                    </Route>
                    <Route path="/ex02">
                        <Ex02 />
                    </Route>
                    <Route path="/ex02solved">
                        <Ex02solved />
                    </Route>
                    <Route path="/ex03">
                        <Ex03 />
                    </Route>
                    <Route path="/ex03solved">
                        <Ex03solved />
                    </Route>
                    <Route path="/ex04">
                        <Ex04 />
                    </Route>
                    <Route path="/ex04solved">
                        <Ex04solved />
                    </Route>
                    <Route path="/ex06">
                        <Ex06 />
                    </Route>
                    <Route path="/ex06solved">
                        <Ex06solved />
                    </Route>
                    <CurrentUserContext.Provider value={{
                        email: 'john_doe@gmail.com',
                        phone: '+4071234567'
                    }}>
                        <Route path="/ex05">
                            <Ex05 />
                        </Route>
                        <Route path="/ex05solved">
                            <Ex05solved />
                        </Route>
                    </CurrentUserContext.Provider>

                </Switch>
            </div>
        </Router>
    );
}

export default App;

function Home() {
    return (
        <div className="App">
        </div>
    );
}