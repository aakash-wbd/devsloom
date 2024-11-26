import Client from "./Client";
import Contact from "./Contact";
import Hero from "./Hero";
import Location from "./Location";
import Newsletter from "./Newsletter";
import Products from "./Product";
import Service from "./Service";
import Team from "./Team";

const Home = () => {
  return (
    <>
      <Hero />
      <Service />
      <Products />
      <Team />
      <Client />
      <Location />
      <Contact />
      <Newsletter />
    </>
  );
};

export default Home;
