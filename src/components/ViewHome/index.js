import React from "react";
import Footer from "../Footer";
import Header from "../Header";

export default function ViewHome() {
  const subtitle = "Exquisite dining since 1989";
  const text =
    "Experience our seasonal menu in beatiful country surroundings. Eat the freshest produce from the comfort of our farmhouse";
  return (
    <div>
      <Header subtitle={subtitle} text={text} />
      <Footer />
    </div>
  );
}
