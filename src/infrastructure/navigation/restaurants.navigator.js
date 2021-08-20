import React from "react";

import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";

import { RestaurantsScreen } from "../../features/screens/restaurants.screen";
import { RestaurantDetailScreen } from "../../features/screens/restaurant-detail.screen";

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
    return (
        <RestaurantStack.Navigator screenOptions={{ headerShown: false, ...TransitionPresets.ModalPresentationIOS }} >
            <RestaurantStack.Screen
                name="RestaurantsMainScreen"
                component={RestaurantsScreen}
            />
            <RestaurantStack.Screen
                name="RestaurantDetail"
                component={RestaurantDetailScreen}
            />
        </RestaurantStack.Navigator>
    );
};
