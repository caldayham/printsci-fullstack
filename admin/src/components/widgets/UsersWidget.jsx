import {
  ListItem,
  ProfileImg,
  WidgetList,
  WidgetButton,
  DivHeader,
} from "./styles";

import { Visibility } from "@mui/icons-material";
import { ComponentContainer, SubTitle } from "../../tools/globalStyles";
import { useEffect, useState } from "react";
import { userRequest } from "../../tools/requestMethods";

import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

export default function UsersWidget() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await userRequest.get("users/?new=true&num=8");
        setUsers(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUsers();
  }, []);

  return (
    <ComponentContainer>
      <SubTitle>New Users</SubTitle>
      <WidgetList>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "10px 10px",
            marginTop: "-30px",
          }}
        >
          <DivHeader>User</DivHeader>
          <DivHeader>Email</DivHeader>
          <DivHeader>Display</DivHeader>
        </div>
        {users.map((user) => (
          <ListItem key={user._id}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  paddingRight: "10px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {user.img ? (
                  <ProfileImg src={user.img} alt="" />
                ) : (
                  <AccountCircleOutlinedIcon
                    style={{ width: "30px", height: "30px", fontSize: "100px" }}
                  />
                )}
              </div>
              <span>{user.username}</span>
            </div>
            <span>{user.email}</span>
            <WidgetButton>
              <Visibility className="widgetSmIcon" />
              Display
            </WidgetButton>
          </ListItem>
        ))}
      </WidgetList>
    </ComponentContainer>
  );
}
