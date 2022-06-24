import React from "react";
import "./Rating.css";

// this is the SVG file that will be layerd behind the cover to give the filled rating
const FillRatingSVG = (props) => {
  return (
    <svg
      width={props.size ? props.size * props.avgRating : 4464}
      height={props.size ? (props.size * 1008) / 4466 : 1008}
      viewBox={`0 0 ${4464 * props.avgRating} 1008`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="none" stroke="none" strokeWidth={0} strokeMiterlimit={0}>
        <polygon
          className="st3"
          points="72,198.8 289.4,72 504,198 720.4,72 936,198 936,441 720,567 720,819 504.5,945 288,819 288,567 
	72,447.1 "
        />
        <polygon
          className="st3"
          points="1800,818.2 1582.6,945 1368,819 1151.6,945 936,819 936,576 1152,450 1152,198 1367.5,72 1584,198 
	1584,450 1800,569.9 "
        />
        <polygon
          className="st3"
          points="1800,198.8 2017.4,72 2232,198 2448.4,72 2664,198 2664,441 2448,567 2448,819 2232.5,945 2016,819 
	2016,567 1800,447.1 "
        />
        <polygon
          className="st3"
          points="3528,818.2 3310.6,945 3096,819 2879.6,945 2664,819 2664,576 2880,450 2880,198 3095.5,72 3312,198 
	3312,450 3528,569.9 "
        />
        <polygon
          className="st3"
          points="3528,198.8 3745.4,72 3960,198 4176.4,72 4392,198 4392,441 4176,567 4176,819 3960.5,945 3744,819 
	3744,567 3528,447.1 "
        />
      </g>
    </svg>
  );
};

// this is the SVG file that will be layerd on top in full
const CoverRatingSVG = (props) => {
  return (
    <svg
      width={props.size ? props.size : 4464}
      height={props.size ? (props.size * 1008) / 4466 : 1008}
      viewBox="0 0 4464 1008"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="none" stroke="none" strokeWidth={0} strokeMiterlimit={0}>
        <polygon className="st0" points="72,198 288,72 288,324 72,450 " />
        <polygon className="st0" points="288,567 288,819 504,693 504,441 " />
        <polygon className="st0" points="504,198 504,441 720,324 720,72 " />
        <polygon className="st1" points="720,567 504,441 720,324 936,450 " />
        <polygon className="st1" points="72,450 288,567 504,441 288,324 " />
        <polygon className="st1" points="288,72 288,324 504,441 504,198 " />
        <polygon className="st1" points="936,198 720,72 720,324 936,450 " />
        <polygon className="st1" points="720,819 504,693 504,441 720,567 " />
        <polygon className="st1" points="504,945 288,819 504,693 720,819 " />
        <polygon
          className="st2"
          points="72,198 288,72 504,198 720,72 936,198 936,450 720,567 720,819 504,945 288,819 288,567 72,450 "
        />
        <polygon
          className="st1"
          points="1800,819 1584,945 1584,693 1800,567 "
        />
        <polygon
          className="st1"
          points="1584,450 1584,198 1368,324 1368,576 "
        />
        <polygon
          className="st1"
          points="1368,819 1368,576 1152,693 1152,945 "
        />
        <polygon className="st0" points="1152,450 1368,576 1152,693 936,567 " />
        <polygon
          className="st0"
          points="1800,567 1584,450 1368,576 1584,693 "
        />
        <polygon
          className="st0"
          points="1584,945 1584,693 1368,576 1368,819 "
        />
        <polygon className="st0" points="936,819 1152,945 1152,693 936,567 " />
        <polygon
          className="st0"
          points="1152,198 1368,324 1368,576 1152,450 "
        />
        <polygon className="st0" points="1368,72 1584,198 1368,324 1152,198 " />
        <polygon
          className="st2"
          points="1800,819 1584,945 1368,819 1152,945 936,819 936,567 1152,450 1152,198 1368,72 1584,198 1584,450 
	1800,567 "
        />
        <polygon className="st0" points="1800,198 2016,72 2016,324 1800,450 " />
        <polygon
          className="st0"
          points="2016,567 2016,819 2232,693 2232,441 "
        />
        <polygon className="st0" points="2232,198 2232,441 2448,324 2448,72 " />
        <polygon
          className="st1"
          points="2448,567 2232,441 2448,324 2664,450 "
        />
        <polygon
          className="st1"
          points="1800,450 2016,567 2232,441 2016,324 "
        />
        <polygon className="st1" points="2016,72 2016,324 2232,441 2232,198 " />
        <polygon className="st1" points="2664,198 2448,72 2448,324 2664,450 " />
        <polygon
          className="st1"
          points="2448,819 2232,693 2232,441 2448,567 "
        />
        <polygon
          className="st1"
          points="2232,945 2016,819 2232,693 2448,819 "
        />
        <polygon
          className="st2"
          points="1800,198 2016,72 2232,198 2448,72 2664,198 2664,450 2448,567 2448,819 2232,945 2016,819 2016,567 
	1800,450 "
        />
        <polygon
          className="st1"
          points="3528,819 3312,945 3312,693 3528,567 "
        />
        <polygon
          className="st1"
          points="3312,450 3312,198 3096,324 3096,576 "
        />
        <polygon
          className="st1"
          points="3096,819 3096,576 2880,693 2880,945 "
        />
        <polygon
          className="st0"
          points="2880,450 3096,576 2880,693 2664,567 "
        />
        <polygon
          className="st0"
          points="3528,567 3312,450 3096,576 3312,693 "
        />
        <polygon
          className="st0"
          points="3312,945 3312,693 3096,576 3096,819 "
        />
        <polygon
          className="st0"
          points="2664,819 2880,945 2880,693 2664,567 "
        />
        <polygon
          className="st0"
          points="2880,198 3096,324 3096,576 2880,450 "
        />
        <polygon className="st0" points="3096,72 3312,198 3096,324 2880,198 " />
        <polygon
          className="st2"
          points="3528,819 3312,945 3096,819 2880,945 2664,819 2664,567 2880,450 2880,198 3096,72 3312,198 3312,450 
	3528,567 "
        />
        <polygon className="st0" points="3528,198 3744,72 3744,324 3528,450 " />
        <polygon
          className="st0"
          points="3744,567 3744,819 3960,693 3960,441 "
        />
        <polygon className="st0" points="3960,198 3960,441 4176,324 4176,72 " />
        <polygon
          className="st1"
          points="4176,567 3960,441 4176,324 4392,450 "
        />
        <polygon
          className="st1"
          points="3528,450 3744,567 3960,441 3744,324 "
        />
        <polygon className="st1" points="3744,72 3744,324 3960,441 3960,198 " />
        <polygon className="st1" points="4392,198 4176,72 4176,324 4392,450 " />
        <polygon
          className="st1"
          points="4176,819 3960,693 3960,441 4176,567 "
        />
        <polygon
          className="st1"
          points="3960,945 3744,819 3960,693 4176,819 "
        />
        <polygon
          className="st2"
          points="3528,198 3744,72 3960,198 4176,72 4392,198 4392,450 4176,567 4176,819 3960,945 3744,819 3744,567 
	3528,450 "
        />
      </g>
    </svg>
  );
};

export { FillRatingSVG, CoverRatingSVG };
