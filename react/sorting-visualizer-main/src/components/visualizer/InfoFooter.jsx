import React from "react";
import styled from "styled-components";

const InfoFlex = styled.div`
  display: flex;
  justify-content: center;
`;

export function InfoFooter({ swapCount }) {
  return (
    <InfoFlex>
      <div>Swaps: <strong>{swapCount}</strong></div>
      
    </InfoFlex>
  );
}
