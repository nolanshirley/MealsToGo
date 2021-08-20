import React, { useContext } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { Colors, ActivityIndicator } from "react-native-paper";

import { Spacer } from "../../components/spacer/spacer.component";
import { SafeArea } from "../../components/utility/safe-area.component";

import { RestaurantsContext } from "../../services/restaurants/restaurants.context";

import { Search } from "../restaurants/components/search.component";
import { RestaurantInfoCard } from "../restaurants/components/restaurant-info.component";

const RestaurantList = styled(FlatList).attrs({
    contentContainerStyle: {
        padding: 16,
    },
})``;

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
    return (
    <SafeArea>
        {isLoading && (
            <ActivityView>
                <Loading size={50} animating={true} color={Colors.red600}/>
            </ActivityView>
        )}
        <Search />
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
    </SafeArea>
    );
};
