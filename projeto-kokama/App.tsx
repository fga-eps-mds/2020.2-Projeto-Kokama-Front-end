import React from "react";
import { NavigationContainer} from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Translation from "./src/screens/Translation";
import CardsMenu from "./src/screens/CardsMenu";
import Stories from "./src/screens/KokamaStories";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs(){
  return(
    <Tab.Navigator>
      <Tab.Screen name="Tradução" component={Translation} />
      <Tab.Screen name="Cards" component={CardsMenu} />
    </Tab.Navigator>
  )
}

export default function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "Tradução">
        <Stack.Screen name="Tradução" component={Tabs} />
        <Stack.Screen name="Menu dos Cards" component={CardsMenu} />
        <Stack.Screen name="Histórias do Povo Kokama" component={Stories} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}