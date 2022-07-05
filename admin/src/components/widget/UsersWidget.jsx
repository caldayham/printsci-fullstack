import {
  ListItem,
  ProfileImg,
  WidgetList,
  WidgetTitle,
  WidgetButton,
} from "./styles";

import { Visibility } from "@mui/icons-material";
import { ComponentContainer } from "../../tools/globalStyles";
import { useEffect, useState } from "react";
import { userRequest } from "../../tools/requestMethods";

import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

export default function UsersWidget() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await userRequest.get("users/?new=true");
        setUsers(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUsers();
  }, []);

  return (
    <ComponentContainer>
      <WidgetTitle>New Members</WidgetTitle>
      <WidgetList>
        {users.map((user) => (
          <ListItem key={user._id}>
            {user.img ? (
              <ProfileImg src={user.img} alt="" />
            ) : (
              <AccountCircleOutlinedIcon
                style={{ width: "30px", height: "30px", fontSize: "100px" }}
              />
            )}
            <span>{" " + user.username + " "}</span>
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
