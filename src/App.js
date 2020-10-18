import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/media.css";
import "./css/style.css";

//component lists
import Header from "./Components/Header";
import Slider from "./Components/Slider";
import Today from "./Components/Today";
import Service from "./Components/Service";
import Video from "./Components/Video";
import Gallery from "./Components/Gallery";
import Counter from "./Components/Counter";
import Featured from "./Components/Featured";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Slider />
      <Today />
      <Service />
      <Video />
      <Gallery />
      <Counter />
      <Featured />
      <Footer />
    </div>
  );
}

export default App;
