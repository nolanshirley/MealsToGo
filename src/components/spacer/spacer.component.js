import styled from "styled-components/native";
import React from "react";
import { useTheme } from "styled-components";

const sizeVariant = {
    small: 1,
    medium: 2,
    large: 3,
};

const positionVariant = {
    top: "marginTop",
    left: "marginLeft",
    bottom: "marginBottom",
    right: "marginRight",
};

const getVariant = (position, size, theme) => {
    const sizeIndex = sizeVariant[size];
    const property = positionVariant[position];
    const value = theme.space[sizeIndex];
    return `${property}:${value}`;

};
// this dynamic function below inside of the render body of styled view and the we need to separate this out to fix android bug
// export const Spacer = styled.View`
//     ${({position,size,theme}) => getVariant(position, size, theme)}
// `;

const SpacerView = styled.View`
    ${({ variant }) => variant };
`;
// android bug for this component -- variant is configured ahead of run time so app can load on android
export const Spacer = ({ position, size, children }) => {
    const theme = useTheme();
    const variant = getVariant(position, size, theme);
    return (
        <SpacerView variant={variant}>
            {children}
        </SpacerView>
    );
};

Spacer.defaultProps = {
    position: "top",
    size: "small",
};
