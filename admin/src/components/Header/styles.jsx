import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 60px;

  background-color: rgb(14, 14, 14);
  color: white;

  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    background-color: rgb(0, 0, 0);
  }
`;

const HeaderTitle = styled.h1`
  padding-left: 20px;
`;

const AccountIcon = styled.div`
  margin-right: 20px;
`;

export { Container, HeaderTitle, AccountIcon };
