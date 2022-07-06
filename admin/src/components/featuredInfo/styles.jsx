import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const PercentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  border: none;
  border-radius: 10px;
  padding: 7px 10px;
  background-color: ${(props) =>
    props.perc >= 0 ? "rgb(88, 206, 108)" : "rgb(236, 79, 79)"};

  font-size: 20px;
  font-weight: 100;
`;

const MoneyInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 20px;
`;

export { Container, PercentWrapper, MoneyInfoWrapper };
