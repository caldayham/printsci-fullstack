import React from "react";

const FetchedImage = ({ url }) => {
  const assetBaseURL = process.env.REACT_APP_ASSET_CDN_BASE_URL;

  return <img src={`${assetBaseURL + url}`} alt="" />;
};

export default FetchedImage;
