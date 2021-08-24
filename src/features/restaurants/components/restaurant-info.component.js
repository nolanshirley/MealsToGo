import React from "react";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import { RestaurantCard, RestaurantCardCover, Info, Section, SectionEnd, Rating, Address, Icon } from "./restaurant-info-card.styles";
import { Favorite } from "../../../components/favorites/favorite.component";


export const RestaurantInfoCard = ({restaurant = {} }) => {
    const {
        name = "Some Restaurant",
        icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
        photos = ["https://images.unsplash.com/photo-1532550907401-a500c9a57435?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"],
        address = "100 some random street",
        isOpenNow = true,
        rating = 4,
        isClosedTemporarily = true,
        placeId,
    } = restaurant;

    const ratingArray = Array.from(new Array(Math.floor(rating)));

    return (
        <RestaurantCard elevation={5}>
            <Favorite restaurant={restaurant} />
            <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
            <Info>
                <Text variant="label" > {name} </Text>
                <Section>
                    <Rating>
                        { ratingArray.map((res, i) => (
                            <SvgXml xml={star} width={20} height={20} key={`star-${placeId}-${i}`} />
                        ))}
                    </Rating>
                    <SectionEnd>
                        {isClosedTemporarily && (
                            <Text variant="error"> CLOSED TEMPORARILY </Text>
                        )}
                        <Spacer position="left" size="large" >
                            {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
                        </Spacer>
                        <Spacer position="left" size="large" >
                            <Icon source={{ uri: icon }} />
                        </Spacer>
                    </SectionEnd>
                </Section>
                <Address> {address} </Address>
            </Info>
        </RestaurantCard>
    );
};
