import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
  border: 1px solid rgb(14, 14, 14);
  border-radius: 20px;
`;

const SwitchWrapper = styled.div`
  border: 1px solid rgb(14, 14, 14);
  border-radius: 20px;

  width: 38px;
  height: 16px;
  padding: 2px;

  margin-bottom: 20px;

  display: flex;
  justify-content: ${(props) => (props.showingReal ? "left" : "right")};
`;

const SwitchHead = styled.div`
  width: 16px;
  height: 16px;

  border-radius: 8px;

  background-color: rgb(14, 14, 14);
`;

export { Container, SwitchWrapper, SwitchHead };
