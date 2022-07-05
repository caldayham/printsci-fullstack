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

  cursor: pointer;
  &:hover {
    background-color: rgb(14, 14, 14);
    color: rgb(255, 255, 255);
  }
`;

const WidgetList = styled.ul`
  margin: 0;
  padding-left: 0px;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const WidgetTable = styled.table`
  width: 100%;
  border-spacing: 20px;
  margin-top: -20px;
`;

const TableRow = styled.tr`
  &:hover {
    background-color: rgb(14, 14, 14);
    color: rgb(255, 255, 255);
  }
`;

const TableDataCell = styled.td`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const TableHeader = styled.th`
  text-align: left;
  font-size: 20px;
  font-weight: 300;
`;

const DivHeader = styled.p`
  font-size: 20px;
  font-weight: 300;
`;

const WidgetButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  border-radius: 10px;
  padding: 7px 10px;
  background-color: #eeeef7;
  color: #555;
  cursor: pointer;
`;

const WidgetTag = styled.button`
  display: flex;
  align-items: center;
  border: none;
  border-radius: 10px;
  padding: 7px 10px;
  background-color: ${(props) =>
    props.status === "pending"
      ? "rgb(255, 232, 128)"
      : props.status === "in-progress"
      ? "rgb(128, 147, 255)"
      : props.status === "complete"
      ? "rgb(100, 199, 100)"
      : "rgb(255, 78, 78)"};
  color: #000000;
  cursor: pointer;
`;

export {
  Container,
  ProfileImg,
  ListItem,
  WidgetList,
  WidgetButton,
  WidgetTable,
  TableRow,
  TableHeader,
  TableDataCell,
  DivHeader,
  WidgetTag,
};
