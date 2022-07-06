import { ComponentContainer, SubTitle } from "../../tools/globalStyles";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { useState } from "react";
import { SwitchHead, SwitchWrapper } from "./styles";

export default function Chart({ title, realData, displayData, dataKey, grid }) {
  const [showingReal, setShowingReal] = useState(true);

  return (
    <ComponentContainer color="rgb(240,240,240)">
      <SubTitle>{title}</SubTitle>
      <SwitchWrapper
        onClick={() =>
          setShowingReal((prev) => !prev) & console.log(showingReal)
        }
        showingReal={showingReal}
      >
        <SwitchHead />
      </SwitchWrapper>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={showingReal ? realData : displayData}>
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
