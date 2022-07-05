import { ComponentContainer, SubTitle } from "../../tools/globalStyles";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Chart({ title, data, dataKey, grid }) {
  return (
    <ComponentContainer color="rgb(240,240,240)">
      <SubTitle>{title}</SubTitle>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="rgb(14,14,14)" />
          <Line type="monotone" dataKey={dataKey} stroke="rgb(14,14,14)" />
          <Tooltip />
          {grid && (
            <CartesianGrid stroke="rgb(200,200,200)" strokeDasharray="5 5" />
          )}
        </LineChart>
      </ResponsiveContainer>
    </ComponentContainer>
  );
}
