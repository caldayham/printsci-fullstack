import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const FeaturedItem = styled.div`
  padding: 20px;
  border: 1px solid rgb(14, 14, 14);
  border-radius: 20px;
  flex: 1;
  min-width: 200px;
`;

export { Container, FeaturedItem };
