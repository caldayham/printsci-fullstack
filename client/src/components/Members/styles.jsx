import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 4%;
`;

const MemberDesc = styled.p`
  padding: none;
  font-size: 16px;
  text-align: left;
  font-weight: 200;
`;

const MemberImage = styled.img`
  width: 240px;
  height: 240px;
  border-radius: 10%;
`;

const MemberText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-between;
  width: 60%;
`;

const MemberDescWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: bottom;
`;

const MemberTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: top;
`;

const MemberTitle = styled.h1`
  font-weight: 500;
  font-size: 32px;
  display: flex;
  align-items: left;
`;

const MemberSubTitle = styled.h2`
  font-weight: 200;
  font-size: 22px;
  display: flex;
  align-items: left;
`;

export {
  MemberSubTitle,
  Container,
  MemberDesc,
  MemberImage,
  MemberText,
  MemberTitle,
  MemberDescWrapper,
  MemberTitleWrapper,
};
