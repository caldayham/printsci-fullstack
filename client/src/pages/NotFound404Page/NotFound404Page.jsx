import React from "react";
import { YoutubeSearchedForOutlined } from "@mui/icons-material";

import { Title, Desc, SearchBox, Input, SubmitButton } from "./styles";

import { MainContainer } from "../../tools/globalStyles";

const NotFound404Page = () => {
  return (
    <MainContainer
      style={{
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "30vh",
      }}
    >
      <Title>404 Page Not Found</Title>
      <Desc>Search a list of confirmed pages below!</Desc>
      <SearchBox>
        <Input placeholder="type here" />
        <SubmitButton>
          <YoutubeSearchedForOutlined />
        </SubmitButton>
      </SearchBox>
    </MainContainer>
  );
};

export default NotFound404Page;
