import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 60px;

  background-color: rgb(14, 14, 14);
  color: white;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: rgb(0, 0, 0);
  }
`;

export { Container };
