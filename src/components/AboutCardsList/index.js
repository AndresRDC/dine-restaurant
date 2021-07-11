import AboutCard from "../AboutCard";
import "./index.css";

const aboutCards = [
  {
    title: "Enjoyable place for all the family",
    text: "Our relaxed surroundings make dining with us a great esperience for everyone. We can even arrange a tour of the farm before your meal.",
    imageUrl: "/img/farm.jpg",
    imageAlt: "farm",
  },
  {
    title: "The most locally sourced food",
    text: "All our ingredients come directly from our farm or local fishery. So you can be sure that you're eating the freshest, most sustainable food.",
    imageUrl: "/img/sustainable-food.jpg",
    imageAlt: "Sustainable food",
  },
];

function AboutCardsList() {
  return (
    <div className="about-card-list">
      <div className="container">
        <div className="about-card-list__container">
          {aboutCards.map(({ title, text, imageUrl, imageAlt }, index) => (
            <AboutCard
              key={index}
              title={title}
              text={text}
              imageUrl={imageUrl}
              imageAlt={imageAlt}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutCardsList;
