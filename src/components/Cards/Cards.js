import CardItems from "./CardItems";
import "./Cards.css";
import Alakhe from "../../assets/images/ALAKHE.png";
import ImageTwo from "../../assets/images/ImageTwo.jpg";
import ImageThree from "../../assets/images/ImageThree.jpg";
import ImageFive from "../../assets/images/ImageFive.jpg";
import ImageFour from "../../assets/images/ImageFour.jpg";

const Cards = () => {
  return (
    <div className="cards">
      <h1>What we've been up to...</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItems
              src={Alakhe}
              text="What led us to start this organisation"
              label="News"
              path="/services"
            />
            <CardItems
              src={ImageTwo}
              text="Despite the weird year, we moved forward"
              label="Achievements"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItems
              src={ImageThree}
              text="Breaking Boundaries and linking cultures"
              label="Outreach"
              path="/services"
            />
            <CardItems
              src={ImageFour}
              text="Steady growth of Female Programmers"
              label="Academia"
              path="/products"
            />
            <CardItems
              src={ImageFive}
              text="Tech still out of reach for many"
              label="Technology"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cards;