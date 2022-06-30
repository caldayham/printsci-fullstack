import React from "react";
import { MainContainer } from "../../tools/globalStyles";
import Research from "../../components/Research/Research";

import { useDispatch } from "react-redux";
import { changePage } from "../../redux/currentPageRedux";

const ResearchPage = () => {
  const dispatch = useDispatch();
  dispatch(changePage("research"));

  return (
    <MainContainer flexDirection={"column"}>
      <Research />
    </MainContainer>
  );
};

export default ResearchPage;
