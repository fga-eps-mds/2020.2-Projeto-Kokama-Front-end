import React from "react";
import Translation from "./screens/Translation/index";
import { updateDictionary } from "./utils/dictionary";


// const Root = () => {
//   updateDictionary();

//   return <CardsMenu/>;
// };

// export default Root;

import CardsMenu from "./screens/CardsMenu/index";
import Stories from "./screens/KokamaStories/index";
import { NavigationContainer} from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function  () {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="CardMenu" component={CardsMenu} />
        <Stack.Screen name="Story" component={Stories} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}