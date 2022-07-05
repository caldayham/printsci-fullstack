import React from "react";
import {
  ContentContainer,
  MainContainer,
  MainTitle,
} from "../../tools/globalStyles";
import { WidgetsContainer } from "./styles";

import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import { userData } from "../../tools/dummyData";
import UsersWidget from "../../components/widget/UsersWidget";
import PurchasesWidget from "../../components/widget/PurchasesWidget";

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
        <WidgetsContainer>
          <UsersWidget />
          <PurchasesWidget />
        </WidgetsContainer>
      </ContentContainer>
    </MainContainer>
  );
};

export default HomePage;
