import Header from "../pages/header/index";
import Introduction from "../pages/section/introduction/index";
import Skills from "../pages/section/skills/index";
import Projects from "../pages/section/projects/index";
import ContactForm from "../pages/section/contact/index";
import Footer from "../pages/footer/index";
const Home = () => {
  return (
    <div>
      <Header />
      <Introduction />
      <Skills />
      <Projects />
      <ContactForm />
      <Footer />
    </div>
  );
};
export default Home;
