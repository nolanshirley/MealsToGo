import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { SafeArea } from "../../components/utility/safe-area.component";
import { Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RestaurantsNavigator } from "./restaurants.navigator";
import { MapScreen } from "../../features/map/screens/map.screen";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: "md-restaurant",
  Map: "md-map",
  Settings: "md-settings",
};

const Settings = () => <SafeArea><Text> Settings </Text></SafeArea>;

const creatingScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
    activeTintColor: "#ef5050",
    inactiveTintColor: "white",
    tabStyle: {
      backgroundColor: "#256CBC",
    },
  };
};

export const AppNavigator = () => {

    return (
        <>
        <NavigationContainer>
            <Tab.Navigator
            screenOptions={creatingScreenOptions}>
                <Tab.Screen options={{header: () => null}} name="Restaurants" component={RestaurantsNavigator} />
                <Tab.Screen options={{header: () => null}}  name="Map" component={MapScreen} />
                <Tab.Screen options={{header: () => null}}  name="Settings" component={Settings} />
            </Tab.Navigator>
        </NavigationContainer>
      </>
    );
};
