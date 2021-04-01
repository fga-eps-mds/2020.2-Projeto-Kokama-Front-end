import React from "react";
import { NavigationContainer} from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from "react-native-vector-icons/MaterialCommunityIcons"; 
import Icon5 from"react-native-vector-icons/FontAwesome5";
import { View, Image, Text, Platform, StatusBar } from "react-native";
import TopMenu from "./src/components/TopMenu";

import Translation from "./src/screens/Translation";
import CardsMenu from "./src/screens/CardsMenu";
import Stories from "./src/screens/KokamaStories";
import { baseProps } from "react-native-gesture-handler/lib/typescript/handlers/gestureHandlers";

const Tab = createBottomTabNavigator();
const TranslateStack = createStackNavigator();
const CardStack = createStackNavigator();

// Page Translate Relation
const TranslateStackScreen = () => (
  <TranslateStack.Navigator>
    <TranslateStack.Screen 
      name="Tradução"
      component={Translation}
      options={{
        headerTitle: props => <TopMenu name="Tradução" />,
        headerTitleAlign: 'center',
        headerStatusBarHeight: 75,
        headerStyle: {
          backgroundColor: "#f23232",
        },
      }} 
    />
  </TranslateStack.Navigator>
)

// Page Cards Relation
const CardStackScreen = () => (
  <CardStack.Navigator>
    <CardStack.Screen 
      name="Menu dos Cards" 
      component={CardsMenu}
      options={{
        headerTitle: props => <TopMenu name="Cards Menu" />,
        headerTitleAlign: 'center',
        headerStatusBarHeight: 75,
        headerStyle: {
          backgroundColor: "#f23232",
        },
      }} 
    />

    <CardStack.Screen 
      name="Histórias do Povo Kokama" 
      component={Stories}
      options={{
        headerTitle: props => <TopMenu name="Histórias do povo Kokama" />,
        headerTitleAlign: 'center',
        headerStatusBarHeight: 75,
        headerStyle: {
          backgroundColor: "#f23232",
        },
      }} 
    />
  </CardStack.Navigator>
)

// Tabbar
export default function App () {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBarOptions={{ activeTintColor: "red" }} >
        <Tab.Screen name="Tradução" component={TranslateStackScreen} 
          options={{
            tabBarIcon: props => (
              <Icon name="translate" size={35} color={props.color} />
            )
          }}
        />
        <Tab.Screen name="Menu dos Cards" component={CardStackScreen}
          options={{
            tabBarIcon: props => (
              <Icon5 name="book" size={30} color={props.color} />
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
