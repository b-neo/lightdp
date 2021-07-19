import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Greeting from "./component/greeting";
import Artist from "./component/artist";
import Show from "./component/show";
import "./style.css";

function App() {
    return (
        <div>
            <HashRouter>
                <Route path="/" exact={true} component={Greeting} />
                <Route path="/artist" exact={true} component={Artist} />
                <Route path="/show" exact={true} component={Show} />
            </HashRouter>
        </div>
    );
}

export default App;
