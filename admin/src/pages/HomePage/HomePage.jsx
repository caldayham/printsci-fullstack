import React, { useEffect, useMemo, useState } from "react";
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
import { userRequest } from "../../tools/requestMethods";

const HomePage = () => {
  const [userStats, setUserStats] = useState([]);
  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest.get("/users/stats");
        res.data.map((item) =>
          setUserStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], "Active User": item.total },
          ])
        );
      } catch (err) {
        console.error(err);
      }
    };
    getStats();
  }, [MONTHS]);

  console.log(userStats);

  return (
    <MainContainer>
      <MainTitle>Home Panel</MainTitle>
      <ContentContainer>
        <FeaturedInfo />
        <Chart
          realData={userStats}
          displayData={userData}
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
