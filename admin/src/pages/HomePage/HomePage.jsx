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
import UsersWidget from "../../components/widgets/UsersWidget";
import OrdersWidget from "../../components/widgets/OrdersWidget";

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
          <OrdersWidget />
        </WidgetsContainer>
      </ContentContainer>
    </MainContainer>
  );
};

export default HomePage;
