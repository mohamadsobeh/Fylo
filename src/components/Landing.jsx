import { Link } from "react-router-dom";
import LandingImg from "/src/assets/images/landing-img.png";

function Landing() {
  return (
    <section className="bg-background">
      <div className="container">
        <div className="element-center flex-col pt-[180px] relative z-20">
          <div className="w-[700px] max-w-full">
            <img
              src={LandingImg}
              alt="landing-img"
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="text-center my-8">
            <h1 className="text-primary text-3xl md:text-4xl font-bold mb-4">
              All your files in one secure location,
              <br />
              accessible anywhere.
            </h1>
            <p className="text-white font-light text-lg px-4 md:w-[600px] md:mx-auto">
              Securely store and access your important files anytime, anywhere. Experience seamless collaboration and easy file management.
            </p>
          </div>
          <Link
            to="/register"
            className="btn w-[250px] h-[55px] rounded-full element-center mx-auto text-white font-semibold"
          >
            Get Started
          </Link>
        </div>
      </div>
      <div className="w-full h-[180px]">
        <img
          src="/src/assets/images/bg-curvy-desktop.svg"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}

export default Landing;
