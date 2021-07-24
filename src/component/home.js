import React from "react";
import { Link } from "react-router-dom";
import IntroImg from "../image/intro.jpg";

class Home extends React.Component {
    componentDidMount() {
        ifShowPage();
    }
    render() {
        return (
            <section className="home">
                <Link to="/greeting">
                    <img
                        src={IntroImg}
                        className="introImg fadeIn"
                        alt="poster"
                    ></img>
                    <div className="margin1"></div>
                    <div className="large bold fadeIn">불을 찾아서 Display</div>
                </Link>
            </section>
        );
    }
}
function ifShowPage() {
    let checker = document.getElementsByClassName("show");
    if (checker.length > 0) {
        document.querySelector("body").classList.add("flashlight");
    } else {
        document.querySelector("body").classList.remove("flashlight");
    }
}

export default Home;
