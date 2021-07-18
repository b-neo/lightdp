import React from "react";
import ProfileImg from "../image/profile2.JPG";
import { Link } from "react-router-dom";

class Artist extends React.Component {
    componentDidMount() {
        ifShowPage();
    }
    render() {
        return (
            <section className="screen">
                <Link to="/show">
                    <img
                        src={ProfileImg}
                        className="profileImg"
                        alt="Artist"
                    ></img>
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

export default Artist;
