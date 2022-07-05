import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import { ComponentContainer, SubTitle } from "../../tools/globalStyles";
import { Container } from "./styles";

export default function FeaturedInfo() {
  return (
    <Container>
      <ComponentContainer>
        <SubTitle>Revanue</SubTitle>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,415</span>
          <span className="featuredMoneyRate">
            -11.4 <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </ComponentContainer>
      <ComponentContainer>
        <SubTitle>Sales</SubTitle>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$4,415</span>
          <span className="featuredMoneyRate">
            -1.4 <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </ComponentContainer>
      <ComponentContainer>
        <SubTitle>Cost</SubTitle>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,225</span>
          <span className="featuredMoneyRate">
            +2.4 <ArrowUpward className="featuredIcon" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </ComponentContainer>
    </Container>
  );
}
