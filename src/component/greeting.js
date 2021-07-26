import React from "react";
import fireImage from "../video/fire.png";
import fireVideo from "../video/fire.mp4";
import typeMp3 from "../video/type.mp3";
import Typewriter from "typewriter-effect";

class Greeting extends React.Component {
    state = {
        typer: 0,
    };
    componentDidMount() {
        ifShowPage();
        const { history } = this.props;
        document.querySelector(".greeting").classList.add("blackBg");
        const torchOn = document.querySelector(".torchOn");
        const torchOff = document.querySelector(".torchOff");
        torchOff.addEventListener("click", () => {
            torchOn.classList.add("fadeIn");
            torchOn.play();
            torchOff.classList.add("hidden");

            setTimeout(() => {
                torchOn.classList.remove("hidden");
                this.setState({ typer: 1 });
                setTimeout(() => {
                    history.push("/show");
                }, 9000);
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
                {this.state.typer === 1 ? (
                    <div className="typer">
                        <Typewriter
                            options={{
                                strings:
                                    "길을 내는 용기, 횃불을 들고 찾는 프로메테우스의 용기<br/> - 표출욕망에너지",
                                autoStart: true,
                                loop: false,
                                delay: 80,
                            }}
                        />
                        <audio autoPlay preload="auto">
                            <source src={typeMp3} type="audio/mp3"></source>
                        </audio>
                    </div>
                ) : (
                    ""
                )}
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
