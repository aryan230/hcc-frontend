import CTA from "../Components/CTA";
import Footer from "../Components/footer";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import Hero2 from "../Components/Hero2";
import Logos from "../Components/Logos";
import MainHeading from "../Components/mainHeading";
import NewsLetter from "../Components/Newsletter";
import Programs from "../Components/Programs";
import Services from "../Components/Services";
import Team from "../Components/Team";
import Testimonials from "../Components/testimonials";
import TestimonialsNew from "../Components/testimonialsNew";
import Contact from "../Utils/Contact";

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Logos />
      <Programs />
      {/* <Services /> */}

      <TestimonialsNew />

      {/* <Team /> */}
      <CTA />
      <Contact />
      <NewsLetter />
    </div>
  );
};

export default Home;
