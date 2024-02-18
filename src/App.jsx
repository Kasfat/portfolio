import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { TopBanner } from "./components/Banner/TopBanner";
import Service from "./components/Service/Service";
import Expertise from "./components/Expertise/Expertise";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <>
      <NavBar />
      <TopBanner
        name="Kowshiq Asfat"
        post="I am a Front-end developer"
        objective="I have experience in Front-End development. That enhanced my
                    technical capacity and performance. However, I can assure
                    you that I am a quick learner, adaptive and energetic
                    person."
      />
      <Service/>
      <Expertise/>
      <Projects/>
    </>
  );
}

export default App;
