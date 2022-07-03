import React from "react";
import { Container, SectionHeader, PageButton, SectionWrapper } from "./styles";

import { useNavigate } from "react-router";

const SideNav = () => {
  let navigate = useNavigate();

  const handlePageClick = (url) => {
    navigate(url);
    console.log(url);
  };

  return (
    <Container>
      <SectionWrapper>
        <SectionHeader>Dashboard</SectionHeader>
        <PageButton onClick={() => handlePageClick("/home")}>Home</PageButton>
        <PageButton onClick={() => handlePageClick("/analytics")}>
          Analytics
        </PageButton>
        <PageButton onClick={() => handlePageClick("/analytics")}>
          Sales
        </PageButton>
      </SectionWrapper>
      <SectionWrapper>
        <SectionHeader>CRUD</SectionHeader>
        <PageButton onClick={() => handlePageClick("/users")}>Users</PageButton>
        <PageButton onClick={() => handlePageClick("/products")}>
          Products
        </PageButton>
        <PageButton onClick={() => handlePageClick("/transactions")}>
          Transactions
        </PageButton>
        <PageButton onClick={() => handlePageClick("/research")}>
          Research
        </PageButton>
      </SectionWrapper>
      <SectionWrapper>
        <SectionHeader>Analytics</SectionHeader>
        <PageButton onClick={() => handlePageClick("/analytics/revenue")}>
          Revenue
        </PageButton>
        <PageButton onClick={() => handlePageClick("/analytics/demographics")}>
          Demographics
        </PageButton>
        <PageButton onClick={() => handlePageClick("/analytics/site")}>
          Site
        </PageButton>
      </SectionWrapper>
      <SectionWrapper>
        <SectionHeader>Notifications</SectionHeader>
        <PageButton onClick={() => handlePageClick("/email")}>Email</PageButton>
        <PageButton onClick={() => handlePageClick("/social-media")}>
          Social Media
        </PageButton>
      </SectionWrapper>
      <SectionWrapper>
        <SectionHeader>Staff</SectionHeader>
        <PageButton onClick={() => handlePageClick("/staff/software")}>
          Software
        </PageButton>
        <PageButton onClick={() => handlePageClick("/staff/manufacturing")}>
          Manufacturing
        </PageButton>
        <PageButton onClick={() => handlePageClick("/staff/sales-marketing")}>
          Sales & Marketing
        </PageButton>
        <PageButton
          onClick={() => handlePageClick("/staff/customer-satisfaction")}
        >
          Customer Staisfaction
        </PageButton>
      </SectionWrapper>
    </Container>
  );
};

export default SideNav;
