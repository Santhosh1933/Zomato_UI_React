import "./App.css";
import { FoodCards } from "./components/FoodCards";
import { Home } from "./components/home";
import dine1 from "../src/img/dine1.avif";
import dine2 from "../src/img/dine2.avif";
import { Collection } from "./components/Collection";
import { Localities } from "./components/Localities";
import { Zomotoapp } from "./components/Zomotoapp";
import { Explore } from "./components/Explore";
import { Footer } from "./components/Footer";
function App() {
  return (
    <div className="App">
      <div className="head">
        <Home />
      </div>
      <div className="body">
        <div className="FoodCard">
          <FoodCards
            img={dine1}
            title="Order Online"
            subtitle="Stay home and order to your doorstep"
          />
          <FoodCards
            img={dine2}
            title="Dining"
            subtitle="View the city's favorite dining venues"
          />
        </div>
          <Collection/>
          <Localities/>
          <Zomotoapp/>
          <Explore/>
          {/* <Footer/> */}
        </div>
      </div>
  );
}

export default App;
