import styled from "styled-components";

const AmountContainer = styled.div`
  display: flex;
  border: 1px solid rgb(0, 0, 0);
  width: 100px;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(255, 255, 255);
`;

const Amount = styled.div`
  width: 30px;
  height: 30px;
  border-left: 1px solid black;
  border-right: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
  font-size: 18px;
  font-weight: 200;
  color: black;
`;

export { AmountContainer, Amount };
