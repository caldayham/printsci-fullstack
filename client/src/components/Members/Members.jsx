import React from "react";
import { Container } from "./styles";

import { members } from "../../tools/data";

const Members = () => {
  return (
    <Container>
      {members.map((item) => (
        <MemberItem item={item} key={item.id}></MemberItem>
      ))}
    </Container>
  );
};

export default Members;
