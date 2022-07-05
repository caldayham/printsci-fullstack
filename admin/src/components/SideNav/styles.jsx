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

const SectionHeader = styled.button`
  margin-bottom: 10px;
  position: sticky;
  top: 0px;
  border: 1px solid rgb(200, 200, 200);
  cursor: pointer;

  width: 100%;
  background-color: rgb(14, 14, 14);
  color: white;

  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    background-color: rgb(0, 0, 0);
  }

  --active {
    background-color: rgb(0, 0, 0);
  }
`;

const SectionWrapper = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  position: relative;
`;

const SectionHeaderTitle = styled.h3`
  font-weight: 600;
  margin: 0px;
`;

const PageButton = styled.button`
  padding: 5px 12px 5px 5px;
  font-size: 14px;
  background-color: rgb(14, 14, 14);
  color: white;
  border: 1px solid rgb(40, 40, 40);

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;

  cursor: pointer;
  &:hover {
    background-color: rgb(0, 0, 0);
  }
`;

const CollapseIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 24px;

  background-color: rgb(14, 14, 14);
  border-radius: 50%;
  margin: 4px;
`;

const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 5px;

  height: ${(props) => (props.open ? "auto" : "0px")};
  overflow: hidden;
`;

export {
  Container,
  SectionHeader,
  PageButton,
  SectionWrapper,
  SectionHeaderTitle,
  CollapseIconWrapper,
  SectionContent,
};
