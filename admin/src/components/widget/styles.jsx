import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProfileImg = styled.img`
  width: 30px;
`;

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;

  border: 1px solid rgb(14, 14, 14);
  border-radius: 10px;
`;

const WidgetList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const WidgetTitle = styled.span`
  font-size: 24px;
  font-weight: 500;
`;

const WidgetButton = styled.button`
  margin-left: 20px;

  display: flex;
  align-items: center;
  border: none;
  border-radius: 10px;
  padding: 7px 10px;
  background-color: #eeeef7;
  color: #555;
  cursor: pointer;
`;

export {
  Container,
  ProfileImg,
  ListItem,
  WidgetList,
  WidgetTitle,
  WidgetButton,
};
