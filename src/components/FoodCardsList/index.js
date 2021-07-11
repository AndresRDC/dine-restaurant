import FoodCard from "../FoodCard";
import "./index.css";

const foodCards = [
  {
    title: "Seared Salmon Fillet",
    text: "Our locally sourced salmon served with a refreshing buckwheat summer salad.",
    imageUrl: "/img/salmon.jpg",
    imageAlt: "Seared Salmon Fillet",
  },
  {
    title: "Rosemary Filet Mignon",
    text: "Our prime beef served to your taste with a delicious choice of seasonal sides.",
    imageUrl: "/img/filet.jpg",
    imageAlt: "Rosemary Filet Mignon",
  },
  {
    title: "Summer Fruit Chocolate Mousse",
    text: "Vreamy mousse combined with summer fruits and dark chocolate shavings.",
    imageUrl: "/img/mousse.jpg",
    imageAlt: "Summer Fruit Chocolate Mousse",
  },
];

function FoodCardsList() {
  return (
    <div className="food-card-list">
      <div className="food-card-list__container">
        {foodCards.map(({ title, text, imageUrl, imageAlt }, index) => (
          <FoodCard
            key={index}
            title={title}
            text={text}
            imageUrl={imageUrl}
            imageAlt={imageAlt}
          />
        ))}
      </div>
    </div>
  );
}

export default FoodCardsList;
