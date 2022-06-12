import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Announcement from "../../components/Announcement/Announcement";
import Footer from "../../components/Footer/Footer";
import { YoutubeSearchedForOutlined } from "@mui/icons-material";

import {
  Container,
  Title,
  Desc,
  SearchBox,
  Input,
  SubmitButton,
} from "./styles";

const NotFound404Page = () => {
  return (
    <div>
      <Container>
        <Announcement />
        <Navbar />
        <Title>404 Page Not Found</Title>
        <Desc>Search a list of confirmed pages below!</Desc>
        <SearchBox>
          <Input placeholder="type here" />
          <SubmitButton>
            <YoutubeSearchedForOutlined />
          </SubmitButton>
        </SearchBox>
      </Container>
      <Footer />
    </div>
  );
};

export default NotFound404Page;
