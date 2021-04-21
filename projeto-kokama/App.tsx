import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Icon5 from "react-native-vector-icons/FontAwesome5";
import TopMenu from "./src/components/TopMenu";
import { updateDictionary } from "./src/utils/dictionary";
import Translation from "./src/screens/Translation";
import Learning from "./src/screens/Learning";
import Stories from "./src/screens/KokamaStories";
import Story from "./src/screens/Story";
import Activity from "./src/screens/Activity";
import User from "./src/screens/About";

const Tab = createBottomTabNavigator();
const TranslateStack = createStackNavigator();
const CardStack = createStackNavigator();
const UserStack = createStackNavigator();

// Tabbar
export default function App() {
  updateDictionary();
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{ activeTintColor: "red", showLabel: false }}
      >
        <Tab.Screen
          name="Tradução"
          component={TranslateStackScreen}
          options={{
            tabBarIcon: (props) => (
              <Icon name="translate" size={35} color={props.color} />
            ),
          }}
        />
        <Tab.Screen
          name="Ensino"
          component={CardStackScreen}
          options={{
            tabBarIcon: (props) => (
              <Icon name="book" size={30} color={props.color} />
            ),
          }}
        />
        <Tab.Screen name="Usuário" component={UserStackScreen}
          options={{
            tabBarIcon: props => (
              <Icon5 name="info-circle" size={30} color={props.color}/>
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// Page Translate Relation
const TranslateStackScreen = () => (
  <TranslateStack.Navigator>
    <TranslateStack.Screen
      name="Tradução"
      component={Translation}
      options={{
        headerTitle: () => <TopMenu name="Tradução" />,
        headerTitleAlign: "center",
        headerStatusBarHeight: 75,
        headerStyle: {
          backgroundColor: "#FFFFFF",
        },
      }}
    />
  </TranslateStack.Navigator>
);

// Page Cards Relation
const CardStackScreen = () => (
  <CardStack.Navigator>
    <CardStack.Screen
      name="Menu dos Cards"
      component={Learning}
      options={{
        headerTitle: () => <TopMenu name="Ensino" />,
        headerTitleAlign: "center",
        headerStatusBarHeight: 75,
        headerStyle: {
          backgroundColor: "#FFFFFF",
        },
      }}
    />

    {/* Story list page */}
    <CardStack.Screen
      name="Histórias do Povo Kokama"
      component={Stories}
      options={{
        headerTitle: () => <TopMenu name="Histórias do povo Kokama" />,
        headerTitleAlign: "center",
        headerStatusBarHeight: 75,
        headerStyle: {
          backgroundColor: "#FFFFFF",
        },
      }}
    />

    {/* Story Page */}
    <CardStack.Screen
      name="História"
      component={Story}
      options={{
        headerTitle: () => <TopMenu name="História" />,
        headerTitleAlign: "center",
        headerStatusBarHeight: 75,
        headerStyle: {
          backgroundColor: "#FFFFFF",
        },
      }}
    />

    {/* Activity Page */}
    <CardStack.Screen
      name="Atividades"
      component={Activity}
      options={{
        headerTitle: () => <TopMenu name="Atividades" />,
        headerTitleAlign: "center",
        headerStatusBarHeight: 75,
        headerStyle: {
          backgroundColor: "#FFFFFF",
        },
      }}
    />
  </CardStack.Navigator>
);

// User screens relation
const UserStackScreen = () => (
  <UserStack.Navigator>
    <UserStack.Screen
      name="Informações"
      component={User}
      options={{
        headerTitle: () => <TopMenu name="Informações" />,
        headerTitleAlign: 'center',
        headerStatusBarHeight: 75,
        headerStyle: {
          backgroundColor: "#FFFFFF",
        },
      }}
    />
  </UserStack.Navigator>
)
