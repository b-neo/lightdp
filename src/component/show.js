import React from "react";
import img1 from "../image/1.JPG";
import img2 from "../image/2.jpg";
import img3 from "../image/3.jpg";
import img4 from "../image/4.JPG";
import img5 from "../image/5.JPG";
import img6 from "../image/6.jpg";
import img7 from "../image/7.JPG";

class Show extends React.Component {
    state = {
        currentImg: 1,
    };
    componentDidMount() {
        if (ifShowPage()) {
            document.querySelector("body").classList.add("flashlight");
            document.body.style.setProperty("--lightSize", "5rem");

            this.updatePainting = setInterval(() => {
                let imgNum = Math.floor(Math.random() * 7) + 1;
                let imgElems = document.querySelectorAll(".showImg");
                let prevImg = imgElems[this.state.currentImg - 1]; // Previous Img
                prevImg.classList.add("fadeOut");
                setTimeout(() => {
                    prevImg.classList.remove("fadeOut");
                    prevImg.classList.add("hidden");
                    let newImg = imgElems[imgNum - 1]; // New Image
                    newImg.classList.add("fadeIn");
                    setTimeout(() => {
                        newImg.classList.remove("hidden");
                        setTimeout(() => {
                            newImg.classList.remove("fadeIn");
                            let currentImg = imgNum;
                            this.setState({ currentImg });
                        }, 1000);
                    }, 50);
                }, 990);
            }, 5000);
        } else {
            document.querySelector("body").classList.remove("flashlight");
        }
    }
    componentWillUnmount() {
        clearInterval(this.updatePainting);
    }
    render() {
        return (
            <section className="show">
                <img src={img1} className="showImg" alt="painting"></img>
                <img src={img2} className="showImg hidden" alt="painting"></img>
                <img src={img3} className="showImg hidden" alt="painting"></img>
                <img src={img4} className="showImg hidden" alt="painting"></img>
                <img src={img5} className="showImg hidden" alt="painting"></img>
                <img src={img6} className="showImg hidden" alt="painting"></img>
                <img src={img7} className="showImg hidden" alt="painting"></img>
            </section>
        );
    }
}
function ifShowPage() {
    let checker = document.getElementsByClassName("show");
    if (checker.length > 0) {
        return true;
    } else {
        return false;
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
        if (size > 5 && pressingMode === false) {
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
