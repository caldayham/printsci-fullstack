import styled from "styled-components";

const Container = styled.div``;

const LogoImageBox = styled.div`
  width: 70px;
  height: 70px;
  padding-right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LogoImage = styled.img`
  display: flex;
  width: 90%;
  transition: all 0.1s ease;
`;

const LogoTitle = styled.h1`
  font-weight: bold;
  font-size: 24px;
  transition: all 0.2s ease;
  line-height: 80%;
`;

const LogoSlogan = styled.p`
  font-weight: 100;
  padding-top: 6px;
  font-size: 14px;

  transition: all 0.2s ease;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  color: white;
  width: 250px;
  height: 60px;

  &:hover ${LogoImage} {
    width: 100%;
  }
  &:hover ${LogoSlogan} {
    font-size: 20px;
    font-weight: bold;
  }
  &:hover ${LogoTitle} {
    font-weight: 100;
    font-size: 14px;
  }
`;

export { Container, LogoImage, LogoTitle, LogoImageBox, Logo, LogoSlogan };
