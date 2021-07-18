import React from "react";
import LightImg from "../image/light.png";
import FlashImg from "../image/flash.png";

class Greeting extends React.Component {
    componentDidMount() {
        ifShowPage();
        const { history } = this.props;
        function lampTouched() {
            document.querySelector(".greeting").classList.add("bye");
            setTimeout(() => {
                lamp.classList.add("hidden");
                const flash = document.querySelector(".flashImg");
                flash.classList.remove("hidden");
                const greetingMessage =
                    document.querySelector(".greetingMessage");
                greetingMessage.classList.remove("hidden");
                document.querySelector("body").classList.add("blackBg");
                flash.addEventListener("click", () => {
                    setTimeout(() => {
                        history.push("/show");
                    }, 1000);
                });
            }, 2800);
        }
        const lamp = document.querySelector(".lightimg");
        lamp.addEventListener("click", lampTouched);
    }
    render() {
        return (
            <section className="greeting">
                <img src={LightImg} className="lightimg" alt="Lightbulb"></img>
                <img
                    src={FlashImg}
                    className="flashImg hidden"
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
