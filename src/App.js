import React from "react";
import AdsCard from "./components/AdsCard/AdsCard";
import DisplayBanner from "./components/DisplayBanner/DisplayBanner";

const App = () => {
  return (
    <React.Fragment>
      <DisplayBanner />
      <AdsCard />
    </React.Fragment>
  );
};

export default App;
