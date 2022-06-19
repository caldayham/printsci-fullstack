import React from "react";
import {
  Container,
  MemberWrapper,
  MemberDesc,
  MemberImage,
  MemberText,
  MemberTitle,
  MemberSubTitle,
} from "./styles";
import {
  SocialContainer,
  SocialIcon,
  SocialIconContainer,
} from "../../tools/globalStyles.jsx";
import LinkedIn from "@mui/icons-material/LinkedIn";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";

import { members } from "../../tools/data";

const Members = () => {
  return (
    <Container>
      {members.map((item) => (
        <MemberWrapper>
          <MemberText>
            <MemberTitle>{item.title}</MemberTitle>
            <MemberSubTitle>{item.position}</MemberSubTitle>
            <MemberDesc>{item.catchPhrase}</MemberDesc>
            <SocialContainer>
              {item.socials.map((account) => (
                <SocialIconContainer>
                  <SocialIcon color="0077b5">
                    <LinkedIn />
                  </SocialIcon>
                </SocialIconContainer>
              ))}
            </SocialContainer>
          </MemberText>
          <MemberImage src={item.img} />
        </MemberWrapper>
      ))}
    </Container>
  );
};

export default Members;
