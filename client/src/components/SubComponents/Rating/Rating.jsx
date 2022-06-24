import React from "react";
import {
  Container,
  RatingLink,
  RatingLayers,
  TopLayer,
  BottomLayer,
} from "./styles";
import { FillRatingSVG, CoverRatingSVG } from "./ratingPaths";

const Rating = (props) => {
  const decimalAvgRating = props.avgRating / 5;

  return (
    <Container>
      <RatingLayers size={props.size}>
        <TopLayer>
          <CoverRatingSVG size={props.size} />
        </TopLayer>
        <BottomLayer>
          <FillRatingSVG size={props.size} avgRating={decimalAvgRating} />
        </BottomLayer>
      </RatingLayers>
      <RatingLink href="#newsletter">{props.numRatings} ratings</RatingLink>|
      <RatingLink href="#newsletter">
        {props.numAnsweredQuestions} answered questions
      </RatingLink>
    </Container>
  );
};

export default Rating;
