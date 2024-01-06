import Attractions from "../components/Attractions";
import Banner from "../components/Banner";
import Directions from "../components/Directions";
import Footer from "../components/Footer";
import Portal from "../components/Portal";
import Teasers from "../components/Teasers";
import VideoBanner from "../components/VideoBanner";

const Main = () => {
    return ( 
        <div className="main-page">
            <Banner/>
            <Teasers/>
            <Attractions/>
            <Portal/>
            <VideoBanner/>
            <Directions/>
            <Footer/>
        </div>
     );
}
 
export default Main;