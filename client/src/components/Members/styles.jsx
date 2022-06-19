import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 4%;
`;

const MemberWrapper = styled.button`
  display: flex;
  flex-direction: row;
  align-items: left;
  justify-content: space-between;
  margin-top: 4%;
  height: auto;
  flex: 1;
  padding: 20px;
  background-color: white;
  color: black;
  transition: all 0.1s ease;
  cursor: pointer;

  &:hover {
    background: rgb(14, 14, 14);
    color: white;
  }
`;

const MemberDesc = styled.p`
  padding-top: 10px;
  font-size: 18px;
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
  justify-content: left;
  width: 60%;
`;

const MemberTitle = styled.h1`
  display: flex;
  align-items: left;
`;

const MemberSubTitle = styled.h2`
  font-weight: 200;
  display: flex;
  align-items: left;
`;

export {
  MemberSubTitle,
  Container,
  MemberWrapper,
  MemberDesc,
  MemberImage,
  MemberText,
  MemberTitle,
};
