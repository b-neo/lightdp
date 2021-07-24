import React from "react";
import img1 from "../image/1.jpg";
import img2 from "../image/2.jpg";
import img3 from "../image/3.jpg";
import img4 from "../image/4.jpg";
import img5 from "../image/5.jpg";
import img6 from "../image/6.jpg";
import img7 from "../image/7.jpg";
import img8 from "../image/8.jpg";
import img9 from "../image/9.jpg";
import img10 from "../image/10.jpg";
import img11 from "../image/11.jpg";
import img12 from "../image/12.jpg";
import img13 from "../image/13.jpg";
import img14 from "../image/14.jpg";
import img15 from "../image/15.jpg";
import img16 from "../image/16.jpg";
import img17 from "../image/17.jpg";
import img18 from "../image/18.jpg";
import img19 from "../image/19.jpg";
import img20 from "../image/20.jpg";
import img21 from "../image/21.jpg";
import img22 from "../image/22.jpg";
import img23 from "../image/23.jpg";
import img24 from "../image/24.jpg";
import img25 from "../image/25.jpg";
import img26 from "../image/26.jpg";
import img27 from "../image/27.jpg";
import img28 from "../image/28.jpg";
import img29 from "../image/29.jpg";
import img30 from "../image/30.jpg";
import img31 from "../image/31.jpg";
import img32 from "../image/32.jpg";
import img33 from "../image/33.jpg";
import img34 from "../image/34.jpg";
import img35 from "../image/35.jpg";
import img36 from "../image/36.jpg";
import img37 from "../image/37.jpg";
import img38 from "../image/38.jpg";
import img39 from "../image/39.jpg";

class Show extends React.Component {
    state = {
        currentImg: 1,
    };
    componentDidMount() {
        if (ifShowPage()) {
            document.querySelector("body").classList.add("flashlight");
            pressOff();
            this.updatePainting = setInterval(() => {
                pressOff();
                let imgNum = Math.floor(Math.random() * 39) + 1;
                let imgElems = document.querySelectorAll(".showImg");
                let prevImg = imgElems[this.state.currentImg - 1]; // Previous Img
                prevImg.classList.add("fadeOut");
                setTimeout(() => {
                    document.body.style.setProperty("--lightSize", `250rem`);
                    prevImg.classList.remove("fadeOut");
                    prevImg.classList.add("hidden");
                    pressOff();
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
            }, 15000);
        } else {
            document.querySelector("body").classList.remove("flashlight");
        }
    }
    componentWillUnmount() {
        clearInterval(this.updatePainting);
    }
    render() {
        document.body.style.setProperty("--lightSize", `250rem`);
        return (
            <section className="show">
                <img src={img1} className="showImg" alt="painting"></img>
                <img src={img2} className="showImg hidden" alt="painting"></img>
                <img src={img3} className="showImg hidden" alt="painting"></img>
                <img src={img4} className="showImg hidden" alt="painting"></img>
                <img src={img5} className="showImg hidden" alt="painting"></img>
                <img src={img6} className="showImg hidden" alt="painting"></img>
                <img src={img7} className="showImg hidden" alt="painting"></img>
                <img src={img8} className="showImg hidden" alt="painting"></img>
                <img src={img9} className="showImg hidden" alt="painting"></img>
                <img
                    src={img10}
                    className="showImg hidden"
                    alt="painting"
                ></img>
                <img
                    src={img11}
                    className="showImg hidden"
                    alt="painting"
                ></img>
                <img
                    src={img12}
                    className="showImg hidden"
                    alt="painting"
                ></img>
                <img
                    src={img13}
                    className="showImg hidden"
                    alt="painting"
                ></img>
                <img
                    src={img14}
                    className="showImg hidden"
                    alt="painting"
                ></img>
                <img
                    src={img15}
                    className="showImg hidden"
                    alt="painting"
                ></img>
                <img
                    src={img16}
                    className="showImg hidden"
                    alt="painting"
                ></img>
                <img
                    src={img17}
                    className="showImg hidden"
                    alt="painting"
                ></img>
                <img
                    src={img18}
                    className="showImg hidden"
                    alt="painting"
                ></img>
                <img
                    src={img19}
                    className="showImg hidden"
                    alt="painting"
                ></img>
                <img
                    src={img20}
                    className="showImg hidden"
                    alt="painting"
                ></img>
                <img
                    src={img21}
                    className="showImg hidden"
                    alt="painting"
                ></img>
                <img
                    src={img22}
                    className="showImg hidden"
                    alt="painting"
                ></img>
                <img
                    src={img23}
                    className="showImg hidden"
                    alt="painting"
                ></img>
                <img
                    src={img24}
                    className="showImg hidden"
                    alt="painting"
                ></img>
                <img
                    src={img25}
                    className="showImg hidden"
                    alt="painting"
                ></img>
                <img
                    src={img26}
                    className="showImg hidden"
                    alt="painting"
                ></img>
                <img
                    src={img27}
                    className="showImg hidden"
                    alt="painting"
                ></img>
                <img
                    src={img28}
                    className="showImg hidden"
                    alt="painting"
                ></img>
                <img
                    src={img29}
                    className="showImg hidden"
                    alt="painting"
                ></img>
                <img
                    src={img30}
                    className="showImg hidden"
                    alt="painting"
                ></img>
                <img
                    src={img31}
                    className="showImg hidden"
                    alt="painting"
                ></img>
                <img
                    src={img32}
                    className="showImg hidden"
                    alt="painting"
                ></img>
                <img
                    src={img33}
                    className="showImg hidden"
                    alt="painting"
                ></img>
                <img
                    src={img34}
                    className="showImg hidden"
                    alt="painting"
                ></img>
                <img
                    src={img35}
                    className="showImg hidden"
                    alt="painting"
                ></img>
                <img
                    src={img36}
                    className="showImg hidden"
                    alt="painting"
                ></img>
                <img
                    src={img37}
                    className="showImg hidden"
                    alt="painting"
                ></img>
                <img
                    src={img38}
                    className="showImg hidden"
                    alt="painting"
                ></img>
                <img
                    src={img39}
                    className="showImg hidden"
                    alt="painting"
                ></img>
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
