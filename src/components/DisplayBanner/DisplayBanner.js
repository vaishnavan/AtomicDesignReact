import React from "react";
import Banner from "../../dls/molecules/Banner/Banner";

const DisplayBanner = () => {
  return (
    <Banner
      src={
        "https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDh8fHdvcmt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
      }
      alt={"banner pic"}
      height={"300px"}
    />
  );
};

export default DisplayBanner;
