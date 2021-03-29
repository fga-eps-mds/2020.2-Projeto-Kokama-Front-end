import React from "react";
import Translation from "./screens/Translation/index";
import { updateDictionary } from "./utils/dictionary";

const Root = () => {
  updateDictionary();

  return <Translation/>;
};

export default Root;