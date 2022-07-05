import { ListItem, ProfileImg, WidgetList, WidgetTitle } from "./styles";

import { Visibility } from "@mui/icons-material";
import { ComponentContainer } from "../../tools/globalStyles";
import { useEffect, useState } from "react";
import { userRequest } from "../../tools/requestMethods";

import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

export default function PurchasesWidget() {
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
    <ComponentContainer flex={2}>
      <WidgetTitle>Recent Orders</WidgetTitle>
      <WidgetList>
        {users.map((user) => (
          <ListItem key={user._id}>
            {user.img ? (
              <ProfileImg src={user.img} alt="" />
            ) : (
              <AccountCircleOutlinedIcon />
            )}
            <div className="widgetSmUser">
              <span>{user.username}</span>
              <span>{user.email}</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </ListItem>
        ))}
      </WidgetList>
    </ComponentContainer>
  );
}
