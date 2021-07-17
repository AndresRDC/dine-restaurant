import PropTypes from "prop-types";
import Header from "../Header";
import AboutCardsList from "../AboutCardsList";
import MenuSection from "../MenuSection";
import FamilySection from "../FamilySection";
import BannerReservation from "../BannerReservation";
import Footer from "../Footer";

const subtitle = "Exquisite dining since 1989";
const text =
  "Experience our seasonal menu in beatiful country surroundings. Eat the freshest produce from the comfort of our farmhouse";
export default function ViewHome({ reservation }) {
  const nameNavigate = reservation ? "View reservation" : "Book a table";
  return (
    <div>
      <Header
        subtitle={subtitle}
        text={text}
        nameNavigate={nameNavigate}
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
ViewHome.propTypes = {
  reservation: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    dateTime: PropTypes.object,
    quantity: PropTypes.number,
  }),
};
