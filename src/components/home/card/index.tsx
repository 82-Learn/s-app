import * as React from "react";
import { CardType } from "./Types";
import {
    CardWrapper,
    CardImage,
    CardTextWrapper,
    CardTextTitle,
    CardTextBody,
} from "./CardStyles";

export const Card = ({ title, date, imgUrl, text }: CardType) => {
    return (
        <CardWrapper>
            <CardImage background={imgUrl} />
            <CardTextWrapper>
                <CardTextTitle>{title}</CardTextTitle>
                <CardTextBody>{text}</CardTextBody>
            </CardTextWrapper>
        </CardWrapper>
    );
};
