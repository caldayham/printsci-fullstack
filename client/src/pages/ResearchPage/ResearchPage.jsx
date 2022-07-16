import React, { useEffect } from "react";
import { MainContainer, Subtitle, Title } from "../../tools/globalStyles";
import Research from "../../components/Research/Research";

import { useDispatch } from "react-redux";
import { changePage } from "../../redux/currentPageRedux";

const ResearchPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const updatePage = () => {
      dispatch(changePage("research"));
    };
    updatePage();
  });

  return (
    <MainContainer flexDirection={"column"}>
      <Title>Research</Title>
      <Subtitle>
        Supporting the work that uncovers, organizes, and distributes knowledge
        is our <i style={{ fontWeight: "bold" }}>primary directive.</i>
      </Subtitle>
      <Research />
    </MainContainer>
  );
};

export default ResearchPage;
