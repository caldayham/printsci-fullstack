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
      <div>
        <RatingLink href="#newsletter" paddingRight={10}>
          <b>{props.numRatings}</b> ratings
        </RatingLink>
        |
        <RatingLink href="#newsletter" paddingLeft={10}>
          <b>{props.numAnsweredQuestions}</b> answered questions
        </RatingLink>
      </div>
    </Container>
  );
};

export default Rating;
