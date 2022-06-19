import styled from "styled-components";

const Container = styled.div`
  display: flex;
  color: white;

  transition: all 0.2s ease;
  background-color: rgb(0, 0, 0, 0.95);
  &:hover {
    background-color: rgb(0, 0, 0, 1);
  }
`;

const Left = styled.div`
  flex: 1.4;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Center = styled.div`
  flex: 2;
  padding: 20px;
  padding-left: 5%;
`;

const Title = styled.h2`
  margin-bottom: 30px;
  margin-top: 20px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  font-weight: 200;
  color: white;

  &:hover {
    text-decoration: underline;
  }
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: center;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
`;

const Desc = styled.p`
  margin: 20px 0px;
  width: 80%;
`;

const Payment = styled.img`
  margin-top: 10px;
  width: 50%;
`;

export {
  Container,
  Left,
  Center,
  Right,
  Logo,
  Desc,
  Title,
  List,
  ListItem,
  ContactItem,
  Payment,
};
