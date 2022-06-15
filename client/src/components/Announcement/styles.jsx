import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  color: black;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  position: fixed;
  top: 0%;
  z-index: 5;
  background-color: rgb(255, 255, 255, 0.95);
  &:hover {
    background-color: rgb(255, 255, 255, 1);
  }
`;

const BannerTitle = styled.h1`
  letter-spacing: 2px;
  font-size: 24px;
  font-weight: 500;
  display: flex;
`;

const BannerTitleBold = styled.div`
  letter-spacing: 2px;
  font-size: 24px;
  font-weight: 900;
  padding-left: 8px;
  padding-right: 8px;
`;

export { Container, BannerTitle, BannerTitleBold };
