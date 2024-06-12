import ExtraSec from "../component/ExtraSec";
import LatestReviews from "../component/LatestReviews";
import Slide from "../component/Slide";
import OneSection from "../component/extraSection/OneSection";
import AdvertismentSec from "./AdvertismentSec";


const Home = () => {
    return (
        <div>
          
            <Slide></Slide>
            <ExtraSec></ExtraSec>
            <AdvertismentSec></AdvertismentSec>
            <LatestReviews></LatestReviews>
            <OneSection></OneSection>
        </div>
    );
};

export default Home;