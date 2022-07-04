import React from "react";
import {
  Container,
  SectionHeader,
  PageButton,
  SectionWrapper,
  SectionHeaderTitle,
  CollapseIconWrapper,
} from "./styles";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import { useNavigate } from "react-router";

const SideNav = () => {
  let navigate = useNavigate();

  const handlePageClick = (url) => {
    navigate(url);
  };

  return (
    <Container>
      <SectionWrapper>
        <div style={{ height: "10px" }} />
        <SectionHeader>
          <SectionHeaderTitle>Dashboard</SectionHeaderTitle>
          <CollapseIconWrapper>
            <ChevronRightIcon />
          </CollapseIconWrapper>
        </SectionHeader>
        <PageButton onClick={() => handlePageClick("/home")}>Home</PageButton>
        <PageButton onClick={() => handlePageClick("/crud")}>
          CRUD Data
        </PageButton>
        <PageButton onClick={() => handlePageClick("/analytics")}>
          Analytics
        </PageButton>
        <PageButton onClick={() => handlePageClick("/notifications")}>
          Notifications
        </PageButton>
        <div style={{ height: "20px" }} />
      </SectionWrapper>
      <SectionWrapper>
        <div style={{ height: "10px" }} />
        <SectionHeader>
          <SectionHeaderTitle>CRUD Data</SectionHeaderTitle>
          <CollapseIconWrapper>
            <ChevronRightIcon />
          </CollapseIconWrapper>
        </SectionHeader>
        <PageButton onClick={() => handlePageClick("/crud/users")}>
          Users
        </PageButton>
        <PageButton onClick={() => handlePageClick("/crud/products")}>
          Products
        </PageButton>
        <PageButton onClick={() => handlePageClick("/crud/transactions")}>
          Transactions
        </PageButton>
        <PageButton onClick={() => handlePageClick("/crud/research")}>
          Research
        </PageButton>
        <div style={{ height: "20px" }} />
      </SectionWrapper>
      <SectionWrapper>
        <div style={{ height: "10px" }} />
        <SectionHeader>
          <SectionHeaderTitle>Analytics</SectionHeaderTitle>
          <CollapseIconWrapper>
            <ChevronRightIcon />
          </CollapseIconWrapper>
        </SectionHeader>
        <PageButton onClick={() => handlePageClick("/analytics/revenue")}>
          Revenue
        </PageButton>
        <PageButton onClick={() => handlePageClick("/analytics/demographics")}>
          Demographics
        </PageButton>
        <PageButton onClick={() => handlePageClick("/analytics/site-data")}>
          Site Data
        </PageButton>
        <div style={{ height: "20px" }} />
      </SectionWrapper>
      <SectionWrapper>
        <div style={{ height: "10px" }} />
        <SectionHeader>
          <SectionHeaderTitle>Notifications</SectionHeaderTitle>
          <CollapseIconWrapper>
            <ChevronRightIcon />
          </CollapseIconWrapper>
        </SectionHeader>
        <PageButton onClick={() => handlePageClick("/notifications/email")}>
          Email
        </PageButton>
        <PageButton
          onClick={() => handlePageClick("/notifications/social-media")}
        >
          Social Media
        </PageButton>
        <PageButton
          onClick={() => handlePageClick("/notifications/site-forms")}
        >
          Site Forms
        </PageButton>
        <div style={{ height: "20px" }} />
      </SectionWrapper>
      <SectionWrapper style={{ paddingBottom: "1000px" }}>
        <div style={{ height: "10px" }} />
        <SectionHeader>
          <SectionHeaderTitle>Pog Team (⌐■_■)</SectionHeaderTitle>
          <CollapseIconWrapper>
            <ChevronRightIcon />
          </CollapseIconWrapper>
        </SectionHeader>
        <PageButton onClick={() => handlePageClick("/team/software")}>
          Software
        </PageButton>
        <PageButton onClick={() => handlePageClick("/team/manufacturing")}>
          Manufacturing
        </PageButton>
        <PageButton onClick={() => handlePageClick("/team/sales-marketing")}>
          Sales & Marketing
        </PageButton>
        <PageButton
          onClick={() => handlePageClick("/team/customer-satisfaction")}
        >
          Customer Staisfaction
        </PageButton>
        <div style={{ height: "20px" }} />
      </SectionWrapper>
    </Container>
  );
};

export default SideNav;
