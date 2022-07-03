import styled from "styled-components";

const Container = styled.div`
  min-width: 220px;
  height: calc(100vh - 60px);
  background-color: rgb(14, 14, 14);
  color: white;

  position: sticky;
  top: 50px;

  padding-left: 20px;
  padding-right: 20px;

  display: flex;
  flex-direction: column;
`;

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  margin-bottom: 40px;
`;

const SectionHeader = styled.h3`
  font-weight: 600;
  margin: 0px;
  padding-bottom: 5px;
`;

const PageButton = styled.button`
  padding: 5px;
  background-color: rgb(14, 14, 14);
  color: white;
  border: 1px solid rgb(100, 100, 100);

  display: flex;

  &:hover {
    background-color: rgb(0, 0, 0);
  }
`;

export { Container, SectionHeader, PageButton, SectionWrapper };
