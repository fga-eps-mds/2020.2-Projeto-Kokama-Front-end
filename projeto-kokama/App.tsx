// import React from "react";
// import Root from './src/index';

// const App = () => {
//     return (
//         <Root/>
//     );
    
    
// }

// export default App;

import React from "react";

import { NavigationContainer} from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

import CardsMenu from "./src/screens/CardsMenu/index";
import Stories from "./src/screens/KokamaStories/index";

const Stack = createStackNavigator();

export default function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = 'Translate'>
        <Stack.Screen name="CardMenu" component={CardsMenu} />
        <Stack.Screen name="Story" component={Stories} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}