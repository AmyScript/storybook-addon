import React from "react";
import { styled } from "@storybook/theming";
import {  Button, Div } from "@storybook/components";

export const RequestDataButton = styled(Button)({
  marginTop: "1rem",
});

const CssDisplay = styled(Div)({
  whiteSpace: "pre-line",
  padding: "10px",
});

interface PanelContentProps {
  style: Array<string>,
}

export const PanelContent: React.FC<PanelContentProps> = ({ style}) => (
  <React.Fragment>
    {style.map((value, i) => {
      return (
        <CssDisplay key={i}>{value}</CssDisplay>
      )
    })}
  </React.Fragment>
);
