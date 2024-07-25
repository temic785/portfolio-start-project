import React from "react";
import styled from "styled-components";

export const MyMap = () => {
  return (
    <StyledMyMap>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d75252.68666041282!2d27.51096870865868!3d53.88471296969959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbcfd35b1e6ad3%3A0xb61b853ddb570d9!2z0JzQuNC90YHQuiwg0JzQuNC90YHQutCw0Y8g0L7QsdC70LDRgdGC0Yw!5e0!3m2!1sru!2sby!4v1721847598161!5m2!1sru!2sby"
        width="100%"
        height="300"
        loading="lazy"
      ></iframe>
    </StyledMyMap>
  );
};
const StyledMyMap = styled.div`
  padding: 70px 0;
`;
