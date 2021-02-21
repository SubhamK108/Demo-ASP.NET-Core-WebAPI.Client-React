import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import Counter from "../components/Counter";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GetFromApi from "../components/GetFromApi";


const App: React.FC = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/counter" exact component={Counter} />
                <Route path="/get_from_api" exact component={GetFromApi} />
            </Switch>
        </Router>
    );
}


export default App;