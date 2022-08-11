import React from "react";
import {
  Container,
  MemberDesc,
  MemberImage,
  MemberText,
  MemberTitle,
  MemberSubTitle,
  MemberDescWrapper,
  MemberTitleWrapper,
} from "./styles";
import {
  SocialContainer,
  SocialIcon,
  SocialIconContainer,
  HoverCardWrapper,
} from "../../tools/globalStyles.jsx";
import Icon from "react-icons-kit";

import { members } from "../../Data/memberData";

const Members = () => {
  return (
    <Container>
      {members.map((item, i) => (
        <HoverCardWrapper key={i}>
          <MemberText>
            <MemberTitleWrapper>
              <MemberTitle>{item.title}</MemberTitle>
              <MemberSubTitle>{item.position}</MemberSubTitle>
            </MemberTitleWrapper>
            <MemberDescWrapper>
              <MemberDesc>
                <b>likes ➔</b>
                {" " + item.loves}
              </MemberDesc>
              <MemberDesc>
                {" "}
                <b>dislikes ➔</b>
                {" " + item.hates}
              </MemberDesc>
              <MemberDesc>
                {" "}
                <b>strength ➔</b>
                {" " + item.strength}
              </MemberDesc>
              <MemberDesc>
                {" "}
                <b>weakness ➔</b>
                {" " + item.weakness}
              </MemberDesc>
              <MemberDesc>
                {" "}
                <b>frequent exclamation ➔</b>
                <i> {" " + item.catchPhrase}</i>
              </MemberDesc>
            </MemberDescWrapper>
            <SocialContainer>
              {item.socials.map((account, i) => (
                <a
                  href={account.link}
                  target="_blank"
                  rel="noreferrer"
                  title={account.linkTitle}
                  key={i}
                >
                  <SocialIconContainer>
                    <SocialIcon color={account.color}>
                      <Icon icon={account.icon} size={"60%"} />
                    </SocialIcon>
                  </SocialIconContainer>
                </a>
              ))}
            </SocialContainer>
          </MemberText>
          <MemberImage src={process.env.REACT_APP_IMGURL + item.img} />
        </HoverCardWrapper>
      ))}
    </Container>
  );
};

export default Members;
