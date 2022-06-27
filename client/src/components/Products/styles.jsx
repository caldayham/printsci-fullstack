import styled from "styled-components";

const Container = styled.div`
  padding: 20px ${(props) => (props.paddingSides ? props.paddingSides : "0px")};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export { Container };
