import React from "react";
import {
  ContentContainer,
  MainContainer,
  MainTitle,
} from "../../tools/globalStyles";

import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import { userData } from "../../tools/dummyData";
import WidgetSm from "../../components/widget/WidgetSm";

const HomePage = () => {
  return (
    <MainContainer>
      <MainTitle>Home</MainTitle>
      <ContentContainer>
        <FeaturedInfo />
        <Chart
          data={userData}
          title="User Analytics"
          grid
          dataKey="Active User"
        />
        <div className="homeWidgets">
          <WidgetSm />
        </div>
      </ContentContainer>
    </MainContainer>
  );
};

export default HomePage;
