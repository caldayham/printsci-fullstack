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
  flex: 1.2;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Center = styled.div`
  flex: 2;
  padding: 20px;
  padding-left: 5%;
`;

const Title = styled.h3`
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
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
`;

const Desc = styled.p`
  margin: 20px 0px;
  width: 80%;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;

  margin-right: 20px;
  cursor: pointer;

  transition: all 0.2s ease;

  &:hover {
    width: 45px;
    height: 45px;
  }
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
  SocialContainer,
  SocialIcon,
  Title,
  List,
  ListItem,
  ContactItem,
  Payment,
};
