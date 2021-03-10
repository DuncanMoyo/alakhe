import readingGirl2 from "../../assets/videos/readingGirl2.mp4";
import { Button } from "../Button/Button";
import './HeroSection.css'
import '../../App.css'
import {FaPlayCircle} from 'react-icons/fa'

const HeroSection = () => {
  return (
    <div className="hero-container">
      <video src={readingGirl2} autoPlay loop muted />
      <h1>TRANSFORMING LIVES</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          WATCH TRAILER <FaPlayCircle className='fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;