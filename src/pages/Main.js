import Attractions from "../components/Attractions";
import Banner from "../components/Banner";
import Directions from "../components/Directions";
import Footer from "../components/Footer";
import Portal from "../components/Portal";
import Teasers from "../components/Teasers";
import VideoBanner from "../components/VideoBanner";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Main = () => {
    const { state } = useLocation();
    const { targetId } = state || {};

    useEffect(() => {
        const el = document.getElementById(targetId);
        if (el) {
            el.scrollIntoView();
        }
    }, [targetId]);

    return (
        <div className="main-page">
            <div id="bannerSection"></div>
            <Banner />
            <div id="announcementsSection"></div>
            <Teasers />
            <div id="attractionsSection"></div>
            <Attractions />
            <Portal />
            <VideoBanner />
            <div id="directionsSection"></div>
            <Directions />
            <Footer />
        </div>
    );
}

export default Main;