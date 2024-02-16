import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { TopBanner } from "./components/Banner/TopBanner";

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
    </>
  );
}

export default App;
