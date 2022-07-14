import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  height: 200px;
  align-items: ${(props) => (props.align ? props.align : "left")};
`;

export { Wrapper };
