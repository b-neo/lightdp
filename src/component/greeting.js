import React from "react";
import TorchFire from "../image/torch2.png";
import Torch from "../image/torch1.png";

class Greeting extends React.Component {
    componentDidMount() {
        ifShowPage();
        const { history } = this.props;
        document.querySelector(".greeting").classList.add("blackBg");
        document.querySelector(".greeting").classList.add("dim");
        function torchTouched() {
            torchOff.classList.add("fadeOut");
            setTimeout(() => {
                torchOff.classList.add("hidden");
                document.querySelector(".greeting").classList.remove("dim");
                const torchOn = document.querySelector(".torchOn");
                torchOn.classList.add("fadeIn");
                setTimeout(() => {
                    torchOn.classList.remove("hidden");
                    torchOn.addEventListener("click", () => {
                        history.push("/show");
                    });
                }, 50);
            }, 200);
        }
        const torchOff = document.querySelector(".torchOff");
        torchOff.addEventListener("click", torchTouched);
    }
    render() {
        return (
            <section className="greeting">
                <img src={Torch} className="torchOff" alt="Lightbulb"></img>
                <img
                    src={TorchFire}
                    className="torchOn hidden"
                    alt="Flashlight"
                ></img>

                <div className="greetingMessage hidden">
                    김형기 Online DP - 불을 찾아서
                </div>
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
