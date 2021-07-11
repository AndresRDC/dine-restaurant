import React from "react";
import AboutCardsList from "../AboutCardsList";
import BannerReservation from "../BannerReservation";
import FamilySection from "../FamilySection";
import Footer from "../Footer";
import Header from "../Header";
import MenuSection from "../MenuSection";

const subtitle = "Exquisite dining since 1989";
const text =
  "Experience our seasonal menu in beatiful country surroundings. Eat the freshest produce from the comfort of our farmhouse";

export default function ViewHome() {
  return (
    <div>
      <Header
        subtitle={subtitle}
        text={text}
        nameNavigate={"Book a table"}
        pathNavigate={"/reservation"}
      />
      <main>
        <AboutCardsList />
        <MenuSection />
        <FamilySection />
      </main>
      <BannerReservation />
      <Footer />
    </div>
  );
}
