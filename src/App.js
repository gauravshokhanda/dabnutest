import "./App.css";
import Footer from "./component/Footer/footer";
import Hero2 from "./component/Hero/Hero2";
import HeroLeft from "./component/Hero/HeroLeft";
import HeroRight from "./component/Hero/HeroRight";
import About from "./component/about/About";
import FeaturePage from "./component/feature/FeaturePage";
import Header from "./component/navbar/Header";

function App() {
  return (
    <>
      <Header />

      <div class="container-welcome">
        <HeroLeft />
        {/* <div class="digital-hub-images">
          
          <div class="circle-digital-hub">
           
          </div>
        </div> */}
        <div class="container-right">
          <HeroRight />
        </div>
      </div>
      <Hero2 />
      <FeaturePage />
      <About />
      <Footer />
    </>
  );
}

export default App;
