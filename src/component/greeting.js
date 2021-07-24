import React from "react";
import fireImage from "../video/fire.png";
import fireVideo from "../video/fire.mp4";

class Greeting extends React.Component {
    componentDidMount() {
        ifShowPage();
        const { history } = this.props;
        document.querySelector(".greeting").classList.add("blackBg");
        const torchOn = document.querySelector(".torchOn");
        torchOn.addEventListener("click", () => {
            history.push("/show");
        });
        const torchOff = document.querySelector(".torchOff");
        torchOff.addEventListener("click", () => {
            torchOn.classList.add("fadeIn");
            torchOn.play();
            torchOff.classList.add("hidden");

            setTimeout(() => {
                torchOn.classList.remove("hidden");
            }, 10);
        });
    }
    render() {
        return (
            <section className="greeting">
                <img
                    src={fireImage}
                    className="torchOff"
                    alt="Flashlight"
                ></img>

                <video loop className="torchOn hidden">
                    <source src={fireVideo} type="video/mp4"></source>
                </video>
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

export default Greeting;
