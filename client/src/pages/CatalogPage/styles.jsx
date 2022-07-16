import styled from "styled-components";

const FiltersWrapper = styled.div`
  padding-bottom: 10px;
  padding-top: 10px;
  position: sticky;
  top: 130px;
  background-color: rgb(255, 255, 255);
  border-bottom: 1px solid rgb(200, 200, 200);
  z-index: 4;
`;

const CategoriesWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;

  justify-content: center;
  align-items: top;
`;

const CategoryWrapper = styled.button`
  display: flex;
  flex-direction: row;
  align-items: left;
  justify-content: space-between;
  height: auto;
  min-width: 200px;
  flex: 1;
  padding: 10px;
  background-color: ${(props) =>
    props.selectedCat === props.thisCat ? "rgb(14,14,14)" : "rgb(255,255,255)"};
  color: ${(props) =>
    props.selectedCat === props.thisCat ? "rgb(255,255,255)" : "rgb(0,0,0)"};
  transition: all 0.1s ease;
  cursor: pointer;

  &:hover {
    background: ${(props) =>
      props.selectedCat === props.thisCat ? "rgb(0,0,0)" : "rgb(14,14,14)"};
    color: white;
  }
`;

const CategoryDesc = styled.p`
  padding-top: 10px;
  font-size: 18px;
  text-align: left;
  font-weight: 200;
`;

const CategoryImage = styled.img`
  width: 120px;
  height: 120px;
`;

const CategoryText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: left;
  width: 60%;
`;

const CategoryTitle = styled.h1`
  display: flex;
  align-items: left;
`;

export {
  CategoriesWrapper,
  CategoryDesc,
  CategoryWrapper,
  CategoryImage,
  CategoryText,
  CategoryTitle,
  FiltersWrapper,
};
