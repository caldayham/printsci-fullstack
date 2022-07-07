import React, { useState } from "react";
import {
  Container,
  SectionHeader,
  PageButton,
  SectionWrapper,
  SectionHeaderTitle,
  CollapseIconWrapper,
  SectionContent,
} from "./styles";

import { ChevronRight, KeyboardArrowDownOutlined } from "@mui/icons-material";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DataObjectIcon from "@mui/icons-material/DataObject";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import CreditScoreOutlinedIcon from "@mui/icons-material/CreditScoreOutlined";
import BiotechOutlinedIcon from "@mui/icons-material/BiotechOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import AccountTreeOutlinedIcon from "@mui/icons-material/AccountTreeOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import PrecisionManufacturingOutlinedIcon from "@mui/icons-material/PrecisionManufacturingOutlined";
import SellOutlinedIcon from "@mui/icons-material/SellOutlined";
import SentimentSatisfiedOutlinedIcon from "@mui/icons-material/SentimentSatisfiedOutlined";

import { useNavigate } from "react-router";

const SideNav = () => {
  const [dashboard, setDashboard] = useState(true);
  const [crud, setCrud] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [notifications, setNotifications] = useState(false);
  const [team, setTeam] = useState(false);

  let navigate = useNavigate();

  const handlePageClick = (url) => {
    navigate(url);
  };

  return (
    <Container>
      <SectionWrapper>
        <SectionHeader onClick={() => setDashboard((prev) => !prev)}>
          <SectionHeaderTitle>Dashboard</SectionHeaderTitle>
          <CollapseIconWrapper>
            {!dashboard && <ChevronRight />}
            {dashboard && <KeyboardArrowDownOutlined />}
          </CollapseIconWrapper>
        </SectionHeader>
        <SectionContent open={dashboard}>
          <PageButton onClick={() => handlePageClick("/home")}>
            Home
            <HomeOutlinedIcon style={{ width: "20px" }} />
          </PageButton>
          <PageButton onClick={() => handlePageClick("/crud")}>
            CRUD Data
            <DataObjectIcon style={{ width: "20px" }} />
          </PageButton>
          <PageButton onClick={() => handlePageClick("/analytics")}>
            Analytics
            <AssessmentOutlinedIcon style={{ width: "20px" }} />
          </PageButton>
          <PageButton
            onClick={() => handlePageClick("/notifications")}
            style={{ marginBottom: "40px" }}
          >
            Notifications
            <NotificationsNoneOutlinedIcon style={{ width: "20px" }} />
          </PageButton>
        </SectionContent>
      </SectionWrapper>
      <SectionWrapper>
        <SectionHeader onClick={() => setCrud((prev) => !prev)}>
          <SectionHeaderTitle>CRUD Data</SectionHeaderTitle>
          <CollapseIconWrapper>
            {!crud && <ChevronRight />}
            {crud && <KeyboardArrowDownOutlined />}{" "}
          </CollapseIconWrapper>
        </SectionHeader>
        <SectionContent open={crud}>
          <PageButton onClick={() => handlePageClick("/crud/products")}>
            Products
            <CategoryOutlinedIcon style={{ width: "20px" }} />
          </PageButton>
          <PageButton onClick={() => handlePageClick("/crud/orders")}>
            Orders
            <LocalShippingOutlinedIcon style={{ width: "20px" }} />
          </PageButton>
          <PageButton onClick={() => handlePageClick("/crud/users")}>
            Users
            <GroupOutlinedIcon style={{ width: "20px" }} />
          </PageButton>
          <PageButton onClick={() => handlePageClick("/crud/transactions")}>
            Transactions
            <CreditScoreOutlinedIcon style={{ width: "20px" }} />
          </PageButton>
          <PageButton
            onClick={() => handlePageClick("/crud/research")}
            style={{ marginBottom: "40px" }}
          >
            Research
            <BiotechOutlinedIcon style={{ width: "20px" }} />
          </PageButton>
        </SectionContent>
      </SectionWrapper>
      <SectionWrapper>
        <SectionHeader onClick={() => setAnalytics((prev) => !prev)}>
          <SectionHeaderTitle>Analytics</SectionHeaderTitle>
          <CollapseIconWrapper>
            {!analytics && <ChevronRight />}
            {analytics && <KeyboardArrowDownOutlined />}{" "}
          </CollapseIconWrapper>
        </SectionHeader>
        <SectionContent open={analytics}>
          <PageButton onClick={() => handlePageClick("/analytics/revenue")}>
            Revenue
            <AttachMoneyOutlinedIcon style={{ width: "20px" }} />
          </PageButton>
          <PageButton
            onClick={() => handlePageClick("/analytics/demographics")}
          >
            Demographics
            <GroupsOutlinedIcon style={{ width: "20px" }} />
          </PageButton>
          <PageButton
            onClick={() => handlePageClick("/analytics/site-data")}
            style={{ marginBottom: "40px" }}
          >
            Site Data
            <AccountTreeOutlinedIcon style={{ width: "20px" }} />
          </PageButton>
        </SectionContent>
      </SectionWrapper>
      <SectionWrapper>
        <SectionHeader onClick={() => setNotifications((prev) => !prev)}>
          <SectionHeaderTitle>Notifications</SectionHeaderTitle>
          <CollapseIconWrapper>
            {!notifications && <ChevronRight />}
            {notifications && <KeyboardArrowDownOutlined />}{" "}
          </CollapseIconWrapper>
        </SectionHeader>
        <SectionContent open={notifications}>
          <PageButton onClick={() => handlePageClick("/notifications/email")}>
            Email
            <EmailOutlinedIcon style={{ width: "20px" }} />
          </PageButton>
          <PageButton
            onClick={() => handlePageClick("/notifications/social-media")}
          >
            Social Media
            <ShareOutlinedIcon style={{ width: "20px" }} />
          </PageButton>
          <PageButton
            onClick={() => handlePageClick("/notifications/site-forms")}
            style={{ marginBottom: "40px" }}
          >
            Site Forms
            <ChatBubbleOutlineOutlinedIcon style={{ width: "20px" }} />
          </PageButton>
        </SectionContent>
      </SectionWrapper>
      <SectionWrapper>
        <SectionHeader onClick={() => setTeam((prev) => !prev)}>
          <SectionHeaderTitle>Pog Team (⌐■_■)</SectionHeaderTitle>
          <CollapseIconWrapper>
            {!team && <ChevronRight />}
            {team && <KeyboardArrowDownOutlined />}{" "}
          </CollapseIconWrapper>
        </SectionHeader>
        <SectionContent open={team}>
          <PageButton onClick={() => handlePageClick("/team/software")}>
            Software
            <CodeOutlinedIcon style={{ width: "20px" }} />
          </PageButton>
          <PageButton onClick={() => handlePageClick("/team/manufacturing")}>
            Manufacturing
            <PrecisionManufacturingOutlinedIcon style={{ width: "20px" }} />
          </PageButton>
          <PageButton onClick={() => handlePageClick("/team/sales-marketing")}>
            Sales & Marketing
            <SellOutlinedIcon style={{ width: "20px" }} />
          </PageButton>
          <PageButton
            onClick={() => handlePageClick("/team/customer-satisfaction")}
            style={{ marginBottom: "40px" }}
          >
            Customer Staisfaction
            <SentimentSatisfiedOutlinedIcon style={{ width: "20px" }} />
          </PageButton>
        </SectionContent>
      </SectionWrapper>
    </Container>
  );
};

export default SideNav;
