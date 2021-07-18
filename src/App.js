import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Greeting from "./component/greeting";
import Artist from "./component/artist";
import Show from "./component/show";
import "./style.css";

function App() {
    return (
        <div>
            <Router>
                <Route path="/" exact={true} component={Greeting} />
                <Route path="/artist" exact={true} component={Artist} />
                <Route path="/show" exact={true} component={Show} />
            </Router>
        </div>
    );
}

export default App;
