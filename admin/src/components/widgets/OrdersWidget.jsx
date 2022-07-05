import {
  ProfileImg,
  WidgetTag,
  WidgetTable,
  TableRow,
  TableHeader,
  TableDataCell,
} from "./styles";

import { ComponentContainer, SubTitle } from "../../tools/globalStyles";
import { useEffect, useState } from "react";
import { userRequest } from "../../tools/requestMethods";
import { format } from "timeago.js";

import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

export default function OrdersWidget() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await userRequest.get("orders/?new=true&num=3");
        setOrders(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getOrders();
  }, []);

  return (
    <ComponentContainer flex={2}>
      <SubTitle>Recent Orders</SubTitle>
      <WidgetTable>
        <thead>
          <TableRow>
            <TableHeader>Order ID</TableHeader>
            <TableHeader>Total</TableHeader>
            <TableHeader>Date</TableHeader>
            <TableHeader>Status</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {orders.map((order) => (
            <TableRow key={order._id}>
              <TableDataCell>
                <div
                  style={{
                    paddingRight: "10px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {order.img ? (
                    <ProfileImg src={order.img} alt="" />
                  ) : (
                    <ShoppingBagOutlinedIcon
                      style={{
                        width: "30px",
                        height: "30px",
                        fontSize: "100px",
                      }}
                    />
                  )}
                </div>
                <span>{order.userId}</span>
              </TableDataCell>
              <td>{order.amount}</td>
              <td>{format(order.createdAt)}</td>
              <td>
                <WidgetTag status={order.status}>{order.status}</WidgetTag>
              </td>
            </TableRow>
          ))}
        </tbody>
      </WidgetTable>
    </ComponentContainer>
  );
}
