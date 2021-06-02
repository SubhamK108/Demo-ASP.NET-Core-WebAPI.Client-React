import React, { ReactElement } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.css"
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import Counter from "../components/Counter";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GetFromApi from "../components/GetFromApi";
import PostToApi from "../components/PostToApi";
import DeleteToApi from "../components/DeleteToApi";
import EditToApi from "../components/EditToApi";

const App = (): ReactElement => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/counter" exact component={Counter} />
                <Route path="/get_from_api" exact component={GetFromApi} />
                <Route path="/post_to_api" exact component={PostToApi} />
                <Route path="/delete_to_api" exact component={DeleteToApi} />
                <Route path="/edittoapi/:username" component={EditToApi} />
            </Switch>
        </Router>
    );
}

export default App;