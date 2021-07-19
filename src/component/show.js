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
let pressingMode = false;
function pressOn(e) {
    pressingMode = true;
    let size = parseInt(
        getComputedStyle(document.body)
            .getPropertyValue("--lightSize")
            .split("rem")[0]
    );

    let lightUp = setInterval(() => {
        if (pressingMode) {
            size++;
            document.body.style.setProperty(
                "--lightSize",
                `${String(size)}rem`
            );
        } else {
            clearInterval(lightUp);
        }
    }, 80);
}

function pressOff() {
    pressingMode = false;
    let size = getComputedStyle(document.body)
        .getPropertyValue("--lightSize")
        .split("rem")[0];
    let lightDown = setInterval(() => {
        if (size > 6 && pressingMode === false) {
            size--;
            document.body.style.setProperty("--lightSize", `${size}rem`);
        } else {
            clearInterval(lightDown);
        }
    }, 30);
}
function isMobile() {
    var UserAgent = navigator.userAgent;
    if (
        UserAgent.match(
            /iPhone|iPod|Android|Windows CE|BlackBerry|Symbian|Windows Phone|webOS|Opera Mini|Opera Mobi|POLARIS|IEMobile|lgtelecom|nokia|SonyEricsson/i
        ) != null ||
        UserAgent.match(/LG|SAMSUNG|Samsung/) != null
    ) {
        return true;
    } else {
        return false;
    }
}
if (isMobile()) {
    document.addEventListener("touchstart", pressOn);
    document.addEventListener("touchend", pressOff);
    document.addEventListener("touchmove", touchMove);
} else {
    document.addEventListener("mousedown", pressOn);
    document.addEventListener("mouseup", pressOff);
    document.addEventListener("mousemove", trackMouse);
}

export default Show;
