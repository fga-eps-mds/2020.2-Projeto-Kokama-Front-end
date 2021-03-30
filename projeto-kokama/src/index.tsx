import React from "react";
import Translation from "./screens/Translation/index";
import { updateDictionary } from "./utils/dictionary";
import CardsMenu from "./screens/CardsMenu/index";
import StoryScreen from "./screens/KokamaStories/index";

const Root = () => {
  updateDictionary();

  return <CardsMenu/>;
};

export default Root;