import styled from "styled-components";

const Container = styled.div`
  min-width: 220px;
  height: calc(100vh - 60px);
  background-color: rgb(14, 14, 14);
  color: white;

  position: sticky;
  top: 50px;

  display: flex;
  flex-direction: column;
  overflow: scroll;

  scrollbar-width: none;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const SectionHeader = styled.div`
  margin: 0px;
  position: sticky;
  top: 0px;

  width: 100%;
  background-color: rgb(14, 14, 14);

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SectionWrapper = styled.div`
  padding-left: 20px;
  padding-right: 20px;

  display: flex;
  flex-direction: column;
  gap: 5px;

  position: relative;

  &:hover {
    background-color: rgb(0, 0, 0);
  }

  &:hover ${SectionHeader} {
    background-color: rgb(0, 0, 0);
  }
`;

const SectionHeaderTitle = styled.h3`
  font-weight: 600;
  margin: 0px;
`;

const PageButton = styled.button`
  padding: 8px;
  background-color: rgb(14, 14, 14);
  color: white;
  border: 1px solid rgb(100, 100, 100);

  display: flex;

  &:hover {
    background-color: rgb(0, 0, 0);
  }
`;

const CollapseIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgb(14, 14, 14);
  border-radius: 50%;
  margin: 4px;
`;

export {
  Container,
  SectionHeader,
  PageButton,
  SectionWrapper,
  SectionHeaderTitle,
  CollapseIconWrapper,
};
