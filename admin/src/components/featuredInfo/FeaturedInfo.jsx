import { useEffect, useState } from "react";

import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import {
  ComponentContainer,
  SubTitle,
  LocalHeader,
} from "../../tools/globalStyles";
import { Container, PercentWrapper, MoneyInfoWrapper } from "./styles";

import { userRequest } from "../../tools/requestMethods";

export default function FeaturedInfo() {
  const [income, setIncome] = useState([100, 200]);
  const [perc, setPerc] = useState();

  useEffect(() => {
    const getIncome = async () => {
      try {
        const res = await userRequest.get("orders/income");
        setIncome(res.data);
        setPerc((res.data[1].total * 100) / res.data[0].total - 100);
      } catch (err) {
        console.log("THERE WAS AN ERROR");
        console.log(err);
      }
    };
    getIncome();
  }, []);

  console.log(income);
  console.log(perc);

  return (
    <Container>
      <ComponentContainer>
        <SubTitle>Revenue</SubTitle>
        <MoneyInfoWrapper>
          <LocalHeader>${income[1].total}</LocalHeader>
          <PercentWrapper perc={perc}>
            {perc >= 0 ? <ArrowUpward /> : <ArrowDownward />}
            {Math.floor(perc)}%{" "}
            <span style={{ fontSize: "12px", color: "rgb(40,40,40)" }}>
              *compared to last month
            </span>
          </PercentWrapper>
        </MoneyInfoWrapper>
      </ComponentContainer>
      <ComponentContainer>
        <SubTitle>Sales</SubTitle>
        <MoneyInfoWrapper>
          <LocalHeader>${income[1].total}</LocalHeader>
          <PercentWrapper perc={perc}>
            {perc >= 0 ? <ArrowUpward /> : <ArrowDownward />}
            {Math.floor(perc)}%{" "}
            <span style={{ fontSize: "12px", color: "rgb(40,40,40)" }}>
              *compared to last month
            </span>
          </PercentWrapper>
        </MoneyInfoWrapper>
      </ComponentContainer>
      <ComponentContainer>
        <SubTitle>Cost</SubTitle>
        <MoneyInfoWrapper>
          <LocalHeader>${income[0].total}</LocalHeader>
          <PercentWrapper perc={(100 / perc) * -100}>
            {(100 / perc) * -100 >= 0 ? <ArrowUpward /> : <ArrowDownward />}
            {Math.floor((100 / perc) * -100)}%{" "}
            <span style={{ fontSize: "12px", color: "rgb(40,40,40)" }}>
              *compared to last month
            </span>
          </PercentWrapper>
        </MoneyInfoWrapper>
      </ComponentContainer>
    </Container>
  );
}
