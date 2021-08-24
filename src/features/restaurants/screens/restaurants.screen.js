import React, { useContext, useState } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { Colors, ActivityIndicator } from "react-native-paper";

import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utility/safe-area.component";

import { RestaurantsContext } from "../../../services/restaurants/restaurants.context"; 
import { FavoritesContext } from "../../../services/favorites/favorites.context";

import { Search } from "../components/search.component";
import { RestaurantInfoCard } from "../components/restaurant-info.component";
import { FavoritesBar } from "../../../components/favorites/favorites-bar.component";
import { RestaurantList } from "../components/restaurant-list.styles";
import { FadeInView } from "../../../components/animations/fade.animations";

const ActivityView = styled.View`
    position: absolute;
    top: 50%;
    left: 50%;
`;

const Loading = styled(ActivityIndicator)`
    margin-left: -25px;
`;

export const RestaurantsScreen = ({ navigation }) => {
    const { isLoading, error, restaurants } = useContext(RestaurantsContext);
    const { favorites } = useContext(FavoritesContext);
    const [isToggled, setIsToggled] = useState(false);

    return (
    <SafeArea>
        <FadeInView>
        {isLoading && (
            <ActivityView>
                <Loading size={50} animating={true} color={Colors.red600}/>
            </ActivityView>
        )}
        <Search isFavoritesToggled={isToggled} onFavoritesToggled={() => setIsToggled(!isToggled)} />
        {isToggled && <FavoritesBar favorites={favorites} onNavigate={navigation.navigate} />}
        <RestaurantList
            data={restaurants}
            renderItem={({ item }) => {
                return (
                <TouchableOpacity onPress={() => navigation.navigate("RestaurantDetail", {
                    restaurant: item,
                })} >
                    <Spacer position="bottom" size="large">
                        <RestaurantInfoCard restaurant={item} />
                    </Spacer>
                </TouchableOpacity>
                );
            }}
            keyExtractor={(item) => item.name}
        />
        </FadeInView>
    </SafeArea>
    );
};
