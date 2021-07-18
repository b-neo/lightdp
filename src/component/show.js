import React from "react";
import ProfileImg from "../image/seek.JPG";

class Show extends React.Component {
    componentDidMount() {
        ifShowPage();
    }
    render() {
        return (
            <section className="show">
                <img src={ProfileImg} className="showImg" alt="painting"></img>
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
function trackMouse(e) {
    document.body.style.setProperty("--cursorX", `${e.clientX}px`);
    document.body.style.setProperty("--cursorY", `${e.clientY}px`);
}
function touchMove(e) {
    let pos = e.touches[0];
    document.body.style.setProperty("--cursorX", `${pos.clientX}px`);
    document.body.style.setProperty("--cursorY", `${pos.clientY}px`);
}
document.addEventListener("mousemove", trackMouse);
document.addEventListener("touchmove", touchMove);

export default Show;
