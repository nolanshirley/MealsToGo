import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RestaurantsNavigator } from "./restaurants.navigator";
import { MapScreen } from "../../features/map/screens/map.screen";
import { FavoritesContextProvider } from "../../services/favorites/favorites.context";
import { LocationContextProvider } from "../../services/location/location.context";
import { RestaurantsContextProvider } from "../../services/restaurants/restaurants.context";
import { SettingsNavigator } from "./settings.navigator";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: "md-restaurant",
  Map: "md-map",
  Settings: "md-settings",
};

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
};// Instead of mounting these context providers in app.js, we mount them here in app.navigator when a user is already logged in. 
      // Once a user logs out then the memory of these context providers is wiped clean.

export const AppNavigator = () => {

    return ( 
        <FavoritesContextProvider>
          <LocationContextProvider>
            <RestaurantsContextProvider >
              <Tab.Navigator
              screenOptions={creatingScreenOptions}>
                  <Tab.Screen options={{header: () => null}} name="Restaurants" component={RestaurantsNavigator} />
                  <Tab.Screen options={{header: () => null}}  name="Map" component={MapScreen} />
                  <Tab.Screen options={{header: () => null}}  name="Settings" component={SettingsNavigator} />
              </Tab.Navigator>
            </RestaurantsContextProvider>
          </LocationContextProvider>
        </FavoritesContextProvider>
    );
};
