import Features from "../components/Features";
import StayProductive from "../components/StayProductive";
import Landing from "../components/Landing";
import { Fragment } from "react";
import Testimonials from "../components/Testimonials";
import GetStarted from "../components/GetStarted";
function Home() {
  return (
    <Fragment>
      <section data-aos="fade-up">
        <Landing />
      </section>
      <section data-aos="fade-right" data-aos-delay="200">
        <Features />
      </section>
      <section data-aos="zoom-in" data-aos-delay="400">
        <StayProductive />
      </section>
      <section data-aos="fade-up" data-aos-delay="600">
        <Testimonials />
      </section>
      <section data-aos="fade-right" data-aos-delay="800">
        <GetStarted />
      </section>
    </Fragment>
  );
}

export default Home;
